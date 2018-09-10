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
      'Authorization': 'Bearer BQDKxMNJl8QkU1-XBeqbv54Ov_JG5hj8l7hY3GwfDEZoMTd2hxr1PV62hVOy4d_jNPw0UtI4zuX5p5Skjbc'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
        .pipe(map(data=> data['albums'].items ));
  }

  getArtistas(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data=>data['artists'].items));
  }

  getArtista(id:string){
    return this.getQuery(`artist/${id}`)
      .pipe(map(data=>data['artists'].items));
  }

}
