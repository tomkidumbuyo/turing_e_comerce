import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api.service';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products = [];
  total = 0;
  cart_id;

  private subject = new Subject<any>();

  constructor(
    public restApi: RestApiService,
  ) {

    this.cart_id = localStorage.getItem('cart_id');

    if (this.cart_id && this.cart_id != 'null') {
      console.log("null returns true ");
      this.restApi.get('shoppingcart/'+this.cart_id).subscribe((data) => {
        this.products = data;
      });
    }else{
      this.restApi.get('shoppingcart/generateUniqueId').subscribe((data) => {
        this.cart_id = data.cart_id
        localStorage.setItem('cart_id',this.cart_id);
      });
    }
    this.refreshTotal();
    this.subject.next({products: this.products, total: this.total});

  }

  removeFromCart(id: number) {

    this.restApi.delete('shoppingcart/removeProduct/' + id).subscribe((data) => {
      this.products = this.products.filter((currentProduct) => {
        return currentProduct.item_id !== id;
      });
    });

    this.refreshTotal();
    this.subject.next({products: this.products, total: this.total});

  }

  addToCart( id, amount = 1 , attributes = "" ) {

    

    let alreadyAdded = false;
    this.products.forEach((product) => {
      if (product.product_id === id) {
        alreadyAdded = true;
        product.amount = amount;
        this.restApi.put('shoppingcart/update/'+this.cart_id,{
          quantity: amount,
        }).subscribe((data) => {
          this.products = data;
          alert('product already added to cart');
        });
      }
    });
    if (!alreadyAdded) {
      this.restApi.post('shoppingcart/add',{
        cart_id: this.cart_id,
        product_id: id,
        attributes: attributes,
        quantity: amount
      }).subscribe((data) => {
        data.amount = amount;
        this.products.push(data);
        alert('product added to cart');
      });
    }
    localStorage.setItem('cart', JSON.stringify(this.products));
    console.log(this.products);
    
    this.refreshTotal();
    this.subject.next({products: this.products, total: this.total});

  }

  getProductsObservable(): Observable<any> {
    return this.subject.asObservable();
  }

  emptyCart() {
    this.products = [];
    localStorage.setItem('cart', '[]');

    this.restApi.delete('shoppingcart/empty/' + this.cart_id).subscribe((data) => {
      this.products = [];
      localStorage.setItem('cart', '[]');
    });

    this.refreshTotal();
    this.subject.next({products: this.products, total: this.total});
  }

  refreshTotal() {
    this.total = 0;
    this.products.forEach((product) => {
      this.total += (product.price * product.amount );
    });
  }

  saveOrder() {

  }
}
