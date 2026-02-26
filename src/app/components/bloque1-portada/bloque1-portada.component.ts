import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/invitation-data.interface';

@Component({
  selector: 'app-bloque1-portada',
  templateUrl: './bloque1-portada.component.html',
  styleUrls: ['./bloque1-portada.component.scss'],
})
export class Bloque1PortadaComponent implements OnInit {

  @Input() person1!: Person;
  @Input() person2!: Person;
  @Input() coverTitle!: string;
  @Input() coverSubtitle!: string;
  @Input() musicSrc!: string;
  @Input() coverImage!: string;
  @Input() coverBackground!: string;

  constructor() { }

  ngOnInit() {}
}
