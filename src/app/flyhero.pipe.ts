import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyhero',
  standalone: true,
  pure: false,
})
export class FlyheroPipe implements PipeTransform {
  transform(heros: { name: string; canFly: boolean }[]) {
    return heros.filter((hero) => hero.canFly);
  }
}
