import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandshakeService {

  constructor(private http: HttpClient) { }

  getMessage(url: string): Observable<string>{
    return this.http.get<string>(url);
  }
}
