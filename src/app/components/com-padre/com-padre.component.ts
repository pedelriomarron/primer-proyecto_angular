import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-padre',
  templateUrl: './com-padre.component.html',
  styleUrls: ['./com-padre.component.css']
})
export class ComPadreComponent implements OnInit {

  name: string;
  syncName: string;
  constructor() { }

  public sincronizarHijo() {
    this.syncName = this.name;
  }

  ngOnInit() {
  }

}
