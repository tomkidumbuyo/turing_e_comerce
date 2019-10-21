import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { RestApiService } from '../rest-api.service';
declare const Stripe: any;
declare var $: any;


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public checkoutForm: FormGroup;
  
  stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

  products: any[] = [];
  regions: any[] = [];
  shippings: any[] = [];
  subscription: Subscription;
  shipingSelected;
  shipingSelectedPrice: number;
  buttonValue: number;
  card;
  elements;

  total = 0;

  constructor(
    private restApi: RestApiService,
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
      country: new FormControl(),
      phone: new FormControl(),
      cardHolder: new FormControl(),
      password: new FormControl(),
      shipping_region: new FormControl(),
    });

    this.products = cart.products;
    this.total = cart.total;
    this.subscription = cart.getProductsObservable().subscribe(cartObject => {
      this.products = cartObject.products;
      this.total = cartObject.total;
    });

    this.checkoutForm.controls.country.setValue('AF');
  }

  ngOnInit() {

    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/checkoutauth']);
    }

    this.elements = this.stripe.elements();
    this.card = this.elements.create('card', {style: {
      base: {
        // Add your base input styles here. For example:
        fontSize: '16px',
        lineHeight: '24px',
        color: 'rgb(30, 32, 34)',
        fontFamily: '"Poppins", Helvetica, Arial, sans-serif'
      }
    }});
    this.card.mount('#card-element');


    this.restApi.get('shipping/regions').subscribe((data) => {
      this.regions = data;
      this.checkoutForm.controls.shipping_region.setValue('2');
      this.changeRegion();
    });

  }

  placeOrder() {
    console.log('herherherher')
    
    this.stripe.createToken(this.card, {
      country: 'US',
      currency: 'usd',
      account_holder_name: 'Jenny Rosen',
      account_holder_type: 'individual',
    }).then(function(result) {

      console.log(result.token)
      this.restApi.post('shipping/regions', {
        stripeToken: result.token, 
        order_id: 1, 
        description: 'turing ecommerce chages', 
        amount: (this.total + this.shipingSelectedPrice)
      }).subscribe((data) => {
        
        
      });

    });

  }

  changeRegion() {
    this.restApi.get('shipping/regions/' + this.checkoutForm.value.shipping_region).subscribe((data) => {
      this.shippings = data;
      this.shippingChange(this.shippings[0]);
    });
  }

  shippingChange(shipping) {
    this.shipingSelected = shipping.shipping_id;
    // tslint:disable-next-line:radix
    this.shipingSelectedPrice = parseInt(shipping.shipping_cost);
  }

}
