import { Injectable } from '@angular/core';
import { ConsoleLoggerService } from './console-logger.service';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  constructor(private consoleLogger: ConsoleLoggerService) {}

  id = Math.random();

  getId() {
    console.log(this.id);
  }
}
