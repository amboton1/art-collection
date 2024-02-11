import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'arts',
    pathMatch: 'full'
  },
  {
    path: 'arts',
    loadChildren: () => import('./art/art.module').then(m => m.ArtModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
