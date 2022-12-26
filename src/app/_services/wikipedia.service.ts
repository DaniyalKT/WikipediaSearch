import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  public onSearch(search: string) {
   return this.http.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action:'query',
        format:'json',
        list:'search',
        srsearch: search,
        utf8:'1',
        origin:'*'
      }
    })
  }
}
