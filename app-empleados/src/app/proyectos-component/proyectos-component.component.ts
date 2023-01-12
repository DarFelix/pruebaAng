import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

  constructor(private router: Router, private empleadosService: EmpleadosService){}

  volverHome(){

    this.router.navigate(['']);

  }

  empleados:Empleado[]=[];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
  }

  agregar(){
    let emp = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: "+emp.nombre);
    this.empleadosService.agregarEmpleadoServicio(emp);
    this.router.navigate(['']);
  }

}
