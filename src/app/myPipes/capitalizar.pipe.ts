import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {
  transform(value: string): string {
    let letters = value.toLowerCase().split(" ");
    let cadena = "";
  
    letters.map(ele => {
      cadena += ele[0].toUpperCase() + ele.slice(1) + " ";
    });
  
    return cadena;
  }



}
