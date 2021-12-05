import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { 
    path: '', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/home/home.module').then(
      m => m.HomeModule) 
  },
  { path: 'login', 
    // canActivate: [CheckLoginGuard],
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule) },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
