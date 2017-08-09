import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SessionService } from '../services/session.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HomeComponent } from './home/home.component';
import { routes } from './routes';
import { FileSelectDirective } from "ng2-file-upload";
import { RouterModule,Routes } from '@angular/router';
import { CenterListComponent } from './center-list/center-list.component';
import { CenterDetailComponent } from './center-detail/center-detail.component';
import { AddCenterComponent } from './add-center/add-center.component';
import { CenterService } from '../services/center.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {CenterActivationService } from '../services/center-activation.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    HomeComponent,
    CenterListComponent,
    FileSelectDirective,
    CenterDetailComponent,
    AddCenterComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, CenterService, CenterActivationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
