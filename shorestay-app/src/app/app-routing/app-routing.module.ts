// filepath: c:\Users\aethe\Desktop\ShoreStay App\shorestay-app\src\app\app-routing\app-routing.module.ts
import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { SignupComponent } from '../pages/signup/signup.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { UserpageComponent } from '../pages/userpage/userpage.component'; // Correctly import UserpageComponent

export const routes: Routes = [
  { path: '', component: WelcomeComponent }, // Default route for WelcomeComponent
  { path: 'login', component: LoginComponent }, // Route for LoginComponent
  { path: 'signup', component: SignupComponent }, // Route for SignupComponent
  { path: 'userpage', component: UserpageComponent }, // Route for Userpage
];