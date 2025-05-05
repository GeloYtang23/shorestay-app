import { Routes } from '@angular/router';
import { UserpageComponent } from './pages/userpage/userpage.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'userpage', component: UserpageComponent }
];