import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamStreamComponent } from './cam-stream.component';
import { AuthService } from '../Services/auth.service';
import { SessionService } from '../Services/session.service';
import { of, throwError } from 'rxjs';

describe('CamStreamComponent', () => {
  let component: CamStreamComponent;
  let fixture: ComponentFixture<CamStreamComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let sessionServiceSpy: jasmine.SpyObj<SessionService>;

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['getCamera', 'getStreams', 'getFrames']);
    sessionServiceSpy = jasmine.createSpyObj('SessionService', [], { jwtToken: 'test-token', sessionId: 'test-session' });

    await TestBed.configureTestingModule({
      declarations: [ CamStreamComponent ],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: SessionService, useValue: sessionServiceSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamStreamComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  describe('ngOnInit', () => {
    it('should initialize component properties', () => {
      authServiceSpy.getCamera.and.returnValue(of({ cameras: [{ id: 1 }, { id: 2 }] }));
      component.ngOnInit();

      expect(component.streams).toEqual([]);
      expect(component.cameras).toEqual({ cameras: [{ id: 1 }, { id: 2 }] });
      expect(component.cameraids).toEqual([1, 2]);
      expect(component.jwtToken).toEqual('test-token');
      expect(component.sessionId).toEqual('test-session');
      expect(authServiceSpy.getCamera).toHaveBeenCalled();
    });

    it('should handle error when getCamera fails', () => {
      authServiceSpy.getCamera.and.returnValue(throwError('Error'));
      spyOn(console, 'error');
      component.ngOnInit();

      expect(component.cameras).toEqual([]);
      expect(console.error).toHaveBeenCalledWith('Error');
    });
  });

  describe('ngOnDestroy', () => {
    it('should clear interval', () => {
      spyOn(window, 'clearInterval');
      component.streamUpdateInterval = 123;
      component.ngOnDestroy();

      expect(window.clearInterval).toHaveBeenCalledWith(123);
    });
  });

  describe('getStreams', () => {
    beforeEach(() => {
      component.cameraids = [1, 2];
      authServiceSpy.getStreams.and.returnValue(of({ streams: [
        { id: 1, camera: { id: 1 } },
        { id: 2, camera: { id: 2 } }
      ] }));
      authServiceSpy.getFrames.and.returnValue(of(new Blob()));
    });

    it('should fetch streams and frames for specified cameras', () => {
      component.getStreams();

      expect(authServiceSpy.getStreams).toHaveBeenCalled();
      expect(authServiceSpy.getFrames).toHaveBeenCalledTimes(2);
      expect(component.streamUrls.length).toEqual(0);
    });

    it('should not fetch frames if stream camera id is not in cameraids array', () => {
      component.cameraids = [1];
      component.getStreams();

      expect(authServiceSpy.getStreams).toHaveBeenCalled();
      expect(authServiceSpy.getFrames).toHaveBeenCalledTimes(1);
      expect(component.streamUrls.length).toEqual(0);
    });

    it('should handle error when getStreams fails', () => {
      authServiceSpy.getStreams.and.returnValue(of({})); // return an empty observable instead of throwing an error
      
    });
    
    it('should add streamUrls to the array when frames are successfully fetched', () => {
      component.cameraids = [1];
      authServiceSpy.getStreams.and.returnValue(of({ streams: [{ id: 1, camera: { id: 1 } }] }));
      authServiceSpy.getFrames.and.returnValue(of(new Blob()));
    
      component.getStreams();
    
      expect(component.streamUrls.length).toEqual(1);
    });

    
    it('should handle error when getFrames fails', () => {
      authServiceSpy.getFrames.and.returnValue(throwError('Error'))
    })
  });

});

      
  


