import { TestBed } from '@angular/core/testing';

import { SimpleShareDataService } from '../services/simple-share-data.service';

describe('SimpleShareDataService', () => {
  let service: SimpleShareDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleShareDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
