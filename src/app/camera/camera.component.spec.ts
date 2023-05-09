import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog'; // import MatDialogModule

import { CameraComponent } from './camera.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CameraComponent', () => {
  let component: CameraComponent;
  let fixture: ComponentFixture<CameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameraComponent ],
      imports: [ HttpClientTestingModule, MatDialogModule ] // add MatDialogModule
    })
    .compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
