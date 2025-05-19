import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProductsService } from '../service/productos.service';
import { Producto } from '../core/producto';

// export type Products = {
//   id:number,
//   name:string,
//   imageUrl: string;
//   price: number
//   stock:number;
//   description:string;
// }

@Component({
  selector: 'app-inicio',
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
  providers:[ProductsService]
})
export class InicioComponent implements OnInit{

    productos?: Producto[];

    constructor(private readonly ProductService: ProductsService){}

    ngOnInit(){
      this.ProductService.getProducts().subscribe((data)=>{
        this.productos = data;
      })
    }
}
