import { Component } from '@angular/core';
import { Stream } from '../Stream';
import { AuthService } from '../Services/auth.service';
import { SessionService } from '../Services/session.service';

@Component({
  selector: 'app-cam-stream',
  templateUrl: './cam-stream.component.html',
  styleUrls: ['./cam-stream.component.css']
})
export class CamStreamComponent {

  
  streams: any = [];
  jwtToken: string | null = null;
  sessionId: string | null = null;

  constructor(private apiService: AuthService, private sessionService: SessionService) {
    this.jwtToken = sessionService.jwtToken;
    this.sessionId = sessionService.sessionId;
   }

  ngOnInit() {
    const live = 'all';

    this.jwtToken = this.sessionService.jwtToken;
    this.sessionId = this.sessionService.sessionId;

    this.apiService.getCamera().subscribe(
      streams => {
        this.streams = streams;
        console.log(this.streams); // check the streams data in console
      },
      error => {
        console.error(error);
      }
    );
  }
}
