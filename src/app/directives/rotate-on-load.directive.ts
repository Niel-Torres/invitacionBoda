import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appRotateOnLoad]',
})
export class RotateOnLoadDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const element = this.el.nativeElement;

    // Inicialmente sin rotación
    this.renderer.setStyle(element, 'transform', 'rotate(0deg)');
    this.renderer.setStyle(element, 'transition', 'transform 3s ease-in-out');  // Aumentar el tiempo de transición a 10 segundos

    // Aplicar rotación de 360 grados después de un breve retraso
    setTimeout(() => {
      this.renderer.setStyle(element, 'transform', 'rotate(21deg)');
    }, 100); // Ajustar si quieres un retraso mayor o menor
  }
}
