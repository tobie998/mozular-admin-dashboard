import { TestBed } from '@angular/core/testing';

import { BaseThemeService } from './base-theme.service';

describe('BaseThemeService', () => {
  let service: BaseThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
