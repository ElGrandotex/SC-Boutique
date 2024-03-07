import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaz/producto.interface';
import { ComprarService } from 'src/app/services/comprar.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-pantalones',
  templateUrl: './pantalones.component.html',
  styleUrls: ['./pantalones.component.css']
})
export class PantalonesComponent {

  seleccion!: string;
  seleccionObligatoria: boolean = false;

  constructor( private productoSrv: ProductosService, private compraSrv: ComprarService){}

  ngOnInit(){
    this.productoSrv.obtenerPantalones();
  }

  get pantalones(){
    return this.productoSrv.pantalones;
  }

  agregarCompra(pantalon: Producto) {
    const producto: Producto = {
      "id": pantalon.id,
      "imagen": pantalon.imagen,
      "precio": pantalon.precio,
      "nombre": pantalon.nombre,
      "talla": this.seleccion
    }
    this.compraSrv.agregarProductoCarrito(producto);
  }
}
