import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bloque-compartir-redes-sociales',
  templateUrl: './bloque-compartir-redes-sociales.component.html',
  styleUrls: ['./bloque-compartir-redes-sociales.component.scss'],
})
export class BloqueCompartirRedesSocialesComponent  implements OnInit {

    hashtag = environment.hashtag;
    usuarioInstagram: string = "@gracebtm";
  

  constructor() { }

  ngOnInit() {}

  gotoHashtag() {
    let urlHashTag = "https://www.instagram.com/explore/tags/bodagracedu";
    //await Browser.open({ url: urlHashTag });

    window.open(urlHashTag, "_system");
  }

}
