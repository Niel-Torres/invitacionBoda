import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-bride-groom',
  templateUrl: './contact-bride-groom.component.html',
  styleUrls: ['./contact-bride-groom.component.scss'],
})
export class ContactBrideGroomComponent  implements OnInit {

  brideName: Person = {name: "Grace", movil: "+34675575069"};
  groomName: Person = {name: "Edu", movil: "+34649101596"};

  constructor() { }

  ngOnInit() {}

  gotoWhatsapp(bride?: string) {    
    let urlApiWhatsapp = environment.urlApiWhatsapp;
    let message = "&text=%C2%A1Hola%21+%F0%9F%8C%9F++Quiero+confirmar+mi+asistencia+a+tu+boda+%F0%9F%98%8D%E2%99%A5%EF%B8%8F%F0%9F%92%8D%F0%9F%92%92";
    let urlChatWhatsapp = urlApiWhatsapp + this.groomName.movil + message;
    
    if (bride) {
      urlChatWhatsapp = urlApiWhatsapp + this.brideName.movil + message;
    }

    window.open(urlChatWhatsapp, "_blank");
  }

}
