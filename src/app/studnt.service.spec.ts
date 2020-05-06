import { TestBed } from '@angular/core/testing';

import { StudntService } from './studnt.service';

describe('StudntService', () => {
  let service: StudntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
