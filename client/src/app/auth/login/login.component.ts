import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../_services/user.service';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    loginError = '';
    loginForm: FormGroup;

    ngOnInit(): void {
      console.log('login component initialized')
    }

    constructor(
      private userService: UserService,
      private authService: AuthenticationService,
      private formBuilder: FormBuilder,
    ) {
      this.loginForm = this.formBuilder.group({
        username: '',
        password: '',
        rememberPassword: false
      });
    }

    onSubmit(customerData) {

      // Process checkout data here
      console.log('Your order has been submitted', customerData);
      this.authService.login(customerData);
      this.loginForm.reset();

    }
}
