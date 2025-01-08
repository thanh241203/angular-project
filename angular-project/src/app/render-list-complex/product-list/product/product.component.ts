import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
   product!: Product
 
  constructor() { 
   
  }
  @Input()
  searhTextInPut:string='';
  
  ngOnInit(): void {
    console.log('dang o day'+this.product.id)
  }

}
