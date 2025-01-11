import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetterInput1Component } from './getter-input-1.component';

describe('GetterInput1Component', () => {
  let component: GetterInput1Component;
  let fixture: ComponentFixture<GetterInput1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetterInput1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetterInput1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
