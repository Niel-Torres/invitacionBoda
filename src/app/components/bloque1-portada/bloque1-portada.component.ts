import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloque1-portada',
  templateUrl: './bloque1-portada.component.html',
  styleUrls: ['./bloque1-portada.component.scss'],
})
export class Bloque1PortadaComponent  implements OnInit {

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
