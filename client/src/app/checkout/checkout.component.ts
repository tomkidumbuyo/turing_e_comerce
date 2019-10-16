import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public checkoutForm: FormGroup;

  products: any[] = [];
  subscription: Subscription;
  total = 0;


  constructor(
    private auth: AuthenticationService,
    private cart: CartService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.checkoutForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      postcode: new FormControl(),
      streetAddress: new FormControl(),
      cityAddress: new FormControl(),
      cardNumber: new FormControl(),
      suite: new FormControl(),
      phone: new FormControl(),
      password: new FormControl()
    });

    this.products = cart.products;
    this.total = cart.total;
    this.subscription = cart.getProductsObservable().subscribe(cartObject => {
      this.products = cartObject.products;
      this.total = cartObject.total;
    });
    console.log(this.products);
  }

  ngOnInit() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/checkoutauth']);
    }

  }

}
