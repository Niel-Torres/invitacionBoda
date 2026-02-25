import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

import { register } from 'swiper/element/bundle';
register();


@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss'],
})
export class CarruselComponent implements AfterViewInit {

  @Input() images: string[] = [];

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    const swiperContainer = document.querySelector('swiper-container');
    if (swiperContainer && 'swiper' in swiperContainer) {
      swiperContainer.swiper.update();
    }
  }
}
