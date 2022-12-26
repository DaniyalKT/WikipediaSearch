import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor() { }

  public onSearch(search: string){
    console.log('response is :' + search)
  }
}
