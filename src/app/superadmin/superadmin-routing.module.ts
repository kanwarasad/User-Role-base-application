import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperadminDashboardComponent } from './superadmin-dashboard/superadmin-dashboard.component';
import { AuthGuard } from '../auth/auth.guard';
// import { Role } from '../auth/role.enum';
import { Role } from '../enums/role.enum';

const routes: Routes = [
  {
    path: '',
    component: SuperadminDashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.SuperAdmin] }  // Only accessible by superadmin
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
