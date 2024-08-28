import { TestBed } from '@angular/core/testing';

import { SecondDummyInterceptor } from './second-dummy.interceptor';

describe('SecondDummyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SecondDummyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SecondDummyInterceptor = TestBed.inject(SecondDummyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
