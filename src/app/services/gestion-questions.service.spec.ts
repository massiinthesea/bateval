import { TestBed } from '@angular/core/testing';

import { GestionQuestionsService } from './gestion-questions.service';

describe('GestionQuestionsService', () => {
  let service: GestionQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
