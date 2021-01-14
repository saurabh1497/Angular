import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiEndPoint = 'http://localhost:3900/api'
  private url = this.apiEndPoint + '/auth';

  constructor(private http:HttpClient) { }

  public login(userCredentials){
    //make a post request
      return this.http.post(this.url, userCredentials, {responseType:"text"});
  }

  public isLoggedIn():boolean{
    const token = localStorage.getItem('token')
    if(!token)
      return false;

    return true;
  }

  
}