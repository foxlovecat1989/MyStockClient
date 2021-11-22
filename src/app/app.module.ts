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
import { AdminStockDetailComponent } from './admins/admin/admin-stock-detail/admin-stock-detail.component';
import { AdminStocksComponent } from './admins/admin/admin-stocks/admin-stocks.component';
import { ClassifyComponent } from './admins/admin/classify/classify.component';

import { AdminStockEditComponent } from './admins/admin/admin-stock-edit/admin-stock-edit.component';
import { ClassifyDetailComponent } from './admins/admin/classify/classify-detail/classify-detail.component';
import { ClassifyEditComponent } from './admins/admin/classify/classify-edit/classify-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminManageUsersComponent } from './admins/admin/admin-manage-users/admin-manage-users.component';
import { AdminManageUserEditComponent } from './admins/admin/admin-manage-user-edit/admin-manage-user-edit.component';
import { AdminManageUserDetailComponent } from './admins/admin/admin-manage-user-detail/admin-manage-user-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
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
    PageNotFoundComponent
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
