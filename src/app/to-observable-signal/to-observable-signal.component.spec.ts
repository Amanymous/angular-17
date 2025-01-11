import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToObservableSignalComponent } from './to-observable-signal.component';

describe('ToObservableSignalComponent', () => {
  let component: ToObservableSignalComponent;
  let fixture: ComponentFixture<ToObservableSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToObservableSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToObservableSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
