import { TestBed } from '@angular/core/testing';

import { AddGedgetsService } from './add-gedgets.service';

describe('AddGedgetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddGedgetsService = TestBed.get(AddGedgetsService);
    expect(service).toBeTruthy();
  });
});
