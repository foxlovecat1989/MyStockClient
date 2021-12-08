import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminActivitiesComponent } from './admins/activities/admin-activities/admin-activities.component';
import { ClassifyComponent } from './admins/classifies/classify.component';
import { AdminStocksComponent } from './admins/stocks/admin-stocks/admin-stocks.component';
import { AdminManageUsersComponent } from './admins/users/admin-manage-users/admin-manage-users.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthRouteGuardService } from './services/auth-route-guard.service';
import { UserStocksComponent } from './users/user-stocks/user-stocks.component';

const routes: Routes = [
  {path: '', component: CalendarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admins/stocks', component: AdminStocksComponent, canActivate : [AuthRouteGuardService]},
  {path: 'admins/classifies', component: ClassifyComponent, canActivate : [AuthRouteGuardService]},
  {path: 'admins/users', component: AdminManageUsersComponent, canActivate : [AuthRouteGuardService]},
  {path: 'admins/activities', component: AdminActivitiesComponent, canActivate : [AuthRouteGuardService]},
  {path: 'users/stocks', component: UserStocksComponent, canActivate : [AuthRouteGuardService]},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
