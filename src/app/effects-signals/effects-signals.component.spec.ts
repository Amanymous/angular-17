import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectsSignalsComponent } from './effects-signals.component';

describe('EffectsSignalsComponent', () => {
  let component: EffectsSignalsComponent;
  let fixture: ComponentFixture<EffectsSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectsSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EffectsSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
