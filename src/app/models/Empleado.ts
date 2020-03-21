export class Empleado {
    constructor(
      public nombre: string,
      public edad: number,
      public cargo: string,
      public contratado: boolean
    ) {}
  }
  
  export interface iEmpleado {
    nombre: string;
    edad: number;
    cargo: string;
    contratado: boolean;
  }
  