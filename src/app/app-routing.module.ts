import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RequestTravelComponent } from './pages/request-travel/request-travel.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { TravelRecordComponent } from './pages/travel-record/travel-record.component';
import { TravelStateComponent } from './pages/travel-state/travel-state.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user-home', component: UserHomeComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'travel-request', component: RequestTravelComponent },
  { path: 'travel-state', component: TravelStateComponent },
  { path: 'travel-record', component: TravelRecordComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
