import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval, Subscription, throwError } from 'rxjs';

@Component({
  selector: 'app-rxjs-interop-signal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-interop-signal.component.html',
  styleUrl: './rxjs-interop-signal.component.css',
})
// export class RxjsInteropSignalComponent {
//   counterObservable = interval(1000);
//   private subscription!: Subscription;
//   counter = toSignal(this.counterObservable, {
//     initialValue: 0,
//     manualCleanup: true,
//   });

//   ngOnInit() {
//     this.subscription = this.counterObservable.subscribe();
//   }

//   ngOnDestroy() {
//     if (this.subscription) {
//       this.subscription.unsubscribe();
//     }
//   }
// }
export class RxjsInteropSignalComponent {
  errorMessage: string = '';
  observable = throwError(() => new Error('An error occured!'));
  value = toSignal(this.observable);
  ngOnInit() {
    try {
      this.value();
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
}
