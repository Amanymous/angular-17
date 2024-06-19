import { Component, OnInit } from '@angular/core';
import { ResponsiveDirective } from '../directives/responsive.directive';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [ResponsiveDirective],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent implements OnInit {
  ngOnInit() {}
}
