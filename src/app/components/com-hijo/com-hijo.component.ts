import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-com-hijo',
  templateUrl: './com-hijo.component.html',
  styleUrls: ['./com-hijo.component.css']
})
export class ComHijoComponent implements OnInit {
  @Input() namePadre : string //decorador que va recibir una propiedad del padre
  //Decorador para mandar una propiedad al padre mediante un evento
  @Output() nameHijo = new EventEmitter<string>();
    constructor() {
      this.namePadre = "No tiene nombre del padre"
    }
    sincronizarPadre() {
      this.nameHijo.emit(this.namePadre);
    }

  ngOnInit() {
  }

}
