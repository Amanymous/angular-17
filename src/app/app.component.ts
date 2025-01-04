import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComputedSignalComponent } from './computed-signal/computed-signal.component';
import { EffectsSignalsComponent } from './effects-signals/effects-signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComputedSignalComponent, EffectsSignalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-18';
}
