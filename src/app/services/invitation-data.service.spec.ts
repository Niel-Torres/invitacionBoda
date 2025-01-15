import { TestBed } from '@angular/core/testing';

import { InvitationDataService } from './invitation-data.service';

describe('InvitationDataServiceService', () => {
  let service: InvitationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvitationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
