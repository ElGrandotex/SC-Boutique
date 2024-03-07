import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../interfaz/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private dataVestidos = 'assets/data/vestidos.json';
  private dataPantalones = 'assets/data/pantalones.json';
  private dataZapatos = 'assets/data/zapatos.json';
  private dataBlusas = 'assets/data/blusas.json';

  vestidos!: Producto[];
  blusas!: Producto[];
  pantalones!: Producto[];
  zapatos!: Producto[];

  constructor( private http: HttpClient) { }

  /**
   * @description
   * Consulta zapatos
   */
  obtenerZapatos(): void {
    this.http.get<Producto[]>(`${ this.dataZapatos }`)
      .subscribe( resp => {
        this.zapatos = resp;
      })
  }
  /**
   * @description
   * Consulta zapatos
   */
  obtenerVestidos(): void {
    this.http.get<Producto[]>(`${ this.dataVestidos }`)
      .subscribe( resp => {
        this.vestidos = resp;
      })
  }
  /**
   * @description
   * Consulta zapatos
   */
  obtenerBlusas(): void {
    this.http.get<Producto[]>(`${ this.dataBlusas }`)
      .subscribe( resp => {
        this.blusas = resp;
      })
  }
  /**
   * @description
   * Consulta zapatos
   */
  obtenerPantalones(): void {
    this.http.get<Producto[]>(`${ this.dataPantalones }`)
      .subscribe( resp => {
        this.pantalones = resp;
      })
  }

}
