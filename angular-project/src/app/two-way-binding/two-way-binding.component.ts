import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css'],

})
export class TwoWayBindingComponent implements OnInit {
searchText:string='Mens wear'
  constructor() { }

  ngOnInit(): void {
  }
  searchUpdate(event:any){
    this.searchText=event.target.value;
    console.log(this.searchText)
  }
}
