import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-child-push',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-push.component.html',
  styleUrl: './child-push.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildPushComponent {
  count = 0;
  // count$!: Observable<number>;

  constructor(private cdr: ChangeDetectorRef) {
    // setInterval(() => {
    //   this.count++;
    // }, 1000);
    // this.count$ = new Observable((subscriber) => {
    //   let value = 0;
    //   setInterval(() => {
    //     subscriber.next(value++);
    //   }, 1000);
    // });
    setInterval(() => {
      this.count++;
      this.cdr.markForCheck();
    }, 1000);
  }

  update() {
    // this.count++;
  }
}
