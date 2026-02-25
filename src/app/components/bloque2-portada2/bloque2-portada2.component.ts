import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/invitation-data.interface';

@Component({
  selector: 'app-bloque2-portada2',
  templateUrl: './bloque2-portada2.component.html',
  styleUrls: ['./bloque2-portada2.component.scss'],
})
export class Bloque2Portada2Component implements OnInit {

  @Input() person1!: Person;
  @Input() person2!: Person;
  @Input() weddingDateText!: string;

  constructor() { }

  ngOnInit() {}
}
