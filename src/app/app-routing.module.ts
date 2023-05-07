import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamStreamComponent } from './cam-stream/cam-stream.component';

const routes: Routes = [
  { path: 'cameras', component: CamStreamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
