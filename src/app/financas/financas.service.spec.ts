import { TestBed, inject } from '@angular/core/testing';

import { FinancasService } from './financas.service';

describe('FinancasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinancasService]
    });
  });

  it('should be created', inject([FinancasService], (service: FinancasService) => {
    expect(service).toBeTruthy();
  }));
});
