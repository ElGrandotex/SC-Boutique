import { Injectable } from '@angular/core';
import { Producto } from '../interfaz/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ComprarService {

  public carritoCompras!: Producto[];
  public totalPago: number = 0;

  constructor() {
    this.carritoCompras = [];
  }

  /**
   * @description
   * Agrega un producto al carrito de compras
  */
 agregarProductoCarrito(producto: Producto) {
    // this.cargarInformacionCompras();

    this.carritoCompras.unshift(producto);
    this.guardarInformacionCompras();
  }

    /**
   * @description
   * Persistencia de la informacion
   * Guarda en cache
   */
    private guardarInformacionCompras():void{
      localStorage.setItem('carrito', JSON.stringify(this.carritoCompras))
    }

    /**
   * @description
   * Persistencia de la informacion
   * Cargar de cache
   */
    cargarInformacionCompras():void{
      if (!localStorage.getItem('carrito')) return;
      this.carritoCompras = JSON.parse(localStorage.getItem('carrito')!);
      this.totalPago = this.carritoCompras.reduce((suma, producto) => suma + producto.precio, 0);
    }

}
