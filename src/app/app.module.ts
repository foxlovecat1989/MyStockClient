import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { UserStocksComponent } from './users/user-stocks/user-stocks.component';
import { AdminComponent } from './admins/admin/admin.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { UserComponent } from './users/user/user.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    UserStocksComponent,
    AdminComponent,
    CalendarComponent,
    UserComponent,
    PageNotfoundComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
