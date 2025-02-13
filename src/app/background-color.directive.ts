import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
  standalone: true,
})
export class BackgroundColorDirective {
  renderer = inject(Renderer2);
  hostEl = inject(ElementRef).nativeElement;

  constructor() {}

  ngOnInit() {
    this.renderer.setStyle(this.hostEl, 'backgroundColor', 'green');
  }
}
