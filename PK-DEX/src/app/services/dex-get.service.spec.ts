import { TestBed } from '@angular/core/testing';

import { DexGetService } from './dex-get.service';

describe('DexGetService', () => {
  let service: DexGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DexGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
