import { TestBed } from '@angular/core/testing';

import { ApiAjaxService } from './api-ajax.service';

describe('ApiAjaxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiAjaxService = TestBed.get(ApiAjaxService);
    expect(service).toBeTruthy();
  });
});
