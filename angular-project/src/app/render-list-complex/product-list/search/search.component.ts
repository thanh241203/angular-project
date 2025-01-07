import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  text:string="";

  @Output()
  onSearchChanged:EventEmitter<string>=new EventEmitter<string>()

  onSearchChangedMethod(){
      this.onSearchChanged.emit(this.text)
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
