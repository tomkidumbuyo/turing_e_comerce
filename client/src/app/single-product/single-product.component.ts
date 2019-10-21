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
  attributes = []
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

    this.restApi.get('attributes/').subscribe((data) => {
      this.attributes = data;
      this.restApi.get('attributes/inProduct/'+this.id).subscribe((data) => {
        
        this.attributes.forEach(attribute => {
          attribute.values = []
          data.forEach(element => {
            if (attribute.attribute_id == element.attribute_id){
              attribute.values.push(element)
            }
          })
          this.selectAttribute(attribute,attribute.values[0])
        });
      })
    })
  }

  selectAttribute(attribute,value) {
    attribute.value = value;
  }

  addToCart() {
    var attrs = "";
    this.attributes.forEach((attribute,index) => {
      if (index > 0){
        attrs += ", "
      }
      attrs += attribute.value.value;
    })
    this.cart.addToCart(this.id,this.quantity,attrs)
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
