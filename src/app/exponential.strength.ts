import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'exponentialStrength',
})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: number): number {
    return Math.pow(value, exponent);
  }
}
