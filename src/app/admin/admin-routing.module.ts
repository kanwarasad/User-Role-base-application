import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from '../auth/auth.guard';
import { Role } from '../enums/role.enum';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path: 'orders',
    component: OrderComponent, 
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin, Role.SuperAdmin] }  // Only accessible by admin and superadmin
  },
  {
    path: 'dashboard', // Assuming you want a separate route for the Admin Dashboard
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin, Role.SuperAdmin] } // Only accessible by admin and superadmin
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
