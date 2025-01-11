import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComputedSignalComponent } from './computed-signal/computed-signal.component';
import { EffectsSignalsComponent } from './effects-signals/effects-signals.component';
import { EqualityFunctionSignalsComponent } from './equality-function-signals/equality-function-signals.component';
import { RxjsInteropSignalComponent } from './rxjs-interop-signal/rxjs-interop-signal.component';
import { ToObservableSignalComponent } from './to-observable-signal/to-observable-signal.component';
import { Input1Component } from './input-1/input-1.component';
import { GetterInput1Component } from './getter-input-1/getter-input-1.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ComputedSignalComponent,
    EffectsSignalsComponent,
    EqualityFunctionSignalsComponent,
    RxjsInteropSignalComponent,
    ToObservableSignalComponent,
    Input1Component,
    GetterInput1Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-18';

  componentToggle = signal(false);

  onToggleComponent() {
    this.componentToggle.update((val) => !val);
  }
}
