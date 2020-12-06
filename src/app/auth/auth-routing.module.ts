import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SignupGuard } from './../core/guards/signup.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'signin', component: SigninComponent },
      {
        path: 'signup',
        canDeactivate: [SignupGuard],
        component: SignupComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
