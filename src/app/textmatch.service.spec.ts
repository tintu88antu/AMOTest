import { TestBed } from '@angular/core/testing';

import { TextmatchService } from './textmatch.service';

describe('TextmatchService', () => {
  let service: TextmatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextmatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
