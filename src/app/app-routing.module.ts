import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { OrderPricesComponent } from './order-prices/order-prices.component';
import { OrderPricesComponent } from './superadmin/order-prices/order-prices.component';

const routes: Routes = [
  { path: 'order-prices', component: OrderPricesComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'superadmin', loadChildren: () => import('./superadmin/superadmin.module').then(m => m.SuperadminModule) },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
