import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( public http: HttpClient) { }

  public loginUserFromRemote(user :User) :Observable<HttpResponse<any>>{
    return this.http.post<any>('http://localhost:8091/login', user,
    { observe: 'response' });
  }

  public registerUserFromRemote(user :User) :Observable<any>{
    return this.http.post<any>("http://localhost:8091/registeruser",user)
}
}
