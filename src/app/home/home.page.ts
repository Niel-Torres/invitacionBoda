import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  isModalOpen = false;

  

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
    let urlHashTag = "https://www.instagram.com/explore/tags/bodadegracedu";
    //await Browser.open({ url: urlHashTag });

    window.open(urlHashTag, "_blank");
  }

  gotoWhatsapp(novia?: string) {
    //https://api.whatsapp.com/send?phone=+34675575069&text=%C2%A1Hola%21+%F0%9F%8C%9F++Quiero+confirmar+mi+asistencia+a+tu+boda+%F0%9F%98%8D%E2%99%A5%EF%B8%8F%F0%9F%92%8D%F0%9F%92%92
    let urlApiWhatsapp = "https://api.whatsapp.com/send?phone=";
    let message = "&text=%C2%A1Hola%21+%F0%9F%8C%9F++Quiero+confirmar+mi+asistencia+a+tu+boda+%F0%9F%98%8D%E2%99%A5%EF%B8%8F%F0%9F%92%8D%F0%9F%92%92";
    let tfno_novio = "+34649101596";
    let tfno_novia = "+34675575069";

    let urlChatWhatsapp = urlApiWhatsapp + tfno_novio + message;
    if (novia) {
      urlChatWhatsapp = urlApiWhatsapp + tfno_novia + message;
    }

    //Browser.open({ url: urlChatWhatsapp });

    window.open(urlChatWhatsapp, "_blank");

  }




}
