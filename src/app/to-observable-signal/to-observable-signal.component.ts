import { CommonModule } from '@angular/common';
import { Component, inject, Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
class QueryService {
  query = signal('');
}
@Component({
  selector: 'app-to-observable-signal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-observable-signal.component.html',
  styleUrl: './to-observable-signal.component.css',
})
export class ToObservableSignalComponent {
  query = inject(QueryService).query;

  query$ = toObservable(this.query);

  result$ = this.query$.pipe(switchMap((query) => query));

  ngOnInit() {
    this.query.set('a');
  }

  onQuerychange(event: Event) {
    this.query.set((event.target as HTMLInputElement).value);
  }
}
