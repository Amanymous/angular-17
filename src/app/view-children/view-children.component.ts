import { Component, Input, Inject } from '@angular/core';
import { SUB_ITEM } from '../subItem.token';

@Component({
  selector: 'app-view-children',
  standalone: true,
  imports: [],
  providers: [{ provide: SUB_ITEM, useValue: 'task component value' }],
  templateUrl: './view-children.component.html',
  styleUrl: './view-children.component.css',
})
export class ViewChildrenComponent {
  @Input() taskName!: string;
  item!: string;
  constructor(@Inject(SUB_ITEM) public injectedItem: string) {
    this.item = injectedItem;
  }
}
