import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalTimerComponent } from './normal-timer.component';

describe('NormalTimerComponent', () => {
  let component: NormalTimerComponent;
  let fixture: ComponentFixture<NormalTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
