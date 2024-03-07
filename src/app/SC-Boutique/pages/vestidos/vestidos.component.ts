import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaz/producto.interface';
import { ComprarService } from 'src/app/services/comprar.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-vestidos',
  templateUrl: './vestidos.component.html',
  styleUrls: ['./vestidos.component.css']
})
export class VestidosComponent {

  seleccion!: string;
  seleccionObligatoria: boolean = false;

  constructor( private productoSrv: ProductosService, private compraSrv: ComprarService){}

  ngOnInit(){
    this.productoSrv.obtenerVestidos();
  }

  get vestidos(){
    return this.productoSrv.vestidos;
  }

  agregarCompra(vestido: Producto) {
    const producto: Producto = {
      "id": vestido.id,
      "imagen": vestido.imagen,
      "precio": vestido.precio,
      "nombre": vestido.nombre,
      "talla": this.seleccion
    }
    this.compraSrv.agregarProductoCarrito(producto);
  }
}
