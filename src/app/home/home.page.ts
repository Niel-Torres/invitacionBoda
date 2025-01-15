import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pareja } from '../interfaces/pareja';
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
  showArrow = true; // Controla la visibilidad de la flecha.

  pareja1: Pareja = {
    name: 'Edu', 
    movil: '+34656295612',
  };

  pareja2: Pareja = {
    name: 'Grace',
    movil: '+34656295612',
  };

  constructor() {
   }

   ngOnInit(): void {
     //this.reproducir();
     
   }

   onScroll(event: any): void {
    const scrollTop = event.detail.scrollTop; // Desplazamiento actual desde el inicio
    const maxScrollTop = 6300; // El valor máximo que identificaste manualmente
  
    // Mostrar flecha solo si no se ha alcanzado el final
    this.showArrow = scrollTop < maxScrollTop;
  
    console.log(`scrollTop: ${scrollTop}, maxScrollTop: ${maxScrollTop}, showArrow: ${this.showArrow}`);
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
