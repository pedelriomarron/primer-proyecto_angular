import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  firstName:string;
  lastName:string;
  constructor() { 
    this.firstName= "Pedro"
    this.lastName="del Río"
  }

  ngOnInit() {
  }

}
