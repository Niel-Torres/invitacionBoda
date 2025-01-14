import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appTextTypewriter]', // Nombre para usar la directiva
})
export class TextTypewriterDirective implements AfterViewInit {
  @Input() delay: number = 100; // Retraso entre cada letra en milisegundos
  private originalText: string = '';

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const element = this.el.nativeElement;
    this.originalText = element.textContent || ''; // Usa textContent para preservar los espacios
    element.textContent = ''; // Limpia el texto inicial

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Si el elemento está en vista, inicia la animación
            this.typeText(0);
            observerInstance.unobserve(element); // Deja de observar tras activar
          }
        });
      },
      { threshold: 0.1 } // Se activa cuando el elemento es 10% visible
    );

    observer.observe(element); // Observar el elemento
  }

  private typeText(index: number): void {
    if (index < this.originalText.length) {
      const nextChar = this.originalText.charAt(index);
      this.el.nativeElement.textContent += nextChar; // Añade el carácter
      setTimeout(() => this.typeText(index + 1), this.delay); // Llama al siguiente carácter con retraso
    }
  }
}
