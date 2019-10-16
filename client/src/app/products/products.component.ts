import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/rest-api.service';
import { FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];
  page = 0;
  pages = 0;
  limit = 16;
  product_count = 0;
  pages_array = [];

  form: FormGroup;

  constructor(
    public restApi: RestApiService,
    public router: Router,
    public cart: CartService,
  ) {
    // this.form = this.formBuilder.group({
    //   orders: ['']
    // });
  }

  ngOnInit() {

    // get all pages count
    this.restApi.get('products/').subscribe((data) => {
      this.product_count = data.count;
      this.pages = Math.ceil(this.product_count / this.limit);
      this.pages_array = Array.from(Array(this.pages).keys());
      console.log(this.pages_array);
    });
    this.pagination(0);
  }

  pagination(page) {
    this.page = page;
    // get current page
    this.restApi.get('products/' + page + '/' + this.limit).subscribe((data) => {
      console.log(data);
      this.products = data.rows;
    });
  }

  addToCart(id) {
    this.cart.addToCart(id);
  }

}
