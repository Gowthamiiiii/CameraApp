import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';
import { CameraServiceService } from './Services/camera-service.service';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthService } from './Services/auth.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CamStreamComponent } from './cam-stream/cam-stream.component';
import { SessionService } from './Services/session.service';


@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    LoginComponent,
    CamStreamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [CameraServiceService, AuthService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
