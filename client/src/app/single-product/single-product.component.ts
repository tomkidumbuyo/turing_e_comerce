import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  id: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
  }

}
