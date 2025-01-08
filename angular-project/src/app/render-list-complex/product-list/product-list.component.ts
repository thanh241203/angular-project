import { Component, Input, OnInit } from '@angular/core';
import { Product } from './Models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  text:string="";

  
 products=[
  {
    id:1,
    name:"thanh",
    gender:"male",
    chose:true
  },
  {
    id:2,
    name:"thanh2",
    gender:"female",
    chose:false
  },
 ]
 totalId=this.products.length;
 totalIdChan=this.products.filter(p=>p.id%2===0).length
 totalIdle=this.products.filter(p=>p.id%2!=0).length
  constructor() { }

selectedIfFitlerRadioButton:string='all'
  ngOnInit(): void {
  }
  onFilterChange(event:string){
    this.selectedIfFitlerRadioButton=event;
  }

  searchText:string='';

  setSearchText(event:string){
    this.searchText=event;
    
  }

// Reference Variable on Component
  selectedProduct!: Product;
}
