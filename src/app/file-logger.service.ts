import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root',
})
export class FileLoggerService implements Logger {
  log(message: string) {
    console.log('File Logger Service', message);
  }
}
