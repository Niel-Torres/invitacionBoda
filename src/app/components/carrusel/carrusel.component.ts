import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { register } from 'swiper/element/bundle';
register();


@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss'],
})
export class CarruselComponent  implements AfterViewInit {


  images = [
    { src: 'assets/images/fotos-pareja/carrusel/01.jpeg', alt: 'Imagen 1' },
    { src: 'assets/images/fotos-pareja/carrusel/02.jpeg', alt: 'Imagen 2' },
    { src: 'assets/images/fotos-pareja/carrusel/03.jpeg', alt: 'Imagen 3' },
    { src: 'assets/images/fotos-pareja/carrusel/04.jpeg', alt: 'Imagen 4' },
    { src: 'assets/images/fotos-pareja/carrusel/05.jpeg', alt: 'Imagen 5' },
    { src: 'assets/images/fotos-pareja/carrusel/06.jpeg', alt: 'Imagen 6' },
    { src: 'assets/images/fotos-pareja/carrusel/07.jpeg', alt: 'Imagen 7' },
    { src: 'assets/images/fotos-pareja/carrusel/08.jpeg', alt: 'Imagen 8' },
    { src: 'assets/images/fotos-pareja/carrusel/09.jpeg', alt: 'Imagen 9' },
    { src: 'assets/images/fotos-pareja/carrusel/10.jpeg', alt: 'Imagen 10' },
    { src: 'assets/images/fotos-pareja/carrusel/11.jpeg', alt: 'Imagen 11' },
    { src: 'assets/images/fotos-pareja/carrusel/12.jpeg', alt: 'Imagen 12' },
    { src: 'assets/images/fotos-pareja/carrusel/13.jpeg', alt: 'Imagen 13' },
    { src: 'assets/images/fotos-pareja/carrusel/14.jpeg', alt: 'Imagen 14' },
  ];


  constructor() { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    // Asegúrate de que el contenedor Swiper actualice las diapositivas
    const swiperContainer = document.querySelector('swiper-container');
    if (swiperContainer && 'swiper' in swiperContainer) {
      swiperContainer.swiper.update();
    }
  }

}
