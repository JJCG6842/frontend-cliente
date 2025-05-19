import { Injectable } from '@angular/core';
import { Producto } from '../core/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosSeleccionadosService {
  private productos: Producto[] = [];

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }

  obtenerProductos(): Producto[] {
    return this.productos;
  }

  eliminarProducto(producto: Producto) {
    this.productos = this.productos.filter(p => p !== producto);
  }

  limpiarProductos() {
    this.productos = [];
  }
}