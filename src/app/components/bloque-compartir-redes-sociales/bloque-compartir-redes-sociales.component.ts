import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pareja } from 'src/app/interfaces/pareja';

@Component({
  selector: 'app-bloque-compartir-redes-sociales',
  templateUrl: './bloque-compartir-redes-sociales.component.html',
  styleUrls: ['./bloque-compartir-redes-sociales.component.scss'],
})
export class BloqueCompartirRedesSocialesComponent  implements OnInit {

  @Input() novio!: Pareja; //Recibe los datos de la novia de un componente padre
  @Input() novia!: Pareja; //

  hashtag = environment.hashtag;
  usuarioInstagram: string = "@gracebtm";
  

  constructor() { }

  ngOnInit() {
    let novios = this.novia.name+"y"+this.novio.name;
    this.usuarioInstagram = "@"+novios;
    this.hashtag = "#"+novios;
  }

  gotoHashtag() {
    let urlHashTag = "https://www.instagram.com/explore/tags/bodagracedu";
    //await Browser.open({ url: urlHashTag });

    window.open(urlHashTag, "_system");
  }

}
