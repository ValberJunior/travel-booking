import { UserService } from './user/user.service';
import { ILogin } from './../../utils/interfaces';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient : HttpClient,
    private userService : UserService
  ) { }

  authenticate(credential:ILogin): Observable<HttpResponse<any>>{
    return this.httpClient.post('https://api-travel-booking.vercel.app/user/login',{
      email: credential.email,
      password: credential.password
    },
    { observe:'response'}
    ).pipe(
      tap((res)=>{
        const authToken = res.headers.get('authorization-token');
        if(authToken !== "" && authToken !== null) return this.userService.saveToken(authToken);
        else{
         const body : Object | any = res.body;
         const id = body._id;
         this.httpClient.get(`https://api-travel-booking.vercel.app/user/returnToken/${id}`).subscribe(
          (res)=>{
            const token = JSON.stringify(res);
            return this.userService.saveToken(token);
          }
         )
        }

      })
    )
  }

}
