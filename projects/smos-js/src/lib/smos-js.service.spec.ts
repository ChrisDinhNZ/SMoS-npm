import { TestBed } from '@angular/core/testing';

import { SmosJsService } from './smos-js.service';

describe('SmosJsService', () => {
  let service: SmosJsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmosJsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
