import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { Book } from './book';

class abc {
  constructor() {
    console.log('Constructor Called!');
  }
  show() {
    console.log('abc show function ');
  }
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, EmployeeComponent],
  templateUrl: './app.component.html',
  // template: '<h1>hi</h1>',
  styleUrl: './app.component.css',
  preserveWhitespaces: true,
  // styles: ['h1{ background-color:orange }'],
  viewProviders: [abc, Book],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  constructor(private abc: abc, private book: Book) {
    console.log('component constructor called', abc, book);
    abc.show();
  }

  title = 'angular-app';
  zero: number = 0;
  num1: number = 100;
  num2: number = 100;
  Cdata: any;
  isLoggedIn: boolean = true;
  isValid: boolean = true;
  getData(val: any) {
    this.Cdata = val;
  }
  login() {
    this.isLoggedIn = true;
  }
  logout() {
    this.isLoggedIn = false;
  }
  onChange(val: boolean) {
    this.isValid = val;
  }
  // @HostListener('click', ['$event'])
  // show() {
  //   alert('kjsd');
  // }

  //  parent to child communication input property
}
