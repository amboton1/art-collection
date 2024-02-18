import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArtworksCollection } from './models/art-types.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtworksService {
  headers = new HttpHeaders({
    'X-Xapp-Token': environment.TOKEN,
    'Content-Type': 'application/json'
  });

  constructor(private httpClient: HttpClient) { }

  getArtworks() {
    return this.httpClient.get<ArtworksCollection>(environment.ARTWORKS_API_URL, { headers: this.headers });
  }
}
