import { UserService } from './user/user.service';
import { ILogin } from './../../utils/interfaces';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

const URL = "https://api-travel-booking.vercel.app/user/login";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient : HttpClient,
    private userService : UserService
  ) { }

  authenticate(credential:ILogin): Observable<HttpResponse<any>>{
    return this.httpClient.post(URL,{
      email: credential.email,
      password: credential.password
    },
    { observe:'response'}
    ).pipe(
      tap((res)=>{
        const authToken = res.headers.get('authorization-token') ?? "";
        this.userService.saveToken(authToken);
      })
    )
  }

}
