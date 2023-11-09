import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPlusOneComponent } from './counter-plus-one.component';

describe('CounterPlusOneComponent', () => {
  let component: CounterPlusOneComponent;
  let fixture: ComponentFixture<CounterPlusOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CounterPlusOneComponent]
    });
    fixture = TestBed.createComponent(CounterPlusOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
