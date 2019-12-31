import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { LoginComponent } from './auth/login/login.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RoutingModule } from './routing.module';
import { SetNewPassComponent } from './auth/set-new-pass/set-new-pass.component';
import { UsersTableComponent } from './user-management/users-table/users-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    WelcomeComponent,
    SetNewPassComponent,
    UsersTableComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
