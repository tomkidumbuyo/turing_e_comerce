import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/rest-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = []

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit() {
    this.restApi.get('products/0/8').subscribe((data) => {
      console.log(data);
      this.products = data.rows;
    });
  }

}
