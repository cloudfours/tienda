import { Component, Input } from '@angular/core';
import { Product } from './modelProducto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {

@Input() producto!: Product;

}
