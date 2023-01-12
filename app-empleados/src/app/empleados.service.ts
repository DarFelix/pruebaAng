import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    constructor(private servicioVentana: ServicioEmpleadosService, private dataService: DataServices){

    }

    empleados:Empleado[]=[];
    /*empleados:Empleado[]=[
        new Empleado("Juan", "Diaz", "Presidente", 7500),
        new Empleado("Luna", "Florez", "Directora", 2999),
        new Empleado("Ana", "Ruiz", "Jefe", 2000)
        ];
        */

        agregarEmpleadoServicio(empleado: Empleado){

            this.servicioVentana.muestraMensaje("Persona que se va a agregar:"+ empleado.nombre + "\n" +
            "Salario: "+ empleado.salario );
            this.empleados.push(empleado);
            this.dataService.guardarEmpleados(this.empleados);
        }

        encontrarEmpleado(indice:number){
            let empleado:Empleado=this.empleados[indice];

            return empleado;
        }

        actualizarEmpleado(indice:number, empleado:Empleado){
            let empleadoMod = this.empleados[indice];
            empleadoMod.nombre = empleado.nombre;
            empleadoMod.apellido = empleado.apellido;
            empleadoMod.cargo = empleado.cargo;
            empleadoMod.salario = empleado.salario;

            this.dataService.actualizarEmpleado(indice, empleado);
        }

        eliminarEmpleado(indice:number){
            this.empleados.splice(indice, 1);

            this.dataService.eliminarEmpleado(indice);

           if(this.empleados != null) this.dataService.guardarEmpleados(this.empleados);
        }

        obtenerEmpleados(){
            return this.dataService.consultarEmpleados();
        }

        setEmpleados(misEmpleados:Empleado[]){
            this.empleados=misEmpleados;
        }
}