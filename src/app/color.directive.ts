import {
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true,
})
export class ColorDirective {
  renderer = inject(Renderer2);
  hostEl = inject(ElementRef).nativeElement;

  @Input() color = 'red';
  @Output() colorChanged = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.renderer.setStyle(this.hostEl, 'color', this.color);
    this.renderer.setStyle(this.hostEl, 'border', '1px solid black');
    this.renderer.setStyle(this.hostEl, 'padding', '8px');

    setTimeout(() => {
      this.colorChanged.emit();
    }, 1000);
  }
}
