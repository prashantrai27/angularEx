import { TestBed } from '@angular/core/testing';

import { FirstDummyInterceptor } from './first-dummy.interceptor';

describe('FirstDummyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FirstDummyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FirstDummyInterceptor = TestBed.inject(FirstDummyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
