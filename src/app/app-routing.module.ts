import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminStocksComponent } from './admins/admin/admin-stocks/admin-stocks.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { UserStocksComponent } from './users/user-stocks/user-stocks.component';
import { UserComponent } from './users/user/user.component';

const routes: Routes = [
  {path: '', component: CalendarComponent},
  {path: 'admins/admin/stocks', component: AdminStocksComponent},
  {path: 'users/stocks', component: UserStocksComponent},
  {path: '404', component: PageNotfoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
