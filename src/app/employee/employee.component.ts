import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  // selector: '.app-employee', // using class
  // selector: '[app-employee]', // using attribute

  selector: 'app-employee',

  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  encapsulation: ViewEncapsulation.Emulated,
  inputs: ['Pdata'],
  outputs: ['childEvent'],
})
export class EmployeeComponent {
  Pdata: any;

  childEvent = new EventEmitter();
  sendData(val: any) {
    console.log(val);
    this.childEvent.emit(val);
  }
}
