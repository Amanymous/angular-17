import {
  Component,
  signal,
  effect,
  Injector,
  runInInjectionContext,
} from '@angular/core';

@Component({
  selector: 'app-effects-signals',
  standalone: true,
  imports: [],
  templateUrl: './effects-signals.component.html',
  styleUrl: './effects-signals.component.css',
})
// export class EffectsSignalsComponent {
//   count = signal(0);

//   userAction = signal('clicked');

//   increment() {
//     this.count.update((val) => val + 1);
//   }
//   ngOnInit() {
//     this.userAction.set('submitted');
//   }
//   constructor() {
//     effect(() => {
//       console.log(
//         `the current value us ${this.count()} and ${this.userAction()}`
//       );
//     });
//   }
// }
// export class EffectsSignalsComponent {
//   count = signal(0);

//   // loggingEffect = effect(() => {
//   //   console.log(`the current value is ${this.count()}`);
//   // });

//   constructor(private injector: Injector) {}
//   logging() {
//     // runInInjectionContext(this.injector, () => {
//     //   effect(() => {
//     //     console.log(`the current value is ${this.count()}`);
//     //   });
//     // });
//     // or
//     effect(
//       () => {
//         console.log(`the current value is ${this.count()}`);
//       },
//       { injector: this.injector }
//     );
//   }
// }
export class EffectsSignalsComponent {
  count = signal(0);

  constructor(private injector: Injector) {}

  private loggingEffect = effect(
    () => {
      console.log(`the current value us ${this.count()}`);
    },
    { manualCleanup: true }
  );

  logging() {
    this.loggingEffect;
  }
  ngOnDestroy() {
    this.loggingEffect.destroy();
  }
}
