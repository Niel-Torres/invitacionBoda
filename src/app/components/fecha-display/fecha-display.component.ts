import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecha-display',
  templateUrl: './fecha-display.component.html',
  styleUrls: ['./fecha-display.component.scss'],
})
export class FechaDisplayComponent implements OnInit {
  @Input() targetDate!: string;
  @Input() venueName?: string;
  @Input() venueAddress?: string;
  @Input() mapsUrl?: string;

  month: string = '';
  day: number = 0;
  dayOfWeek: string = '';
  year: number = 0;

  private MONTHS_ES = [
    'ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO',
    'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'
  ];

  private DAYS_ES = [
    'DOMINGO', 'LUNES', 'MARTES', 'MIÉRCOLES',
    'JUEVES', 'VIERNES', 'SÁBADO'
  ];

  ngOnInit() {
    const date = new Date(this.targetDate);
    this.month = this.MONTHS_ES[10];
    this.day = 14;
    this.dayOfWeek = this.DAYS_ES[6];
    this.year = date.getFullYear();
  }
}
