import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de empleados';

  empleados:Empleado[]=[
  new Empleado("Juan", "Diaz", "Presidente", 7500),
  new Empleado("Luna", "Florez", "Directora", 2999),
  new Empleado("Ana", "Ruiz", "Jefe", 2000)
  ];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  agregar(){
    let emp = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(emp);
  }

  

}
