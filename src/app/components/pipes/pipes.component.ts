import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  name: string;
  number: number;
  discount: number;
  date: Date;
  fullName:string;
  constructor() {
    this.name = "anguLAr";
    this.number = 12341.23245;
    this.discount = 0.876;
    this.date = new Date();
    this.fullName="peDro mAnueL dEl rÍo"
  }


  ngOnInit() {
  }

}
