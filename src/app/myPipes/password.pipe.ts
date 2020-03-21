import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, args: string): string {
    let pass;
    if (args != undefined) {
      pass = value.replace(/./g, args);
    } else {
      pass = value;
    }
    return pass;
  }

}
