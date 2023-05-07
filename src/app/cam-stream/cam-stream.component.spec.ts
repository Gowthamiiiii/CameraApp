import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamStreamComponent } from './cam-stream.component';

describe('CamStreamComponent', () => {
  let component: CamStreamComponent;
  let fixture: ComponentFixture<CamStreamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CamStreamComponent]
    });
    fixture = TestBed.createComponent(CamStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
