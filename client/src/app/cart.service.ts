import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api.service';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products = []
  private subject = new Subject<any>(); 

  constructor(
    public restApi: RestApiService,
  ) { 
    var localStorageProducts = localStorage.getItem('cart');
    if(localStorageProducts){
      this.products = JSON.parse(localStorageProducts)
    }
    this.subject.next(this.products);
  }

  removeFromCart(id) {
    this.subject.next(this.products);
  }

  addToCart(id,amount = 1) {

    alert("product added to cart")

    var already_added = false;
    this.products.forEach(function (product) {
      if(product.product_id == id){
        already_added = true;
        product.amount = amount;
      }
    }); 
    if(!already_added){
      this.restApi.get('products/'+id).subscribe((data) => {
        data.amount = amount
        this.products.push(data) 
      })
    }
    localStorage.setItem('cart', JSON.stringify(this.products));
    console.log(this.products);
    this.subject.next(this.products);
  }

  getProductsObservable(): Observable<any> {
    return this.subject.asObservable();
  }

  emptyCart() {
    this.products = [];
    localStorage.setItem('cart', '[]');
    this.subject.next(this.products);
  }
}
