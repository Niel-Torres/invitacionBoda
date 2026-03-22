import { Component, Input, OnInit } from '@angular/core';
import { InvitationData } from '@interfaces/invitation-data.interface';

@Component({
  selector: 'app-entrada-bienvenida',
  templateUrl: './entrada-bienvenida.component.html',
  styleUrls: ['./entrada-bienvenida.component.scss'],
})
export class EntradaBienvenidaComponent implements OnInit {

  @Input() data: InvitationData | null = null;

  constructor() { }

  ngOnInit() {}

}
