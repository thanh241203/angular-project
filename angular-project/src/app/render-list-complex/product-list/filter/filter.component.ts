import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input()
 all:number=0;
 @Input()
  idChan:number=0;
  @Input()
  idLe:number=0;
  constructor() { }

 
  selectedFilterRadioButton:string='all'
  ngOnInit(): void {
  }

  @Output()
  selectedFilterRadioButtonChanged:EventEmitter<string>=new EventEmitter<string>();
  onSelectedFilterRadioButtonChanged($event:any){
    console.log(this.selectedFilterRadioButtonChanged)
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton)
  }
}
