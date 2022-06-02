import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component'

@NgModule({
    //LAS DECLARACION DICEN QUE COSAS CONTIENE ESTE MODULO, QUE COMPONENTES, PIPES,ETC
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        //ACA VA LA EXPORTACION PARA USARLO EN EL HTML <ListadoComponent></ListadoComponent>
        ListadoComponent
    ],
    imports:[
        //ACA USUALMENTE VAN MODULOS
        CommonModule
    ]
})
export class HeroesModule{

}