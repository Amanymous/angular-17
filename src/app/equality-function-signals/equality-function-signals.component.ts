import { Component, computed, effect, signal, untracked } from '@angular/core';
// import { isEqual } from 'lodash';

@Component({
  selector: 'app-equality-function-signals',
  standalone: true,
  imports: [],
  templateUrl: './equality-function-signals.component.html',
  styleUrl: './equality-function-signals.component.css',
})
// export class EqualityFunctionSignalsComponent {
//   data = signal(['test']);
//   isEqual(arr1: any[], arr2: any[]): boolean {
//     // Compare the arrays for equality by checking their length and each item
//     if (arr1.length !== arr2.length) {
//       return false;
//     }

//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       }
//     }
//     return true;
//   }
//   computedSignal = computed(
//     () => {
//       console.log('computed executes');
//       return this.data();
//     },
//     { equal: this.isEqual }
//   );

//   constructor() {
//     effect(() => {
//       console.log('effect executed');
//       console.log(this.data());
//     });
//   }

//   ngOnInit() {
//     setTimeout(() => {
//       console.log('setTimeout executed');

//       // Update signal data after 1 second with the same array (will NOT trigger computedSignal update because of custom equality check)
//       this.data.set(['test']); // Same value, no update triggered by custom equality

//       // Update signal data after 2 seconds with a different array, which will trigger reactivity
//       setTimeout(() => {
//         this.data.set(['newValue']);
//       }, 1000);
//     }, 1000);
//   }
// }

// Read Without Tracking Dependencies!
// export class EqualityFunctionSignalsComponent {
//   count = signal(0);
//   name = signal('Aman');

//   constructor() {
//     effect(() => {
//       // console.log(
//       //   `Count is ${this.count()} and name is ${untracked(this.name)}`
//       // );
//       // or
//       untracked(() => {
//         console.log(`Count is ${this.count()} and name is ${this.name()}`);
//       });
//     });
//   }

//   ngOnInit() {
//     setTimeout(() => {
//       console.log('count triggered!');
//       this.count.set(3);
//     }, 3000);

//     setTimeout(() => {
//       console.log('name triggered!');
//       this.name.set('mughal');
//     }, 6000);
//   }
// }

// Effects ⚡ + Cleanups!
export class EqualityFunctionSignalsComponent {
  count = signal(0);

  constructor() {
    effect((onCleanup) => {
      const timer = setInterval(() => {
        console.log('Interval effect executes', this.count());
      }, 1000);
      onCleanup(() => {
        clearInterval(timer);
      });
    });
  }
}
