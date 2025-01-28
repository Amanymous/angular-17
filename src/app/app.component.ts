import {
  Component,
  ElementRef,
  QueryList,
  signal,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ComputedSignalComponent } from './computed-signal/computed-signal.component';
import { EffectsSignalsComponent } from './effects-signals/effects-signals.component';
import { EqualityFunctionSignalsComponent } from './equality-function-signals/equality-function-signals.component';
import { RxjsInteropSignalComponent } from './rxjs-interop-signal/rxjs-interop-signal.component';
import { ToObservableSignalComponent } from './to-observable-signal/to-observable-signal.component';
import { Input1Component } from './input-1/input-1.component';
import { GetterInput1Component } from './getter-input-1/getter-input-1.component';
import { OutputComponent } from './output/output.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { ProfileComponent } from './profile/profile.component';
import { CheckedLifeCycleComponent } from './checked-life-cycle/checked-life-cycle.component';
import { ViewChildrenComponent } from './view-children/view-children.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ComputedSignalComponent,
    EffectsSignalsComponent,
    EqualityFunctionSignalsComponent,
    RxjsInteropSignalComponent,
    ToObservableSignalComponent,
    Input1Component,
    GetterInput1Component,
    OutputComponent,
    LifeCycleHooksComponent,
    ProfileComponent,
    CheckedLifeCycleComponent,
    ViewChildrenComponent,
    ChildComponent,
    ParentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces: true,
})
export class AppComponent {
  title = { name: 'angular-18' };
  tasks = ['task 1', 'task 2', 'task 3', 'task 4'];
  counter = 1;
  isActive = true;
  receivedDataFromChild = '';

  @ViewChildren(ViewChildrenComponent, { read: ElementRef })
  viewChildTask!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.viewChildTask.forEach((task) => {
      console.log(task);
    });
    this.viewChildTask.changes.subscribe(() => {
      console.log('Child Component has Changed');
    });
    setTimeout(() => {
      this.tasks.push('hi aman');
    }, 3000);
  }

  dataRecevied(data: string) {
    this.receivedDataFromChild = data;
  }

  componentToggle = signal(false);

  onToggleComponent() {
    this.componentToggle.update((val) => !val);
  }

  changeTitle() {
    // this.title = 'aman' + Math.random();
    this.title = { name: 'aman' + Math.random() };
  }

  toggleHook() {
    this.isActive = !this.isActive;
  }

  changeCounter() {
    this.counter = this.counter + 1;
  }
}
