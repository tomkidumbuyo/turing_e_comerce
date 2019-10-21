import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api.service';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public products: any[] = [];
  public total: number = 0;
  public cartId: string;

  private subject = new Subject<any>();

  constructor(
    public restApi: RestApiService,
  ) {

    this.cartId = localStorage.getItem('cart_id');

    if (this.cartId && this.cartId !== 'null') {
      this.restApi.get('shoppingcart/' + this.cartId).subscribe((data) => {
        this.products = data;
        console.log(this.total);
        this.refreshTotal();
        this.subject.next({products: this.products, total: this.total});
      });
    } else {
      this.restApi.get('shoppingcart/generateUniqueId').subscribe((data) => {
        this.cartId = data.cart_id;
        localStorage.setItem('cart_id', this.cartId);
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

  addToCart( id, quantity = 1 , attributes = '' ) {
    console.log(this.cartId);
    console.log(this.cartId.length);
    let alreadyAdded = false;
    this.products.forEach((product) => {
      if (product.product_id === id) {
        alreadyAdded = true;
        product.quantity = quantity;
        this.restApi.put('shoppingcart/update/' + this.cartId, {
          quantity: quantity,
        }).subscribe((data) => {
          this.products = data;
          alert('product already added to cart');
        });
      }
    });
    if (!alreadyAdded) {
      this.restApi.post('shoppingcart/add', {
        cart_id: this.cartId,
        product_id: id,
        attributes: attributes,
        quantity: quantity
      }).subscribe((data) => {
        data.quantity = quantity;
        this.products.push(data);
        alert('product added to cart');
      });
    }
    localStorage.setItem('cart', JSON.stringify(this.products));

    this.refreshTotal();
    this.subject.next({products: this.products, total: this.total});

  }

  getProductsObservable(): Observable<any> {
    return this.subject.asObservable();
  }

  emptyCart() {
    this.products = [];
    localStorage.setItem('cart', '[]');

    this.restApi.delete('shoppingcart/empty/' + this.cartId).subscribe((data) => {
      this.products = [];
      localStorage.setItem('cart', '[]');
    });

    this.refreshTotal();
    this.subject.next({products: this.products, total: this.total});
  }

  refreshTotal() {
    this.total = 0;
    this.products.forEach((product) => {
      this.total = this.total + (parseFloat(product.price) * parseFloat(product.quantity));
      console.log('multiply', parseFloat(product.price) * parseFloat(product.quantity));
      console.log('total', this.total);
    });
    this.total = Math.round(this.total * 100) / 100
  }

  saveOrder(shippingId: number, callback) {
    this.restApi.postAuth('orders', {
      cart_id: this.cartId,
      shipping_id: shippingId,
      tax_id: 2
    }).subscribe((data) => {
      callback(data);
    });
  }
}
