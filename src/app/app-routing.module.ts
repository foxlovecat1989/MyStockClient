import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassifyComponent } from './admins/classifies/classify.component';
import { AdminStocksComponent } from './admins/stocks/admin-stocks/admin-stocks.component';
import { AdminManageUsersComponent } from './admins/users/admin-manage-users/admin-manage-users.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserStocksComponent } from './users/user-stocks/user-stocks.component';

const routes: Routes = [
  {path: '', component: CalendarComponent},
  {path: 'admins/admin/stocks', component: AdminStocksComponent},
  {path: 'admins/admin/classifies', component: ClassifyComponent},
  {path: 'admins/admin/users', component: AdminManageUsersComponent},
  {path: 'users/stocks', component: UserStocksComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
