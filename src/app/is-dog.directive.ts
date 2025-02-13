import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

export const isDog = (animal: Animal): animal is Dog => {
  return (animal as Dog).breed !== undefined;
};
export interface Cat {
  name: string;
  type: 'cat';
}

export interface Dog {
  name: string;
  breed: string;
  type: 'dog';
}

export type Animal = Dog | Cat;

@Directive({
  selector: '[appIsDog]',
  standalone: true,
})
export class IsDogDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appIsDog(animal: Animal) {
    if (isDog(animal)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  static ngTemplateGuard_appIsDog(
    dir: IsDogDirective,
    state: Animal
  ): state is Dog {
    return true;
  }
}
