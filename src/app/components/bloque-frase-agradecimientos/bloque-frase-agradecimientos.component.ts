import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloque-frase-agradecimientos',
  templateUrl: './bloque-frase-agradecimientos.component.html',
  styleUrls: ['./bloque-frase-agradecimientos.component.scss'],
})
export class BloqueFraseAgradecimientosComponent implements OnInit {

  @Input() thankYouText!: string;
  @Input() countdownDate!: string;

  constructor() { }

  ngOnInit() {}
}
