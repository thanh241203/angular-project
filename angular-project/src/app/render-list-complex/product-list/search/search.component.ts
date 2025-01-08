import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

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

  /** ViewChild 2nd argument 
   * read : Use it to read the different token from the queried element
   * static :  determines when the query is resolved
   * True is when the view is initialized for the first time
   * False if you want it to be resolved after every change detection
   */

  @ViewChild('searchInput',{static:true}) searchInputEl!:ElementRef

  updateSearchText(){
    this.text=this.searchInputEl.nativeElement.value;
    this.onSearchChanged.emit(this.text)
  }
}
