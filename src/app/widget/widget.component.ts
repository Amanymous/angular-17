import {
  assertInInjectionContext,
  Component,
  inject,
  Inject,
  InjectionToken,
  Injector,
  runInInjectionContext,
} from '@angular/core';
import { ColorDirective } from '../color.directive';
import { BackgroundColorDirective } from '../background-color.directive';
import { ConsoleLoggerService } from '../console-logger.service';
import { Logger_Token, LoggerFactory } from '../logger.factory.service';
import { Logger } from '../logger';
import { MyserviceService } from '../myservice.service';

// @Component({
//   selector: 'app-widget',
//   standalone: true,
//   imports: [],
//   templateUrl: './widget.component.html',
//   styleUrl: './widget.component.css',
//   hostDirectives: [
//     {
//       directive: ColorDirective,
//       inputs: ['color: textColor'], // alias name
//       outputs: ['colorChanged'], // alias name
//     },
//     BackgroundColorDirective,
//   ],
// })

const myServiceToken = new InjectionToken<MyserviceService>('myService', {
  factory() {
    // return new MyserviceService();
    // return inject(MyserviceService);
    // return new MyserviceService(inject(ConsoleLoggerService));
    return inject(MyserviceService);
  },
});
@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [],
  templateUrl: './widget.component.html',
  providers: [
    LoggerFactory,
    {
      provide: myServiceToken,
      useExisting: MyserviceService,
    },
  ],
  styleUrl: './widget.component.css',
})
export class WidgetComponent {
  // Understanding Angular InjectionToken with Real-World Scenarios and the injection runtime context
  // constructor(@Inject(Logger_Token) private logger: Logger) {
  //   this.logger.log('hi');
  // }
  injector = inject(Injector);
  constructor(
    private myService: MyserviceService,
    @Inject(myServiceToken) private service2: MyserviceService
  ) {
    this.myService.getId();
    this.service2.getId();
  }

  getData() {
    assertInInjectionContext(this.getData);
    runInInjectionContext(this.injector, () => {
      const consoleLogger = inject(ConsoleLoggerService);
      consoleLogger.log('aman');
    });
  }
}
