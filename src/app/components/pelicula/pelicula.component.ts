import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pelicula } from '../../models/Pelicula';
import { PeliculaService } from '../../services/pelicula.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  form: FormGroup;
  id: string;
  pelicula: Pelicula;
  data: Array<FormGroup>;

  constructor(private frmBuilder: FormBuilder, private _servicePelicula:PeliculaService, private route: ActivatedRoute) {
    this.form = frmBuilder.group({
      nombre: ["", [Validators.required]],
      sinopsis: ["", [Validators.required]],
      estreno: ["", [Validators.required]],
      img: ["", [Validators.required]],
      pais: ["", [Validators.required]],
      //id:[""]
    });
    this.data = [];

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params.id);
      if(params.id != "new") {
        this._servicePelicula.getPelicula(params.id).subscribe(resp => {
          //Volcar los datos al formulario
          this.id = params.id;
          //this.form.get("id").setValue(this.id)
          this.form.get("nombre").setValue(resp.nombre);
          this.form.get("sinopsis").setValue(resp.sinopsis);
          this.form.get("estreno").setValue(resp.estreno);
          this.form.get("img").setValue(resp.img);
          this.form.get("pais").setValue(resp.pais);
        })
      }
    })
  }

  public sendData(frm:FormGroup) {
    if(this.id == "" || this.id == null) {
      //frm.get("id").setValue(this.id)
      console.log(frm.value)
      this._servicePelicula.savePeliculas(frm.value).subscribe(resp=>{
        Swal.fire("La película ha sido insertada", "Películas oscarizadas", "success")
        .then(()=>{
          frm.reset();
        })
      })
      console.log(frm.value);
    } else {
      this._servicePelicula.updatePelicula(this.id, frm.value).subscribe(resp=>{
        Swal.fire("La película ha sido modificada", "Películas oscarizadas", "success")
        .then(()=>{
          //frm.reset();
        })
      })
      console.log(frm.value);
    }
    
  }


}
