import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  product!: {
    id: number;
    name: string;
    gender: string;
    chose:boolean;
  };
  constructor() { 
   
  }
  @Input()
  searhTextInPut:string='';
  
  ngOnInit(): void {
    console.log('dang o day'+this.product.id)
  }

}
