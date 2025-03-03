import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, fromEvent } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NewObservableComponent } from './new-observable/new-observable.component';
import { FunctionObservableComponent } from './function-observable/function-observable.component';
import { functionObs, functionObservable } from './service/Function';
import { CancellingObservableComponent } from './cancelling-observable/cancelling-observable.component';
import { OperatorsBasicsComponent } from './operators-basics/operators-basics.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NewObservableComponent,
    FunctionObservableComponent,
    CancellingObservableComponent,
    OperatorsBasicsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
// export class AppComponent {
//   title = 'angular-app';
//   @ViewChild('click-btn', { static: true }) clickBtn!: ElementRef;

//   postArray = [
//     { title: 'John 1', description: 'abc 1' },
//     { title: 'John 2', description: 'abc 2' },
//     { title: 'John 3', description: 'abc 3' },
//   ];

//   postArrayObservable$ = from(this.postArray);
//   promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('===', this.postArray);

//       resolve('resolve');
//     }, 3000);
//   });
//   promiseObservable$ = from(this.promise);
//   constructor() {
//     console.log('this.promiseObservable$:', this.promiseObservable$);
//     this.postArrayObservable$.subscribe({
//       next: (value) => console.log(value),
//       error: (error) => console.error('Error: ' + error),
//       complete: () => console.log('Complete'),
//     });
//     this.promiseObservable$.subscribe({
//       next: (value) => console.log(value),
//       error: (error) => console.error('Error: ' + error),
//       complete: () => console.log('Complete'),
//     });
//   }

//   ngAfterViewInit() {
//     fromEvent(document.getElementById('click-btn')!, 'click').subscribe({
//       next: (value) => console.log(value),
//       error: (error) => console.error('Error: ' + error),
//       complete: () => console.log('Complete click'),
//     });
//   }
// }
export class AppComponent {
  constructor() {
    console.log('Before Function Call');
    console.log(functionObs());
    console.log(functionObs());
    console.log('After Function Call');

    console.log('Before Observable Call');
    functionObservable.subscribe((data) => {
      console.log(data);
    });
    console.log('After Observable Call');
  }
}
