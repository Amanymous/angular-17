import { Component } from '@angular/core';
import { SUB_ITEM } from '../subItem.token';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  providers: [{ provide: SUB_ITEM, useValue: 'Child component value' }],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  message: string = 'Hi from Child Component';

  showMessage() {
    alert(this.message);
  }
}
