import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) {
    
  }

  register(email: string, password: string, name: string) {
    this.restApi.post('customers/',{password: password,email: email,name: name}).subscribe((data) => {
      
    })
  }
     
  login(email: string, password: string) {
    this.restApi.post('customers/login',{email: email, password: password}).subscribe((data) => {
      
    })
  }
     
  logout() {
    // remove user data from local storage for log out
    localStorage.removeItem('currentUser');

  }

}
