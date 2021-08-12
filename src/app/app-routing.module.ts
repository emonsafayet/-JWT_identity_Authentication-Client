import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [

  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"user-management",component:UserManagementComponent,canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }