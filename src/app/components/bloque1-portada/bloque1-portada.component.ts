import { Component, Input, OnInit } from '@angular/core';
import { Pareja } from 'src/app/interfaces/pareja';

@Component({
  selector: 'app-bloque1-portada',
  templateUrl: './bloque1-portada.component.html',
  styleUrls: ['./bloque1-portada.component.scss'],
})
export class Bloque1PortadaComponent  implements OnInit {

  @Input() novio!: Pareja; //Recibe los datos de la novia de un componente padre
  @Input() novia!: Pareja; //Recibe los datos del novio de un componente padre


  constructor() { }

  ngOnInit() {}

  loadData(evento: any) {
    console.log("Cargando");
  }

  reproducir() {
    const audio = new Audio('assets/music/a-thousand-years.mp3');
    audio.play();
  }

}
