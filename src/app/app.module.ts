import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { UserStocksComponent } from './users/user-stocks/user-stocks.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { UserComponent } from './users/user/user.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminStockDetailComponent } from './admins/stocks/admin-stocks/admin-stock-detail/admin-stock-detail.component';
import { ClassifyComponent } from './admins/classifies/classify.component';
import { ClassifyDetailComponent } from './admins/classifies/classify-detail/classify-detail.component';
import { ClassifyEditComponent } from './admins/classifies/classify-edit/classify-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminStockEditComponent } from './admins/stocks/admin-stocks/admin-stock-edit/admin-stock-edit.component';
import { AdminStocksComponent } from './admins/stocks/admin-stocks/admin-stocks.component';
import { AdminManageUserDetailComponent } from './admins/users/admin-manage-users/admin-manage-user-detail/admin-manage-user-detail.component';
import { AdminManageUserEditComponent } from './admins/users/admin-manage-users/admin-manage-user-edit/admin-manage-user-edit.component';
import { AdminManageUsersComponent } from './admins/users/admin-manage-users/admin-manage-users.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminActivitiesComponent } from './admins/activities/admin-activities/admin-activities.component';
import { AdminActivitiesEditComponent } from './admins/activities/admin-activities/admin-activities-edit/admin-activities-edit.component';
import { AdminActivtitiesDetailComponent } from './admins/activities/admin-activities/admin-activtities-detail/admin-activtities-detail.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    UserStocksComponent,
    CalendarComponent,
    UserComponent,
    NavBarComponent,
    AdminStockDetailComponent,
    AdminStocksComponent,
    ClassifyComponent,
    ClassifyEditComponent,
    AdminStockEditComponent,
    ClassifyDetailComponent,
    AdminManageUsersComponent,
    AdminManageUserEditComponent,
    AdminManageUserDetailComponent,
    PageNotFoundComponent,
    AdminActivitiesComponent,
    AdminActivitiesEditComponent,
    AdminActivtitiesDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
