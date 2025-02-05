import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css',
})
export class EventBindingComponent {
  onSave(event: MouseEvent) {
    console.log('Clicked', event);
  }

  onKey(event: Event) {
    console.log('KeyDown', event);
  }
}
