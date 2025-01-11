import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsInteropSignalComponent } from './rxjs-interop-signal.component';

describe('RxjsInteropSignalComponent', () => {
  let component: RxjsInteropSignalComponent;
  let fixture: ComponentFixture<RxjsInteropSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsInteropSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsInteropSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
