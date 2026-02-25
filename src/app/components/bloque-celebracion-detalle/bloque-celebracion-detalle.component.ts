import { Component, Input, OnInit } from '@angular/core';
import { TimelineEvent } from 'src/app/interfaces/invitation-data.interface';

@Component({
  selector: 'app-bloque-celebracion-detalle',
  templateUrl: './bloque-celebracion-detalle.component.html',
  styleUrls: ['./bloque-celebracion-detalle.component.scss'],
})
export class BloqueCelebracionDetalleComponent implements OnInit {

  @Input() timeline: TimelineEvent[] = [];

  constructor() { }

  ngOnInit() {}
}
