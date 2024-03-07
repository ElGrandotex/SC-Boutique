import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaz/producto.interface';
import { ComprarService } from 'src/app/services/comprar.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-blusas',
  templateUrl: './blusas.component.html',
  styleUrls: ['./blusas.component.css']
})
export class BlusasComponent {

  seleccion!: string;
  seleccionObligatoria: boolean = false;

  constructor( private productoSrv: ProductosService, private compraSrv: ComprarService){}

  ngOnInit(){
    this.productoSrv.obtenerBlusas();
  }

  get blusas(){
    return this.productoSrv.blusas;
  }

  agregarCompra(blusa: Producto) {
    const producto: Producto = {
      "id": blusa.id,
      "imagen": blusa.imagen,
      "precio": blusa.precio,
      "nombre": blusa.nombre,
      "talla": this.seleccion
    }
    this.compraSrv.agregarProductoCarrito(producto);
  }
}

