import { TestBed } from '@angular/core/testing';

import { AppareilServiceService } from './appareil-service.service';

describe('AppareilServiceService', () => {
  let service: AppareilServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppareilServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
