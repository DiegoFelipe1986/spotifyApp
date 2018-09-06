import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spoty service listo');
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDEc6VL1CjFq8AdqKJDASDQCGlFWccK9gFT-k3PaVogvlrgWbTpqsdY9EAmdQvtA8dEE4ydDNydtug02HI'
    });
    
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtista(termino:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDEc6VL1CjFq8AdqKJDASDQCGlFWccK9gFT-k3PaVogvlrgWbTpqsdY9EAmdQvtA8dEE4ydDNydtug02HI'
    });
    
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers});
  }

}
