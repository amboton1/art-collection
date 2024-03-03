import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from './msal.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'arts',
    pathMatch: 'full'
  },
  {
    path: 'arts',
    canActivate: [MsalGuard],
    loadChildren: () => import('./art/art.module').then(m => m.ArtModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
