import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProductsService } from '../service/productos.service';

export type Products = {
  id:number,
  name:string,
  imageUrl: string;
  price: number
  stock:number;
  description:string;
}

@Component({
  selector: 'app-inicio',
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
  providers:[ProductsService]
})
export class InicioComponent implements OnInit{

    productos?: Products[];

    constructor(private readonly ProductService: ProductsService){}

    async ngOnInit(){
      console.log('...ngOnInit');
      this.productos = await this.ProductService.getProducts();
    }
}
