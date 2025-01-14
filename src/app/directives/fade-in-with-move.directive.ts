import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appFadeInWithMove]',
})
export class FadeInWithMoveDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const element = this.el.nativeElement;

    // Configurar el estilo inicial (invisible y desplazado hacia abajo)
    this.renderer.setStyle(element, 'opacity', '0');
    this.renderer.setStyle(element, 'transform', 'translateY(20px)');
    this.renderer.setStyle(element, 'transition', 'opacity 1.5s ease, transform 1.5s ease');

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Cambiar la opacidad y el transform al entrar en la vista
            this.renderer.setStyle(element, 'opacity', '1');
            this.renderer.setStyle(element, 'transform', 'translateY(0)');
            observerInstance.unobserve(element); // Dejar de observar tras la animación
          }
        });
      },
      { threshold: 0.1 } // Activar cuando el elemento es al menos un 10% visible
    );

    observer.observe(element);
  }
}
