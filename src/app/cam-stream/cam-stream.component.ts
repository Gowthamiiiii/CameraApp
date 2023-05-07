import { Component } from '@angular/core';
import { Stream } from '../Stream';
import { AuthService } from '../Services/auth.service';
import { SessionService } from '../Services/session.service';

type StreamHrefs = { [id: string]: string };

@Component({
  selector: 'app-cam-stream',
  templateUrl: './cam-stream.component.html',
  styleUrls: ['./cam-stream.component.css']
})
export class CamStreamComponent {
  streams: any = [];
  cameras: any = [];
  cameraids: number[] = [];
  jwtToken: string | null = null;
  sessionId: string | null = null;
  streamUrls: string[] = [];


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
            const url = 'https://orchid.ipconfigure.com/service/streams/' + stream.id + '/frame';

            this.streamUrls.push(url); // Use dynamic key to assign value

            //console.log(this.streamUrls.length);

          }
        }
        console.log(this.streamUrls);

        const validUrls: string[] = [];
        const promises = this.streamUrls.map(url => fetch(url, { method: 'HEAD' }));
        Promise.all(promises)
          .then(responses => {
            for (let i = 0; i < responses.length; i++) {
              if (responses[i].ok) {
                validUrls.push(this.streamUrls[i]);
              }
            }
            console.log(validUrls);
          });
      },
      error => {
        console.error(error);
      }
    );

  }

}
