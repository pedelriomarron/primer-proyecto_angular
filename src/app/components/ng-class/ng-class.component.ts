import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  class: string;
  change: boolean;

  constructor() {
    this.class = "alert-primary";
    this.change = true;
  }

  ngOnInit() {
  }

}
