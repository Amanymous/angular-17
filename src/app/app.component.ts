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
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HostComponent } from './host/host.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { of } from 'rxjs';
import { GreetPipe } from './greet.pipe';
import { ExponentialStrengthPipe } from './exponential.strength';
import { FlyheroPipe } from './flyhero.pipe';
import { FormsModule } from '@angular/forms';
import { Animal, IsDogDirective } from './is-dog.directive';
import { DemoDirective, DemoUrl } from './demo.directive';
import { WidgetComponent } from './widget/widget.component';
import { ColorDirective } from './color.directive';
import { BackgroundColorDirective } from './background-color.directive';
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
    // AdminProfileComponent,
    // UserProfileComponent,
    HostComponent,
    DynamicComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    GreetPipe,
    FlyheroPipe,
    ExponentialStrengthPipe,
    FormsModule,
    IsDogDirective,
    DemoDirective,
    WidgetComponent,
    // ColorDirective,
    // BackgroundColorDirective,
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
  isAdmin = true;
  items = [1, 2, 3, 4, 5];
  heroes: { name: string; canFly: boolean }[] = [];
  user = { name: 'Aman' };
  details$ = of([1, 2, 3, 4]);
  userRole = 'admin';
  animal: Animal = {
    name: 'Dog',
    breed: 'sdafd',
    type: 'dog',
  };
  demoString = 'Demo';
  demoUrl: DemoUrl = {
    url: 'https://www.google.com',
    video: true,
  };
  fontSizePx = 19;

  doSomething() {
    console.log('Event fired');
  }

  profileComponent: {
    new (): AdminProfileComponent | UserProfileComponent;
  } | null = null;

  ngOnInit() {
    this.getProfileComponent();
  }

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

  async getProfileComponent() {
    if (this.isAdmin) {
      const { AdminProfileComponent } = await import(
        './admin-profile/admin-profile.component'
      );
      this.profileComponent = AdminProfileComponent;
    } else {
      const { UserProfileComponent } = await import(
        './user-profile/user-profile.component'
      );
      this.profileComponent = UserProfileComponent;
    }

    // return !this.isAdmin ? AdminProfileComponent : UserProfileComponent;
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

  addHero(hero: string) {
    // let heroes = [...this.heroes];
    this.heroes.push({ name: hero, canFly: true });
    // this.heroes = heroes;
  }
  cellPhone(value: string) {
    console.log(value);
  }
}
