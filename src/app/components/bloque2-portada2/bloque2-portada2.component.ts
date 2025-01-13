import { Component, Input, OnInit } from '@angular/core';
import { Pareja } from 'src/app/interfaces/pareja';

@Component({
  selector: 'app-bloque2-portada2',
  templateUrl: './bloque2-portada2.component.html',
  styleUrls: ['./bloque2-portada2.component.scss'],
})
export class Bloque2Portada2Component  implements OnInit {

  @Input() novio!: Pareja; //Recibe los datos de la novia de un componente padre
  @Input() novia!: Pareja; //Recibe los datos del novio de un componente padre

  constructor() { }

  ngOnInit() {}

}
