import {Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RtComponent} from "./rt/rt.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProfileComponent} from "./profile/profile.component";

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: RtComponent,
    children: [
      {path: 'profile', component: ProfileComponent},
      {path: '', component: DashboardComponent},
      {
        path: 'awesome',
        loadChildren: () => import('./awesome-product/awesome-product.module').then((file) => file.AwesomeProductModule)
      }
    ]
  },

];
