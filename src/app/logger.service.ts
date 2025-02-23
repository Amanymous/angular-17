import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root',
})
export class LoggerService implements Logger {
  log(message: string) {
    console.log('Logger Service:', message);
  }
}
