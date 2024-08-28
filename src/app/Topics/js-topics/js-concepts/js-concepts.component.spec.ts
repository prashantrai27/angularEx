import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsConceptsComponent } from './js-concepts.component';

describe('JsConceptsComponent', () => {
  let component: JsConceptsComponent;
  let fixture: ComponentFixture<JsConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsConceptsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
