import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPlusFiveComponent } from './counter-plus-five.component';

describe('CounterPlusFiveComponent', () => {
  let component: CounterPlusFiveComponent;
  let fixture: ComponentFixture<CounterPlusFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CounterPlusFiveComponent]
    });
    fixture = TestBed.createComponent(CounterPlusFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
