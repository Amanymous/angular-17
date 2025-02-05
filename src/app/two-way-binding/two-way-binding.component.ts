import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css',
})
export class TwoWayBindingComponent {
  @Input() size: number = 0; // Input property for size
  @Output() onSizeChange = new EventEmitter<number>(); // Event emitter to send back size changes

  Inc() {
    this.resize(1); // Increment by 1
  }

  Dec() {
    this.resize(-1); // Decrement by 1
  }

  // Resize method handles both increment and decrement
  resize(value: number) {
    const sizeValue = this.size + value;
    this.onSizeChange.emit(sizeValue); // Emit the updated size value back to the parent
  }
}
