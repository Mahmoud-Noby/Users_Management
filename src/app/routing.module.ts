import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { SetNewPassComponent } from './auth/set-new-pass/set-new-pass.component';
import { UsersTableComponent } from './user-management/users-table/users-table.component';

const routes: Routes =[
  {path: '', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgetpassword', component: ForgetPasswordComponent},
  {path: 'setpass', component: SetNewPassComponent},
  {path: 'user-mangement', component: UsersTableComponent}

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule { }
