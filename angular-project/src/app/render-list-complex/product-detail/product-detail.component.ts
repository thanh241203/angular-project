import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product-list/Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 product!:Product
  constructor() { }

  ngOnInit(): void {
  }
@Input()
  productListComp!:ProductListComponent
}
