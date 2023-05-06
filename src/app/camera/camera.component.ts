import { Component, OnInit } from '@angular/core';
import { Camera } from '../Camera';
import { CameraServiceService } from '../Services/camera-service.service';
import { MatDialog } from '@angular/material/dialog';
import { CameraDialogComponent } from '../camera-dialog/camera-dialog.component';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  cameras: Camera[] = [];

  constructor(private cameraService: CameraServiceService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.cameraService.getCameras().subscribe(cameras => {
      this.cameras = cameras;
    });
  }


}

