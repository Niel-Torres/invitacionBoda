import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appFadeInOnScroll]'
})
export class FadeInOnScrollDirective implements AfterViewInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Añadir la clase que activa la animación
            this.renderer.addClass(this.el.nativeElement, 'fade-in-visible');
            observer.unobserve(entry.target); // Deja de observar tras la animación
          }
        });
      },
      { threshold: 0.1 } // Activar cuando el elemento sea un 10% visible
    );

    // Observar el elemento asociado a esta directiva
    observer.observe(this.el.nativeElement);
  }

}
