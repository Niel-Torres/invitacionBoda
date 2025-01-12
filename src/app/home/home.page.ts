import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isModalOpen = false;
  hashtag = environment.hashtag;
  //valueSeparadorToChild: boolean = true; // Cambia este valor para probar
  valueSeparadorText_1: string = '¿Dónde es la iglesia?';
  valueSeparadorText_2: string = '¿Dónde es el banquete?';
  valueSeparadorText_3: string = 'Te compartimos los detalles de la celebración';
  valueSeparadorText_4: string = 'Galería de Fotos';  

  constructor() {
   }

   ngOnInit(): void {
     //this.reproducir();
     
   }

  loadData(evento: any) {
    console.log("Cargando");
  }

  reproducir() {
    const audio = new Audio('assets/music/a-thousand-years.mp3');
    audio.play();
  }

  gotoHashtag() {
    let urlHashTag = "https://www.instagram.com/explore/tags/bodagracedu";
    //await Browser.open({ url: urlHashTag });

    window.open(urlHashTag, "_system");
  }




}
