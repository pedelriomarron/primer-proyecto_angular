import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  form1: FormGroup;
  data: Array<FormGroup>;
  constructor(private frmBuilder: FormBuilder) { 

    this.form1 = frmBuilder.group({
      fullName: [
        "",
        [Validators.required, Validators.pattern(/^[a-zá-úºñs]+$/i)]
      ],
      email: ["", [Validators.required, Validators.email]],
      pass: [
        "",
        [Validators.required, Validators.minLength(8), Validators.maxLength(20)]
      ]
    });

    //inicializar el array
    this.data = [];
  }

  ngOnInit() {
  }

  public sendData(form:FormGroup) {
    console.log(form);
    //añadir los datos del formulario a la lista
    this.data.push(form.value);
    console.log(this.data);
    //limpiar formulario
    form.reset();
  }

}
