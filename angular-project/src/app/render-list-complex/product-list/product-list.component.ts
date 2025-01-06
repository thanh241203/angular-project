import { Component, OnInit } from '@angular/core';

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
  },
  {
    id:2,
    name:"thanh2",
    gender:"female"
  },
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
