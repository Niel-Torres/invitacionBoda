import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/invitation-data.interface';

@Component({
  selector: 'app-bloque-confirmar-asistencia-whatsapp',
  templateUrl: './bloque-confirmar-asistencia-whatsapp.component.html',
  styleUrls: ['./bloque-confirmar-asistencia-whatsapp.component.scss'],
})
export class BloqueConfirmarAsistenciaWhatsappComponent implements OnInit {

  @Input() person1!: Person;
  @Input() person2!: Person;
  @Input() rsvpTitle!: string;
  @Input() whatsappMessage!: string;

  constructor() {}

  ngOnInit() {}
}
