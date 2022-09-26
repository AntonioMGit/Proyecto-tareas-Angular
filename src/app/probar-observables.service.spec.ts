import { TestBed } from '@angular/core/testing';

import { ProbarObservablesService } from './probar-observables.service';

describe('ProbarObservablesService', () => {
  let service: ProbarObservablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProbarObservablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
