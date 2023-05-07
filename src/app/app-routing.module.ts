import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamStreamComponent } from './cam-stream/cam-stream.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', // replace with the path of your parent component
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent,
  children: [
    {
      path: 'cameras', // replace with the path of your child component
      component: CamStreamComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
