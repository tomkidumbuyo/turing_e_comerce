import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api.service';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products = [];
  total = 0;
  private subject = new Subject<any>();

  constructor(
    public restApi: RestApiService,
  ) {
    const localStorageProducts = localStorage.getItem('cart');
    if (localStorageProducts) {
      this.products = JSON.parse(localStorageProducts);
    }
    this.refreshTotal();
    this.subject.next({products: this.products, total: this.total});

  }

  removeFromCart(id: number) {

    this.products = this.products.filter((currentProduct) => {
      console.log(currentProduct);   // a, b, c on separate lines
      return currentProduct.product_id !== id;
    });
    localStorage.setItem('cart', JSON.stringify(this.products));
    this.refreshTotal();
    this.subject.next({products: this.products, total: this.total});

  }

  addToCart( id, amount = 1 ) {

    alert('product added to cart');

    let alreadyAdded = false;
    this.products.forEach((product) => {
      if (product.product_id === id) {
        alreadyAdded = true;
        product.amount = amount;
      }
    });
    if (!alreadyAdded) {
      this.restApi.get('products/' + id).subscribe((data) => {
        data.amount = amount;
        this.products.push(data);
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
    this.refreshTotal();
    this.subject.next({products: this.products, total: this.total});
  }

  refreshTotal() {
    this.total = 0;
    this.products.forEach((product) => {
      this.total += (product.price * product.amount );
    });
    console.log('total rubix: ', this.total);
  }
}
