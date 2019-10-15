import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/rest-api.service';
import { FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  id: number;
  product = {};
  quantity: number = 1

  constructor(
    public restApi: RestApiService,
    public cart: CartService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.restApi.get('products/'+this.id).subscribe((data) => {
      this.product = data;
      console.log(this.product);
    })
    console.log("id",this.id)

  }

  addToCart() {
    this.cart.addToCart(this.id,this.quantity)
  }

  add_qty() {
    this.quantity += 1
  }

  rmv_qty() {
    if(this.quantity > 1){
      this.quantity -= 1
    }
  }

}
