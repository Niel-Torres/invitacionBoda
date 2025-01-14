import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appFadeInProgressive]', // Nombre de la directiva
})
export class FadeInProgressiveDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const element = this.el.nativeElement;

    // Configuración inicial: invisible
    this.renderer.setStyle(element, 'opacity', '0');
    this.renderer.setStyle(element, 'transition', 'opacity 4.5s ease');

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Elemento visible: activa el efecto progresivo
            this.renderer.setStyle(element, 'opacity', '1');
            observerInstance.unobserve(element); // Deja de observar después de activar
          }
        });
      },
      { threshold: 0.1 } // Activar cuando el elemento es al menos un 10% visible
    );

    observer.observe(element); // Observar el elemento
  }
}
