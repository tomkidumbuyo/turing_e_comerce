import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/rest-api.service';
import { FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];
  filtered_products = [];
  page = 0;
  pages = 0;
  limit = 16;
  product_count = 0;
  pages_array = [];
  form: FormGroup;

  searchModel = '';

  departments: any[] = [];
  categories: any[] = [];

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

    this.restApi.get('products').subscribe((data) => {
      console.log(data);
      this.filtered_products = data.rows;
      this.pagination(0);
    });

    this.restApi.get('departments').subscribe((departmens) => {
      console.log(departmens);
      this.departments = departmens;
      this.departments.forEach((department) => {
        this.restApi.get('categories/inDepartment/' + department.department_id).subscribe((categories) => {
          console.log(categories);
          department.categories = categories;
          department.products = [];
          department.categories.forEach((category) => {
            this.restApi.get('products/inCategory/' + category.category_id).subscribe((products) => {
              category.products = products;
              department.products.concat(products);
              this.filter();
            });
          });
        });
      });
    });

    this.restApi.get('categories').subscribe((categories) => {
      console.log(categories);
      this.categories = categories.rows;
      this.categories.forEach((category) => {
        category.products = [];
        this.restApi.get('products/inCategory/' + category.category_id).subscribe((products) => {
          category.products = products;
          this.filter();
        });
      });
    });
  }

  pagination(page) {
    if (this.searchModel && this.searchModel.length > 0 && this.searchModel !== '') {
      let fp = [];
      this.filtered_products.forEach((product) => {
        if (product.name.toLowerCase().indexOf(this.searchModel.toLowerCase()) > -1) {
          fp.push(product);
        }
      });
      this.filtered_products = fp;
    }

    this.pages = Math.ceil(this.filtered_products.length / this.limit);
    this.pages_array = Array.from(Array(this.pages).keys());
    this.page = page;
    const from = page * this.limit;
    const to = from + this.limit;
    this.products = this.filtered_products.slice(from, to);
  }

  addToCart(id) {
    this.cart.addToCart(id);
  }

  filter() {
    let isFiltered = false;
    this.filtered_products = []

    this.departments.forEach((department) => {
      if (department.selected) {
        isFiltered = true;
        department.categories.forEach((category) => {
          this.filtered_products = this.filtered_products.concat(category.products);
        });
      }
    });

    this.categories.forEach((category) => {
      if (category.selected) {
        isFiltered = true;
        this.filtered_products = this.filtered_products.concat(category.products);      }
    });


    if (isFiltered) {
      this.pagination(0);
    } else {
      this.restApi.get('products').subscribe((data) => {
        this.filtered_products = data.rows;
        this.pagination(0);
      });
    }
  }

  check(item) {
    item.selected = item.selected ? false : true ;
    this.filter();
  }

  clearFilters() {
    this.categories.forEach((category) => {
      category.selected = false;
    });
    this.departments.forEach((department) => {
      department.selected = false;
    });
    this.searchModel = "";
    this.filter();
  }
}
