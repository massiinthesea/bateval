import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererQuestionsComponent } from './gerer-questions.component';

describe('GererQuestionsComponent', () => {
  let component: GererQuestionsComponent;
  let fixture: ComponentFixture<GererQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
