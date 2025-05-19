import { Injectable } from '@angular/core';
import { Ventas } from '../ventas/ventas.component';

@Injectable({
    providedIn: 'root'
})

export class VentasService {
    ventas:Ventas[]= [
        {
            id:1,
            name:"Inca kola",
            description:"Bebida gaseosa sabor nacional de 1.5 litros.",
            price:1.50,
            cantidad:2,
            total:3.00
        },
        {
            id:2,
            name:"Coca cola",
            description:"Gaseosa Coca cola de 1.5 litros.",
            price:1.50,
            cantidad:1,
            total:1.50
        }
    ]
    getVentas(){
        return this.ventas
    }

    getVentasPorId(id:number){
        return this.ventas.find((ventas)=>ventas.id === id);
    }
}