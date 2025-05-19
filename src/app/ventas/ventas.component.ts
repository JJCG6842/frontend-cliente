import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { VentasService } from '../service/venta.service';

export type Ventas = {
  id:number,
  name:string,
  description:string,
  price:number,
  cantidad:number,
  total:number
}

@Component({
  selector: 'app-ventas',
  imports: [MatButtonModule],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.scss'
})
export class VentasComponent implements OnInit{

  ventas?: Ventas[];

  constructor(private readonly VentasService:VentasService){}

  async ngOnInit(){
    console.log('...ngOnInit');
    this.ventas = await this.VentasService.getVentas();
  }
}
