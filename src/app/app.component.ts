import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComputedSignalComponent } from './computed-signal/computed-signal.component';
import { EffectsSignalsComponent } from './effects-signals/effects-signals.component';
import { EqualityFunctionSignalsComponent } from './equality-function-signals/equality-function-signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ComputedSignalComponent,
    EffectsSignalsComponent,
    EqualityFunctionSignalsComponent,
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
