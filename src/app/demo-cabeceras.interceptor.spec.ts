import { TestBed } from '@angular/core/testing';

import { DemoCabecerasInterceptor } from './demo-cabeceras.interceptor';

describe('DemoCabecerasInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DemoCabecerasInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DemoCabecerasInterceptor = TestBed.inject(DemoCabecerasInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
