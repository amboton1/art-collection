import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtCollectionComponent } from '../art-collection/art-collection.component';

const routes: Routes = [
  {
    path: '',
    component: ArtCollectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtsRoutingModule { }
