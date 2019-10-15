import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    public auth: AuthenticationService
  ) { }

  ngOnInit() {
  }

  login(formData) {
    console.log(formData)
    this.auth.login(formData.username,formData.password)
  }

  register(formData) {
    console.log(formData)
    this.auth.register(formData.username,formData.password,formData.name)
    
  }

}
