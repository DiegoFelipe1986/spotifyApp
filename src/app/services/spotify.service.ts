import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  map } from 'rxjs/operators';
import { MapOperator } from '../../../node_modules/rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spoty service listo');
  }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCYaVaV5BTthH0aGS8dteWC7ZWCDXln4_eXjiaITqatuMqxB53Ihb2SAGnuPENg09XCDBWzZyeDO5SQB0M'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
        .pipe(map(data=> data['albums'].items ));
  }

  getArtista(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data=>data['artists'].items));
  }

}
