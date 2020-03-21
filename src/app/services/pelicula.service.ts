import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {map} from 'rxjs/operators';
import { InterfaceType } from 'typescript';
import { Pelicula } from '../models/Pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  ruta: string;
  private cabeceras:any;

  constructor(private http: HttpClient) {
    this.ruta = "https://angularbbdd-23fe2.firebaseio.com/";
    this.cabeceras = {
      headers: new HttpHeaders({"Content-Type": "applications/json"})
    };
  }

    //Crear el servicio para extraer todas los datos
    public getAll(interfaceType:any) {
      return this.http.get(`${this.ruta}/peliculas.json`).pipe(
        map(resp=>{
          let datos: Array<typeof interfaceType> = [];
          Object.keys(resp).forEach(ele=>{
            let dato: typeof interfaceType = resp[ele];
            //if(dato.id == null){
             dato.id = ele;
            //}
            datos.push(dato);
          })
          return datos;
        })
      )
    }

    public getPelicula(id:string) {
      return this.http.get<Pelicula>(`${this.ruta}/peliculas/${id}.json`);
    }

    public savePeliculas(pelicula) {
      return this.http.post(`${this.ruta}/peliculas.json`, pelicula, this.cabeceras);
    }

    public updatePelicula(id, pelicula) {
      return this.http.put(`${this.ruta}/peliculas/${id}.json`, pelicula, this.cabeceras);
    }

    public deletePeliculas(id:string) {
      return this.http.delete(`${this.ruta}/peliculas/${id}.json`, this.cabeceras);
    }

}
