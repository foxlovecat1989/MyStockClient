import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admins/admin/admin.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { UserComponent } from './users/user/user.component';

const routes: Routes = [
  {path: '', component: CalendarComponent},
  {path: 'admins/admin', component: AdminComponent},
  {path: 'users', component: UserComponent},
  {path: '', component: AdminComponent},
  {path: '404', component: PageNotfoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
