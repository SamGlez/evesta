import { Routes } from "@angular/router";
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { CenterListComponent } from './center-list/center-list.component';
import { CenterDetailComponent } from './center-detail/center-detail.component';
import { AddCenterComponent } from './add-center/add-center.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CenterActivationService} from '../services/center-activation.service'


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'signup',  component: SignupFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'home', component: HomeComponent ,
    children: [
      { path: '', component: CenterListComponent }
    ]
  },
  { path: 'profile', component: UserProfileComponent },
  { path: 'list/add', component: AddCenterComponent },
  { path: 'list', component: CenterListComponent },
  {
    path: 'home/:id', component: CenterDetailComponent,
    canActivate: [CenterActivationService]
  },
  { path: '**', redirectTo: '' }

];
