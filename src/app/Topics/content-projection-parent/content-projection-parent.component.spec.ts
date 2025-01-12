import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionParentComponent } from './content-projection-parent.component';

describe('ContentProjectionParentComponent', () => {
  let component: ContentProjectionParentComponent;
  let fixture: ComponentFixture<ContentProjectionParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProjectionParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentProjectionParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
