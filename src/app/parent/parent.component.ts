import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { SUB_ITEM } from '../subItem.token';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  // @ContentChild(ChildComponent, { read: ElementRef })
  // childComponent!: ElementRef;
  // @ContentChild(ChildComponent) childComponent!: QueryList<ChildComponent>;
  // @ContentChildren(ChildComponent, { read: ChildComponent })
  // childComponent!: QueryList<ChildComponent>;
  @ContentChild(SUB_ITEM)
  subItemTypes!: QueryList<string>;

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
