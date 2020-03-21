import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-ifng-for',
  templateUrl: './ng-ifng-for.component.html',
  styleUrls: ['./ng-ifng-for.component.css']
})
export class NgIfngForComponent implements OnInit {

  public show: boolean;
  data: Array<string>;

  constructor() {
    this.show = true;
    this.data = ["javascript", "PHP", "#C", "Java"];
  }

  ngOnInit() {
    //Ordenamos
    this.data.sort((a, b)=> {
      return a.localeCompare(b);
    });
  }

  action(){
    this.show = !this.show
  }

}
