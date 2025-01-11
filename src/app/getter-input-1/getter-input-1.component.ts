import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-getter-input-1',
  standalone: true,
  imports: [],
  templateUrl: './getter-input-1.component.html',
  styleUrl: './getter-input-1.component.css',
})
export class GetterInput1Component {
  private _title = '';
  @Input()
  get title() {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }
}
