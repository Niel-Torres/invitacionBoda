import { Component, OnInit, Input } from '@angular/core';
import { Pareja } from 'src/app/interfaces/pareja';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-bride-groom',
  templateUrl: './contact-bride-groom.component.html',
  styleUrls: ['./contact-bride-groom.component.scss'],
})
export class ContactBrideGroomComponent  implements OnInit {

  @Input() novio!: Pareja; //Recibe los datos de la novia de un componente padre
  @Input() novia!: Pareja; //Recibe los datos del novio de un componente padre
  

  constructor() { }

  ngOnInit() {}

  gotoWhatsapp(movil?: string) {    
    let urlApiWhatsapp = environment.urlApiWhatsapp;
    let message = "&text=%C2%A1Hola%21+%F0%9F%8C%9F++Quiero+confirmar+mi+asistencia+a+tu+boda+%F0%9F%98%8D%E2%99%A5%EF%B8%8F%F0%9F%92%8D%F0%9F%92%92";
    let urlChatWhatsapp = '';
    
    if (movil) {
      urlChatWhatsapp = urlApiWhatsapp + movil + message;
    }

    window.open(urlChatWhatsapp, "_blank");
  }

}
