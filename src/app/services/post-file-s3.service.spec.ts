import { TestBed } from '@angular/core/testing';

import { PostFileS3Service } from './post-file-s3.service';

describe('PostFileS3Service', () => {
  let service: PostFileS3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostFileS3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
