import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit{

  constructor(private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService){
    //this.empleados=this.empleadosService.empleados;
  }
  ngOnInit(): void {
    //this.empleados=this.empleadosService.empleados;
    this.empleadosService.obtenerEmpleados().subscribe(

      res=>{console.log(res);
      this.empleados=Object.values(res);

      this.empleadosService.setEmpleados(this.empleados);
      }
    );
    
  }


  empleados:Empleado[]=[];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  agregar(){
    let emp = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("Nombre del empleado: "+emp.nombre);
    this.empleadosService.agregarEmpleadoServicio(emp);
  }

}
