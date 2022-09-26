import { TestBed } from '@angular/core/testing';

import { PortalViajesService } from './portal-viajes.service';

describe('PortalViajesService', () => {
  let service: PortalViajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortalViajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
