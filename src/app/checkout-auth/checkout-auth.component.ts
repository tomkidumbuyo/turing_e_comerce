import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-auth',
  templateUrl: './checkout-auth.component.html',
  styleUrls: ['./checkout-auth.component.css']
})
export class CheckoutAuthComponent implements OnInit {

  public registerForm: FormGroup;
  public loginForm: FormGroup;

  constructor(
    private auth: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.registerForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
     });
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
     });
  }

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/checkout']);
    }
  }

  onLoginSubmit() {
    // Process checkout data here
    console.warn('Your order has been submitted', this.loginForm);
    const customerData = this.loginForm.value;
    this.auth.login(customerData.email, customerData.password);
    // if (this.auth.isLoggedIn()) {
    this.router.navigate(['/checkout']);
    // }

  }

  onRegisterSubmit() {
    // Process checkout data here
    console.warn('Your order has been submitted', this.registerForm);
    const customerData = this.registerForm.value;
    this.auth.register(customerData.email, customerData.password, customerData.name);
    // if (this.auth.isLoggedIn()) {
    this.router.navigate(['/checkout']);
    // }
  }

}
