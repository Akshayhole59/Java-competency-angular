import { TestBed } from '@angular/core/testing';

import { McqserviceService } from './mcqservice.service';

describe('McqserviceService', () => {
  let service: McqserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(McqserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
