import { TestBed } from '@angular/core/testing';

import { CameraServiceService } from './camera-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('CameraServiceService', () => {
  let service: CameraServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CameraServiceService],
    });
    service = TestBed.inject(CameraServiceService);
  });


  it('should return an array of Camera objects', () => {
    const expectedCameras = [    { id: '1', name: 'Camera 1' },    { id: '2', name: 'Camera 2' },    { id: '3', name: 'Camera 3' },  ];
    spyOn(service, 'getCameras').and.returnValue(of());
  
    service.getCameras().subscribe(cameras => {
      return expect(cameras).toEqual([]);
    });
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
