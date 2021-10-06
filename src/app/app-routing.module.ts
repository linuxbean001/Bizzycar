import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageDriverComponent } from './manage-driver/manage-driver.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';

const routes: Routes = ([
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'manage-employee',
    component: ManageEmployeeComponent
  },
  {
    path: 'manage-driver',
    component: ManageDriverComponent
  }
]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
