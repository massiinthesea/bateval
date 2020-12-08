import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveQuestionModalComponent } from './remove-question-modal.component';

describe('RemoveQuestionModalComponent', () => {
  let component: RemoveQuestionModalComponent;
  let fixture: ComponentFixture<RemoveQuestionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveQuestionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveQuestionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
