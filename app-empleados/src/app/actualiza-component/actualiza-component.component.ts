import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private empleadosService: EmpleadosService){}

  volverHome(){

    this.router.navigate(['']);

  }

  empleados:Empleado[]=[];
  accion:number;

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  indice:number;

  ngOnInit(): void {
    this.accion=parseInt(this.route.snapshot.queryParams['accion']);
    this.empleados=this.empleadosService.empleados;
    this.indice=this.route.snapshot.params['id'];
    let empleado:Empleado=this.empleadosService.encontrarEmpleado(this.indice);

    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;
    
  }

  /*
  actualizaEmpleado(){
    let emp = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: "+emp.nombre);
    this.empleadosService.actualizarEmpleado(this.indice, emp);
    this.router.navigate(['']);
  }

  eliminaEmpleado(){
   
    this.empleadosService.eliminarEmpleado(this.indice);
    this.router.navigate(['']);
  }
  */

  actualizaEmpleado(){
    if(this.accion == 1){
    let emp = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleadosService.actualizarEmpleado(this.indice, emp);
    this.router.navigate(['']);
    }else{
    this.empleadosService.eliminarEmpleado(this.indice);
    this.router.navigate(['']);
    }
  }

}
