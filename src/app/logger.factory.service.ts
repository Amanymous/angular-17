import { inject, InjectionToken } from '@angular/core';
import { ConsoleLoggerService } from './console-logger.service';
import { FileLoggerService } from './file-logger.service';
import { TestService } from './test.service';
import { Logger } from './logger';

export const Logger_Token = new InjectionToken<Logger>('logger');

export const loggerFunction = () => {
  const testService = inject(TestService);
  const consoleLogger = inject(ConsoleLoggerService);
  const fileLogger = inject(FileLoggerService);
  return testService.status ? consoleLogger : fileLogger;
};

export const LoggerFactory = {
  provide: Logger_Token,
  useFactory: loggerFunction,
  deps: [TestService],
};
