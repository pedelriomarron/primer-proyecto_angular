import { Component, OnInit } from '@angular/core';
import { Empleado, iEmpleado } from '../../models/Empleado';

@Component({
  selector: 'app-class-interface',
  templateUrl: './class-interface.component.html',
  styleUrls: ['./class-interface.component.css']
})
export class ClassInterfaceComponent implements OnInit {

  dataClass: Array<Empleado>;
  dataInterface: Array<iEmpleado>;

  constructor() {
    this.dataClass = [
      new Empleado("Nuria", 33, "analista", false),
      new Empleado("Luis", 24, "testing", true),
      new Empleado("Marga", 24, "programador", true)
    ];
    this.dataInterface = [
      { nombre: "Nuria", edad: 33, cargo: "analista", contratado: false },
      { nombre: "Luis", edad: 24, cargo: "testing", contratado: true },
      { nombre: "Marga", edad: 24, cargo: "programador", contratado: true }
    ];
  }


  ngOnInit() {
  }

}
