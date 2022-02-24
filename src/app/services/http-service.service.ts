import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient ) {}

  getUserPost(){
    const opt = {'app-id':'6112dc7c3f812e0d9b6679dd'};
    return this.http.get('https://dummyapi.io/data/v1/post?limit=10',{headers:opt});
  }
}
