import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagenComponent } from './imagenes/imagen/imagen.component';
import { ProductoComponent } from './products/producto/producto.component';
import { ListaProductosComponent } from './products/lista-productos/lista-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagenComponent,
    ProductoComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
