import { Component } from '@angular/core';


/*
EL DECORADOR RECIBE UN OBJETO COMO ARGUMENTO
*/
@Component({
  /*SELECTOR = NOMBRE QUE EL COMPONENTE VA A TENER 
    es el <app-root></app-root> en el index
  */
  selector: 'app-root',

  /*TemplateUrl: QUE ARCHIVO HTML VA A HACER USADO COMO COMPONENTE PARA MOSTRAR SU INFORMACION

  */
  templateUrl: 'app.component.html'

  /*
  template:'<span>Federico</span>
    <h1>EJEMPLO TITULO</h1>
    <div></div>
  '
  LO QUE HACE "template:" es que podemos escribir el HTML mismo aca para ir viendo la contraparte
  de typescript de abajo

  pero es cuestion de gustos, es mejor tenerlo separado y armar el html en el app.component.html
  */
})




export class AppComponent {


}
