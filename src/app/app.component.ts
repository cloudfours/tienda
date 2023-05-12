import { Component } from '@angular/core';
import { Product } from './products/producto/modelProducto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tienda';
  estado=true
  
  imgParetn:string="https://www.w3schools.com/howto/img_avatar.png"
  loadimg(img:string){
console.log("cargando imagen",img);
  }
  toggle(){
    this.estado=!this.estado
  
  }
}
