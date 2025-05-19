export interface Producto {

  nombre: string;

  descripcion?: string;

  imagen?: string;

  precio: number;

  stock: number;

  proveedorId?: string;

  tipoBebidaId?: number;

  tamanioEnvaseId?: number;

  marcaId?: number;
}
