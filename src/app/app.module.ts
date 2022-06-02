import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//MODULO PROPIO E IMPORTADO AL MODULO PRINCIPAL
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule} from './contador/contador.module';

//DECORADOR DE LA CLASE
@NgModule({
  //ACA USUALMENTE VAMOS A PONER LOS COMPONENTES
  declarations: [
    AppComponent,
  ],
  //ACA PONEMOS LOS MODULOS
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
  ],
  providers: [], //SERVICIOS ESPECIFICOS A UN MODULO
  bootstrap: [AppComponent] //COMPONENTE PRINCIPAL A LANZAR PRIMERO
})
export class AppModule { }
