import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

/*   constructor() { 
    console.log("Soy constructor");
  } */

  //GENERALMENTE EL ONINIT SE USA PARA INICIALIZAR COSAS, PETICION A UN SERVICIO
  //Y SE TRAE LA INFORMACION
/*   ngOnInit(): void {
    console.log("Soy NgOnI");
  } */


  heroes: string[] = ['Spider-Man','IronMan','Hulk','Thor'];

  heroeBorrado: string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }

  
}
