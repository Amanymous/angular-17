import { Component } from '@angular/core';
import { ColorDirective } from '../color.directive';
import { BackgroundColorDirective } from '../background-color.directive';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css',
  hostDirectives: [
    {
      directive: ColorDirective,
      inputs: ['color: textColor'], // alias name
      outputs: ['colorChanged'], // alias name
    },
    BackgroundColorDirective,
  ],
})
export class WidgetComponent {}
