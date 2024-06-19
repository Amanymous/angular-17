import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appResponsive]',
  standalone: true,
})
export class ResponsiveDirective implements OnInit {
  constructor(
    private pcModeElement: ElementRef,
    private breakpointObserver: BreakpointObserver
  ) {}
  ngOnInit() {
    console.log('Banner component initialized');
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
        next: (result: any) => {
          console.log('result=', result);
          for (let breakpoint of Object.keys(result.breakpoints)) {
            if (result.breakpoints[breakpoint]) {
              if (breakpoint === Breakpoints.HandsetPortrait) {
                this.pcModeElement.nativeElement.classList.remove('pc');
              }
              if (breakpoint === Breakpoints.WebLandscape) {
                this.pcModeElement.nativeElement.classList.add('pc');
              }
            }
          }
        },
      });
  }
}
