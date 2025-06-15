import { TestBed } from '@angular/core/testing';

import { AddPropertyDataService } from './add-property-data.service';

describe('AddPropertyDataService', () => {
  let service: AddPropertyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPropertyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
