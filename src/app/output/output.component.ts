import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css',
})
export class OutputComponent {
  @Output('childEvent') dataEvent = new EventEmitter<string>();

  sendData() {
    this.dataEvent.emit('data from child');
  }
}
