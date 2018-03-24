import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BusService {

  constructor(private http: HttpClient) { }
  private Url = 'http://localhost:3000/buses';  // URL to web api
  
   public getBuses (): Observable<any> {
     return this.http.get<any>(this.Url)
   }
}
