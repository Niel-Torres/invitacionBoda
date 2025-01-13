import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-fecha',
  templateUrl: './countdown-fecha.component.html',
  styleUrls: ['./countdown-fecha.component.scss'],
})
export class CountdownFechaComponent  implements OnInit {
  @Input() targetDate!: string; // Recibe la fecha de destino como input.

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private countdownInterval: any;

  constructor() { }

  ngOnInit(): void {
    this.startCountdown();
  }
  
  ngOnDestroy(): void {
    clearInterval(this.countdownInterval);
  }

  startCountdown() {
    const target = new Date(this.targetDate).getTime();

    this.countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(this.countdownInterval);
        this.days = this.hours = this.minutes = this.seconds = 0;
      } else {
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      }
    }, 1000);
  }
}
