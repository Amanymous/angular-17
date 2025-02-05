import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ItemListComponent } from '../item-list/item-list.component';
import { Item } from '../item.model';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [CommonModule, ItemListComponent],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css',
})
export class PropertyBindingComponent {
  isDisabled = false;
  classes = ['bgcolor-green', 'color-red'];
  isActive = true;
  isHighlighted = true;
  isDynamic = true;
  items: Item[] = [{ id: 1, name: 'aman' }];
}
