import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const AppRoutes: Routes = [{
    path: '',
    loadChildren: () => import('./components/hmi/hmi.module').then(m => m.HmiModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
