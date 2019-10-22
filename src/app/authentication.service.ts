import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  customer = false;
  accessToken = false;

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) {
    const authData = JSON.parse(localStorage.getItem('authData'));
    if (authData) {
      this.customer = authData.customer;
      this.accessToken = authData.accessToken;
    }
  }

  isLoggedIn() {
    if (this.accessToken) {
      return true;
    } else {
      return false;
    }
  }

  register(email: string, password: string, name: string) {
    this.restApi.post('customers/', {password: password, email: email, name: name}).subscribe((data) => {
      console.log(data);
      this.customer = data.customer.schema;
      this.accessToken = data.accessToken;
      localStorage.setItem('authData', JSON.stringify({customer: this.customer, accessToken: this.accessToken}));
    });
  }

  login(email: string, password: string) {
    this.restApi.post('customers/login', {email: email, password: password}).subscribe((data) => {
      console.log(data);
      this.customer = data.customer.schema;
      this.accessToken = data.accessToken;
      localStorage.setItem('authData', JSON.stringify({customer: this.customer, accessToken: this.accessToken}));

    });
  }

  logout() {
    // remove user data from local storage for log out
    localStorage.removeItem('authData');
    this.customer = false;
    this.accessToken = false;
  }

}
