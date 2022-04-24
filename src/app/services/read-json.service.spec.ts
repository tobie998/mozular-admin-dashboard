import { TestBed } from '@angular/core/testing';

import { ReadJsonService } from './read-json.service';

describe('ReadJsonService', () => {
  let service: ReadJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
