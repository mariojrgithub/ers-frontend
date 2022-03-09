import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
import { ViewPendingManagerComponent } from './components/manager/view-pending-manager/view-pending-manager.component';
import { ViewResolvedManagerComponent } from './components/manager/view-resolved-manager/view-resolved-manager.component'; 
import { ViewRequestsManagerComponent } from './components/manager/view-requests-manager/view-requests-manager.component';
import { ViewRequestsAssociateComponent } from './components/associate/view-requests-associate/view-requests-associate.component';
import { ViewPendingAssociateComponent } from './components/associate/view-pending-associate/view-pending-associate.component';
import { ViewResolvedAssociateComponent } from './components/associate/view-resolved-associate/view-resolved-associate.component';

import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'manager/all-employees', component: ViewEmployeesComponent },
  { path: 'manager/requests', component: ViewRequestsManagerComponent },
  { path: 'manager/requests/pending', component: ViewPendingManagerComponent },
  { path: 'manager/requests/resolved', component: ViewResolvedManagerComponent },

  { path: 'associate/requests', component: ViewRequestsAssociateComponent },
  { path: 'associate/requests/pending', component: ViewPendingAssociateComponent },
  { path: 'associate/requests/resolved', component: ViewResolvedAssociateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
