import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

export interface DemoUrl {
  url: string;
  video: boolean;
}

export interface DemoContext {
  $implicit: number;
  demo: string;
  url: DemoUrl;
}

@Directive({
  selector: '[appDemo]',
  standalone: true,
})
export class DemoDirective {
  @Input() appDemo!: string;
  @Input() appDemoUrl!: DemoUrl;

  constructor(
    private templateRef: TemplateRef<DemoContext>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    const context: DemoContext = {
      $implicit: 1,
      demo: this.appDemo,
      url: this.appDemoUrl,
    };
    this.viewContainer.createEmbeddedView(this.templateRef, context);
  }

  static ngTemplateContextGuard(
    directive: DemoDirective,
    context: unknown
  ): context is DemoContext {
    return true;
  }
}
