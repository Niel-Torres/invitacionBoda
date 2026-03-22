import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloque-frase-agradecimientos',
  templateUrl: './bloque-frase-agradecimientos.component.html',
  styleUrls: ['./bloque-frase-agradecimientos.component.scss'],
})
export class BloqueFraseAgradecimientosComponent implements OnInit {

  @Input() thankYouText!: string;
  @Input() thankYouText2!: string;
  @Input() countdownDate!: string;
  @Input() backgroundImage: string = '';
  @Input() showCountdown: boolean = false;

  constructor() { }

  ngOnInit() {}
}
