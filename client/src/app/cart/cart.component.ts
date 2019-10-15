import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: any[] = [];
  subscription: Subscription;

  constructor(
    private cart: CartService,
  ) { 
    this.products = cart.products
    this.subscription = cart.getProductsObservable().subscribe(products => {
      this.products = products
      console.log(this.products)
    })
  }

  ngOnInit() {
  }

  removeFromCart(id: any) {
    this.cart.removeFromCart(id)
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
