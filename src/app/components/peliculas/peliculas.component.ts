import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/Pelicula';
import { PeliculaService } from '../../services/pelicula.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  data: Array<Pelicula>;

  constructor(private _servicePeli: PeliculaService) { 
    let obj : Pelicula
    this._servicePeli.getAll(obj).subscribe(resp => {
      console.log(resp);
      this.data = resp;
    });
  }

  ngOnInit() {
  }

  deletePelicula(id: string, i:number) {
    Swal.fire({
      title: "¿Desea eliminar la película?",
      text: "Películas oscarizadas",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
      focusCancel: true
    }).then(result => {
      if (result.value) {
        this._servicePeli.deletePeliculas(id).subscribe(resp => {
          Swal.fire("Deleted!", "Your file has been deleted.", "success").then(()=>{
            this.data.splice(i, 1);
          });
        });
      }
    });
  }

}
