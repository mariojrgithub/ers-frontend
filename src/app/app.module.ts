import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
// import { ViewPendingComponent } from './components/view-pending/view-pending.component';
import { LoginComponent } from './components/login/login.component';
import { ViewRequestsManagerComponent } from './components/manager/view-requests-manager/view-requests-manager.component';
import { ViewPendingManagerComponent } from './components/manager/view-pending-manager/view-pending-manager.component';
import { ViewResolvedManagerComponent } from './components/manager/view-resolved-manager/view-resolved-manager.component';
import { ViewRequestsAssociateComponent } from './components/associate/view-requests-associate/view-requests-associate.component';
import { ViewPendingAssociateComponent } from './components/associate/view-pending-associate/view-pending-associate.component';
import { ViewResolvedAssociateComponent } from './components/associate/view-resolved-associate/view-resolved-associate.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewEmployeesComponent,
    ViewRequestsManagerComponent,
    // ViewPendingComponent,
    LoginComponent,
    ViewPendingManagerComponent,
    ViewResolvedManagerComponent,
    ViewRequestsAssociateComponent,
    ViewPendingAssociateComponent,
    ViewResolvedAssociateComponent
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
