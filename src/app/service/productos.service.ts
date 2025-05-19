import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../core/producto';

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    private apiUrl = `${environment.apiUrl}/producto`;

    constructor( private http: HttpClient ){}

    getProducts(): Observable<Producto[]>{
        return this.http.get<Producto[]>(this.apiUrl);
    }








    
    // getProductsporId(id:number){
    //     return this.productos.find((productos)=>productos.id === id)
    // }
}