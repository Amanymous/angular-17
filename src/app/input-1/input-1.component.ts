import { booleanAttribute, Component, Input } from '@angular/core';
import { changeValue, trimValue } from './counter.service';
import { CommonModule } from '@angular/common';
import { GetterInput1Component } from '../getter-input-1/getter-input-1.component';

@Component({
  selector: 'app-input-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-1.component.html',
  styleUrl: './input-1.component.css',
})
export class Input1Component extends GetterInput1Component {
  @Input({ required: true, transform: changeValue, alias: 'dummyCounter' })
  counter: string = '';
  @Input({ transform: trimValue }) message: string = '';
  @Input({ transform: booleanAttribute }) showCounter: boolean = false;
}
