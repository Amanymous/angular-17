import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-computed-signal',
  standalone: true,
  imports: [],
  templateUrl: './computed-signal.component.html',
  styleUrl: './computed-signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// export class ComputedSignalComponent {
//   count: WritableSignal<number> = signal(1);
//   doubleCount: Signal<number> = computed(() => this.count() * 2);
//   items: WritableSignal<number[]> = signal([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//   evenItems: Signal<number[]> = computed(() => {
//     console.log('Filtering even number');
//     return this.items().filter((item) => item % 2);
//   });

//   expensiveComputation = computed(() => {
//     console.log('Expensive computation running..', this.count());

//     return this.count() * 100;
//   });

//   ngOnInit() {
//     console.log('before=', this.count(), this.doubleCount());
//     this.count.set(5);
//     console.log('after=', this.count(), this.doubleCount());
//   }
//   expensiveCount() {
//     console.log(this.evenItems());
//   }

//   increment() {
//     // this.count.update((val) => val + 1);
//     this.items.set([12, 14, 16, 18, 20, 21]);
//   }
// }
export class ComputedSignalComponent {
  // use changeDetection: ChangeDetectionStrategy.OnPush,
  showCount = signal(false);
  count: WritableSignal<number> = signal(0);

  doubleCount: Signal<number> = computed(() => this.count() * 2);
  conditionalCount = computed(() => {
    console.log('---', this.showCount());

    if (!this.showCount()) {
      return 'Nothing to show here';
    } else {
      return `The count value is ${this.count()}`;
    }
  });

  ngOnInit() {
    this.count.set(5);
    console.log('double count', this.doubleCount());
  }
  getCondition() {
    console.log(this.conditionalCount());

    this.conditionalCount();
    // this.showCount.set(true);
  }
  increment() {
    this.count.update((val) => val + 1);
  }
  updateshowCount() {
    this.showCount.update((val) => !val);
  }
}
