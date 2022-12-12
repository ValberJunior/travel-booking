import { environment } from './../../environments/environment';
import { UserService } from './user/user.service';
import { ILogin } from './../../utils/interfaces';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';

const API = environment.apiURL;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient : HttpClient,
    private userService : UserService
  ) { }

  authenticate(credential:ILogin): Observable<HttpResponse<any>>{
    return this.httpClient.post(`${API}/user/login`,{
      email: credential.email,
      password: credential.password
    },
    { observe:'response'}
    ).pipe(
      tap((res)=>{
        const authToken = res.headers.get('authorization-token');
        console.log("Se tiver token -->>",authToken);
        if(authToken !== "" && authToken !== null) return this.userService.saveToken(authToken);
        else{
         const body : Object | any = res.body;
         const id = body._id;
         console.log("Se não tiver token, será gerado para o ID:",id)
         this.httpClient.get(`${API}/user/returnToken/${id}`).subscribe(
          (res)=>{
            const token = JSON.stringify(res);
            console.log("token gerado",token)
            return this.userService.saveToken(token);
          }
         )
        }

      })
    )
  }

}
