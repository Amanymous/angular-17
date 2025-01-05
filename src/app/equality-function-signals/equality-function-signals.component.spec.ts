import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqualityFunctionSignalsComponent } from './equality-function-signals.component';

describe('EqualityFunctionSignalsComponent', () => {
  let component: EqualityFunctionSignalsComponent;
  let fixture: ComponentFixture<EqualityFunctionSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EqualityFunctionSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EqualityFunctionSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
