import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
import { ViewPendingComponent } from './components/view-pending/view-pending.component';
import { ViewResolvedComponent } from './components/view-resolved/view-resolved.component';
import { ViewRequestsComponent } from './components/view-requests/view-requests.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: ViewEmployeesComponent },
  { path: 'requests', component: ViewRequestsComponent },
  { path: 'requests/pending', component: ViewPendingComponent },
  { path: 'requests/resolved', component: ViewResolvedComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
