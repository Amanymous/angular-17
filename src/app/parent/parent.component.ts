import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { SUB_ITEM } from '../subItem.token';
import { ChildDefaultComponent } from '../child-default/child-default.component';
import { ChildPushComponent } from '../child-push/child-push.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildDefaultComponent, ChildPushComponent],
  providers: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  // changeDetection: ChangeDetectionStrategy.Default,
})
export class ParentComponent {
  // @ContentChild(ChildComponent, { read: ElementRef })
  // childComponent!: ElementRef;
  // @ContentChild(ChildComponent) childComponent!: QueryList<ChildComponent>;
  // @ContentChildren(ChildComponent, { read: ChildComponent })
  // childComponent!: QueryList<ChildComponent>;
  @ContentChild(SUB_ITEM)
  subItemTypes!: QueryList<string>;

  count = 0;

  constructor() {
    // setInterval(() => {
    //   this.count++;
    // }, 1000);
  }

  ngAfterContentInit() {
    if (this.subItemTypes && this.subItemTypes.length > 0) {
      this.subItemTypes.forEach((subItem) => {
        console.log(subItem);
      });
    } else {
      console.log('No subItemTypes found');
    }
  }
}
