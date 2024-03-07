import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaz/producto.interface';
import { ComprarService } from 'src/app/services/comprar.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-zapatos',
  templateUrl: './zapatos.component.html',
  styleUrls: ['./zapatos.component.css']
})
export class ZapatosComponent {

  seleccion!: string;
  seleccionObligatoria: boolean = false;

  constructor(private productoSrv: ProductosService, private compraSrv: ComprarService) { }

  ngOnInit() {
    this.productoSrv.obtenerZapatos();
  }

  get zapatos() {
    return this.productoSrv.zapatos;
  }

  agregarCompra(zapato: Producto) {
    const producto: Producto = {
      "id": zapato.id,
      "imagen": zapato.imagen,
      "precio": zapato.precio,
      "nombre": zapato.nombre,
      "talla": this.seleccion
    }
    this.compraSrv.agregarProductoCarrito(producto);
  }
}
