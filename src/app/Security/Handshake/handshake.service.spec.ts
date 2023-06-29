import { TestBed } from '@angular/core/testing';

import { HandshakeService } from './handshake.service';

describe('HandshakeService', () => {
  let service: HandshakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandshakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
