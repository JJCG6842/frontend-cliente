import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

import { ProductsService } from '../service/productos.service';
import { Producto } from '../core/producto';
import { ProductosSeleccionadosService } from '../service/venta.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
  providers: [ProductsService]
})
export class InicioComponent implements OnInit {
  productos?: Producto[];

  constructor(
    private readonly ProductService: ProductsService,
    private seleccionadosService: ProductosSeleccionadosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.ProductService.getProducts().subscribe((data) => {
      this.productos = data;
    });
  }

  agregarProducto(producto: Producto) {
    this.seleccionadosService.agregarProducto(producto);
    this.router.navigate(['/ventas']); // Ruta de la tabla
  }
}