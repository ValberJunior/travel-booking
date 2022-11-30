import { ILogin } from './../../utils/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL = "https://api-travel-booking.vercel.app/user/login";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient : HttpClient
  ) { }

  authenticate(credential:ILogin): Observable<any>{
    return this.httpClient.post(URL,{
      email: credential.email,
      password: credential.password
    }
    )
  }

}
