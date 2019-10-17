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
  total = 0;

  constructor(
    private cart: CartService,
  ) {
    this.products = cart.products;
    this.total = cart.total;
    this.subscription = cart.getProductsObservable().subscribe(cartObject => {
      this.products = cartObject.products;
      this.total = cartObject.total;
    });
    console.log(this.products);
  }

  ngOnInit() {
  }

  removeFromCart(id: any) {
    console.log(id);
    this.cart.removeFromCart(id);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  updateCartProduct(product) {
    this.cart.addToCart(product.product_id, product.amount);
  }

}
