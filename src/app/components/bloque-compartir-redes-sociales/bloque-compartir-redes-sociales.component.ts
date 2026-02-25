import { Component, Input, OnInit } from '@angular/core';
import { Person, Social } from 'src/app/interfaces/invitation-data.interface';

@Component({
  selector: 'app-bloque-compartir-redes-sociales',
  templateUrl: './bloque-compartir-redes-sociales.component.html',
  styleUrls: ['./bloque-compartir-redes-sociales.component.scss'],
})
export class BloqueCompartirRedesSocialesComponent implements OnInit {

  @Input() person1!: Person;
  @Input() person2!: Person;
  @Input() social!: Social;
  @Input() socialTitle!: string;

  constructor() { }

  ngOnInit() {}

  gotoHashtag() {
    window.open(this.social.instagramUrl, '_system');
  }
}
