import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of Camera objects', () => {
    const expectedCameras = [    { id: '1', name: 'Camera 1' },    { id: '2', name: 'Camera 2' },    { id: '3', name: 'Camera 3' },  ];
    spyOn(service, 'getCamera').and.returnValue(of(expectedCameras));
  
    service.getCamera().subscribe(cameras => {
      expect(cameras).toEqual(expectedCameras);
    });
  });

  it('should return an array of Stream objects', () => {
    const expectedStreams = [    { id: '1', name: 'Stream 1' },    { id: '2', name: 'Stream 2' },    { id: '3', name: 'Stream 3' },  ];
    spyOn(service, 'getStreams').and.returnValue(of(expectedStreams));
  
    service.getStreams().subscribe(streams => {
      expect(streams).toEqual(expectedStreams);
    });
  });

  it('should return a Blob object', () => {
    const streamId = '12345';
    const expectedBlob = new Blob(['test data'], { type: 'image/jpeg' });
    spyOn(service, 'getFrames').and.returnValue(of(expectedBlob));
  
    service.getFrames(streamId).subscribe(blob => {
      expect(blob).toEqual(expectedBlob);
    });
  });
  
  
});
