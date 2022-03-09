import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
import { ViewRequestsComponent } from './components/view-requests/view-requests.component';
import { ViewPendingComponent } from './components/view-pending/view-pending.component';
import { ViewResolvedComponent } from './components/view-resolved/view-resolved.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewEmployeesComponent,
    ViewRequestsComponent,
    ViewPendingComponent,
    ViewResolvedComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
