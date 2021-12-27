import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { RequestTravelComponent } from './request-travel/request-travel.component';
import { TravelRecordComponent } from './travel-record/travel-record.component';
import { TravelStateComponent } from './travel-state/travel-state.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    RequestTravelComponent,
    TravelRecordComponent,
    TravelStateComponent,
    UserHomeComponent,
  ],
  imports: [CommonModule, MaterialModule],
})
export class PagesModule {}
