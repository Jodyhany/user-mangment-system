import { TestBed } from '@angular/core/testing';

import { GloablInterceptor } from './gloabl.interceptor';

describe('GloablInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GloablInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: GloablInterceptor = TestBed.inject(GloablInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
