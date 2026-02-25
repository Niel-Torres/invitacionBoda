import { Component, Input, OnInit } from '@angular/core';
import { Venue } from 'src/app/interfaces/invitation-data.interface';

@Component({
  selector: 'app-bloque-iglesia',
  templateUrl: './bloque-iglesia.component.html',
  styleUrls: ['./bloque-iglesia.component.scss'],
})
export class BloqueIglesiaComponent implements OnInit {

  @Input() venue!: Venue;

  constructor() { }

  ngOnInit() {}
}
