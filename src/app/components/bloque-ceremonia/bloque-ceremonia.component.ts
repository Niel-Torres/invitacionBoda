import { Component, Input, OnInit } from '@angular/core';
import { Venue } from 'src/app/interfaces/invitation-data.interface';

@Component({
  selector: 'app-bloque-ceremonia',
  templateUrl: './bloque-ceremonia.component.html',
  styleUrls: ['./bloque-ceremonia.component.scss'],
})
export class BloqueCeremoniaComponent implements OnInit {

  @Input() venue!: Venue;

  constructor() { }

  ngOnInit() {}
}
