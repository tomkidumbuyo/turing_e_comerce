import { Injectable } from '@angular/core';
import { ApiAjaxService } from './api-ajax.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private ajax: ApiAjaxService) { }

  accessToken = false;

  login(authData) {

    authData.grant_type = 'password';
    authData.client_id = 0;

    console.log(authData);
    this.ajax.post('auth/login', authData)
    .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
