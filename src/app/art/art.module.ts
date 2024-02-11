import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtCollectionComponent } from '../art-collection/art-collection.component';
import { ArtsRoutingModule } from './art-routing.module';

@NgModule({
  declarations: [ArtCollectionComponent],
  imports: [
    CommonModule,
    ArtsRoutingModule
  ]
})
export class ArtModule { }
