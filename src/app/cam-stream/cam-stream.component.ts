import { Component, OnInit, OnDestroy } from '@angular/core';
import { Stream } from '../Stream';
import { AuthService } from '../Services/auth.service';
import { SessionService } from '../Services/session.service';

type StreamHrefs = { [id: string]: string };

@Component({
  selector: 'app-cam-stream',
  templateUrl: './cam-stream.component.html',
  styleUrls: ['./cam-stream.component.css']
})
export class CamStreamComponent implements OnInit, OnDestroy {
  streams: any = [];
  cameras: any = [];
  cameraids: number[] = [];
  jwtToken: string | null = null;
  sessionId: string | null = null;
  streamUrls: string[] = [];
  streamFrames: any = [];
  imageToShow: any;
  isImageLoading: any;
  streamUpdateInterval: any;

  constructor(private apiService: AuthService, private sessionService: SessionService) {
    this.jwtToken = sessionService.jwtToken;
    this.sessionId = sessionService.sessionId;
  }

  ngOnInit() {
    const live = 'all';

    this.jwtToken = this.sessionService.jwtToken;
    this.sessionId = this.sessionService.sessionId;

    this.apiService.getCamera().subscribe(
      cameras => {
        this.cameras = cameras;
        console.log(this.cameras);
        const cameraIds = this.cameras.cameras.map((camera: { id: any; }) => camera.id);
        console.log(cameraIds);
        this.cameraids = cameraIds;
      },
      error => {
        console.error(error);
      }
    );

    this.streamUpdateInterval = setInterval(() => {
      console.log('Refreshing streams...');
      this.getStreams();
    }, 60000); // 1 minute in milliseconds

    this.getStreams();
  }

  ngOnDestroy() {
    clearInterval(this.streamUpdateInterval);
  }

  getStreams() {
    this.streamUrls = []; // clear the streamUrls array

    this.apiService.getStreams().subscribe(
      streams => {
        this.streams = streams;
        //console.log(this.streams);
        for (const stream of this.streams.streams) {
          //console.log(this.cameraids);
          //console.log(stream.camera.id);
          if (this.cameraids.includes(stream.camera.id)) {
            //console.log("hii")
            //console.log(stream.id);
            // const url = 'https://orchid.ipconfigure.com/service/streams/' + stream.id + '/frame';

            // this.streamUrls.push(url); // Use dynamic key to assign value

        
            //console.log(this.streamUrls.length);
            this.apiService.getFrames(stream.id).subscribe(
              response => {
                console.log(response);
                this.createImageFromBlob(response);
                this.isImageLoading = false;
                console.log(this.imageToShow);
                if (typeof this.imageToShow !== 'undefined') {
                this.streamUrls.push(this.imageToShow);
                }
              },
              error => {
                this.isImageLoading = false;
              }
            );

          }
        }
        console.log(this.streamUrls);
      },
      error => {
      }
    );
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
