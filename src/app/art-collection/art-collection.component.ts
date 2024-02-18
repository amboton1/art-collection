import { Component, OnInit } from '@angular/core';
import { ArtworksService } from '../art/artworks.service';
import { Observable } from 'rxjs';
import { ArtworksCollection } from '../art/models/art-types.model';

@Component({
  selector: 'app-art-collection',
  templateUrl: './art-collection.component.html',
  styleUrls: ['./art-collection.component.scss']
})
export class ArtCollectionComponent implements OnInit {
  artworks$: Observable<ArtworksCollection> | null = null;
  constructor(private artworksService: ArtworksService) { }

  ngOnInit(): void {
    this.artworks$ = this.artworksService.getArtworks();

    this.artworks$.subscribe(item => console.log(item))
  }

}
