import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-render-list-complex',
  templateUrl: './render-list-complex.component.html',
  styleUrls: ['./render-list-complex.component.css']
})
export class RenderListComplexComponent implements OnInit {

  constructor() { }
 
  ngOnInit(): void {
  }
@ViewChild(ProductListComponent) productListComponent!:ProductListComponent
}
