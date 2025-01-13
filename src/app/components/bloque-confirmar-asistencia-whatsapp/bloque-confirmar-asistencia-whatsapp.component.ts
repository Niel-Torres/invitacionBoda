import { Component, OnInit, Input } from '@angular/core';
import { Pareja } from 'src/app/interfaces/pareja';

@Component({
  selector: 'app-bloque-confirmar-asistencia-whatsapp',
  templateUrl: './bloque-confirmar-asistencia-whatsapp.component.html',
  styleUrls: ['./bloque-confirmar-asistencia-whatsapp.component.scss'],
})
export class BloqueConfirmarAsistenciaWhatsappComponent implements OnInit {

  @Input() novio!: Pareja; //Recibe los datos de la novia de un componente padre
  @Input() novia!: Pareja; //Recibe los datos del novio de un componente padre

  pareja1!: Pareja;
  pareja2!: Pareja;

  constructor() {

  }

  ngOnInit() {
    this.pareja1 = this.novio;
    this.pareja2 = this.novia;
  }

}
