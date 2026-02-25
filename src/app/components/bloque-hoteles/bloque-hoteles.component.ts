import { Component, Input, OnInit } from '@angular/core';
import { Accommodation } from 'src/app/interfaces/invitation-data.interface';

@Component({
  selector: 'app-bloque-hoteles',
  templateUrl: './bloque-hoteles.component.html',
  styleUrls: ['./bloque-hoteles.component.scss'],
})
export class BloqueHotelesComponent implements OnInit {

  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() accommodation!: Accommodation;

  constructor() { }

  ngOnInit() {}
}
