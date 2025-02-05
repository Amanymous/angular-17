import { Component, Input } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css',
})
export class ItemListComponent {
  @Input() items: Item[] = [];
}
