import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { LoginService } from "./login/login.service";

@Injectable()
export class DataServices{

    url:string= 'https://pruebainicial-82280-default-rtdb.firebaseio.com/datos.json';

    constructor( private httpClient: HttpClient, private loginService:LoginService){}

    guardarEmpleados(empleados: Empleado[]){
        this.httpClient.put( this.url , empleados).subscribe(
            response=>console.log("se han guardado: "+response),
            error=>console.log("Error:"+error),
            
        );
    }

    consultarEmpleados(){
        const token=this.loginService.getIdToken();
        return this.httpClient.get('https://pruebainicial-82280-default-rtdb.firebaseio.com/datos.json?auth='+token);
    }

    actualizarEmpleado(indice:number, empleado:Empleado){

        let ur = 'https://pruebainicial-82280-default-rtdb.firebaseio.com/datos/'+indice+'.json';

        this.httpClient.put( ur , empleado).subscribe(
            {complete: console.info}
            
            
        );
    }

    eliminarEmpleado(indice:number){

        let ur = 'https://pruebainicial-82280-default-rtdb.firebaseio.com/datos/'+indice+'.json';

        this.httpClient.delete( ur ).subscribe(
            {complete: console.info}
            
            
        );
    }

    

}