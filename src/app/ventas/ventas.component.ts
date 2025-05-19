import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosSeleccionadosService } from '../service/venta.service';
import { Producto } from '../core/producto';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports:[CommonModule,MatButtonModule],
  selector: 'app-tabla-productos',
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.scss'
})
export class VentasComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private seleccionadosService: ProductosSeleccionadosService) {}

  ngOnInit() {
    this.productos = this.seleccionadosService.obtenerProductos();
  }

  descartarProducto(producto: Producto) {
    this.seleccionadosService.eliminarProducto(producto);
    this.productos = this.seleccionadosService.obtenerProductos(); // actualizar la vista
  }
}