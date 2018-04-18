import { TestBed, inject } from '@angular/core/testing';

import { BackEndInterceptorService } from './back-end-interceptor.service';

describe('BackEndService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackEndInterceptorService]
    });
  });

  it('should be created', inject([BackEndInterceptorService], (service: BackEndInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
