import { Component } from '@angular/core';
import { ComprarService } from 'src/app/services/comprar.service';
import {Sort, MatSortModule} from '@angular/material/sort';
import { Producto } from 'src/app/interfaz/producto.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  totalPago!: number;
  carritoOrdenado!: Producto[];

  constructor(private compraSrv: ComprarService){}

  ngOnInit(){
    this.compraSrv.cargarInformacionCompras();
  }

  get carrito(){
    return this.compraSrv.carritoCompras;
  }

  get total(){
    return this.compraSrv.totalPago;
  }

  eliminarProducto(producto: Producto){
    this.compraSrv.eliminarProductoCarrito(producto);
  }

  ordenarFila(sort: Sort) {
    const data = this.carrito.slice();
    if (!sort.active || sort.direction === '') {
      this.carritoOrdenado = data;
      return;
    }

    this.carritoOrdenado = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Talla':
          return compare(a.talla, b.talla, isAsc);
        case 'Precio':
          return compare(a.precio, b.precio, isAsc);
        case 'Nombre':
          return compare(a.nombre, b.nombre, isAsc);
        default:
          return 0;
      }
    });
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
