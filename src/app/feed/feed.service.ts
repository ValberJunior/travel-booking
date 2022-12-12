import { environment } from './../../environments/environment';
import { TokenService } from 'src/app/authenticate/token.service';
import { ITravel } from './../../utils/interfaces';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(
    private httpClient : HttpClient,
    private tokenService : TokenService
  ) {   }

  // user area - my travels
  travelListUser(idUser:string):Observable<ITravel[] | any>{
    const token = this.tokenService.returnToken();
    const headers = new HttpHeaders().append('x-access-token',token);
    return this.httpClient.get(`${API}/user/mytravels/${idUser}`, {
      headers
    });
  }

  // all trips
   travelList():Observable<ITravel[]>{
    const token = this.tokenService.returnToken();
    const headers = new HttpHeaders().append('x-access-token',token);
     return this.httpClient.get<ITravel[]>(`${API}/trips`, {
      headers
     })
   }
}
