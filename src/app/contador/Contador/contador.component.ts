import {Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <h3> La base es: <strong>{{base}}</strong> </h3>
        <!-- <h2>{{5+5}}</h2> -->

        <button (click)="acumular(base)" > +5 </button>

        <span> {{numero}} </span>

        <button (click)="acumular(-base)" > -5 </button>
    
    `
})
export class ContadorComponent{

    //CON ESTO PODEMOS IMPRIMIR CODIGO EN EL HTML
    titulo: string = 'Texto en variable y HTML';
    numero: number = 10;
    base: number = 5;

    //METODOS EN EL COMPONENTE
    acumular ( valor:number){
        this.numero += valor;
    }
}
