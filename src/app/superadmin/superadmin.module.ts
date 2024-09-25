import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SuperAdminRoutingModule } from './superadmin-routing.module';
// import { SuperadminDashboardComponent } from './superadmin-dashboard';
import { SuperadminDashboardComponent } from './superadmin-dashboard/superadmin-dashboard.component';
// import { OrderPricesComponent } from './order-prices/order-prices.component';
import { OrderPricesComponent } from './order-prices/order-prices.component';


@NgModule({
  declarations: [
    OrderPricesComponent,
    SuperadminDashboardComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SuperAdminRoutingModule
  ]
})
export class SuperadminModule { }
