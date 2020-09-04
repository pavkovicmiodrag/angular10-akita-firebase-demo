import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/core/auth.guard';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    data: {
      breadcrumb: 'Dashboard',
    },
    canLoad: [AuthGuard],
  },
  {
    path: 'diagnoses',
    loadChildren: () =>
      import('./modules/diagnoses/diagnoses.module').then(
        (m) => m.DiagnosesModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // providers: [AuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
