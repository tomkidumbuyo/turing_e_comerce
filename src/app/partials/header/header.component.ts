import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/rest-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  departments = [];

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit() {
    this.restApi.get('departments').subscribe((data) => {
      console.log(data);
      this.departments = data;
    });
  }

  search(form) {
    console.log(form);
  }

}
