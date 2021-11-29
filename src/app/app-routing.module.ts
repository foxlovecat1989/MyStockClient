import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminActivitiesComponent } from './admins/activities/admin-activities/admin-activities.component';
import { ClassifyComponent } from './admins/classifies/classify.component';
import { AdminStocksComponent } from './admins/stocks/admin-stocks/admin-stocks.component';
import { AdminManageUsersComponent } from './admins/users/admin-manage-users/admin-manage-users.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserStocksComponent } from './users/user-stocks/user-stocks.component';

const routes: Routes = [
  {path: '', component: CalendarComponent},
  {path: 'admins/stocks', component: AdminStocksComponent},
  {path: 'admins/classifies', component: ClassifyComponent},
  {path: 'admins/users', component: AdminManageUsersComponent},
  {path: 'admins/activities', component: AdminActivitiesComponent},
  {path: 'users/stocks', component: UserStocksComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
