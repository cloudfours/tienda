import { Component } from '@angular/core';
import { Product } from '../producto/modelProducto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent {
  product:Product[]=[
    {
      id:"23",
      image:"../assets/img/img/3.jpg",
      price:5000,
      name:"Producto 23",
    },
    {
      id:"25",
      image:"../assets/img/img/2.jpg",
      price:5000,
      name:"Producto 25",
    },
    {
      id:"28",
      image:"../assets/img/img/1.jpg",
      price:5000,
      name:"Producto 28",
    },
    {
      id:"24",
      image:"../assets/img/img/4.jpg",
      price:5000,
      name:"Producto 24",
    }


  ]
}
