import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-directive',
  templateUrl: './ngfor-directive.component.html',
  styleUrls: ['./ngfor-directive.component.css']
})
export class NgforDirectiveComponent implements OnInit {

  constructor() { }

  listOfString:string[]=['2','thaanh','3']

  ngOnInit(): void {
  }

}
