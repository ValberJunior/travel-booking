import { environment } from './../../../environments/environment';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITravel } from 'src/utils/interfaces';
import { TokenService } from 'src/app/authenticate/token.service';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private httpClient : HttpClient,
    private tokenService : TokenService
  ) { }

  userReservations(id:string):Observable<any>{
    return this.httpClient.get<any>(`${API}/users/${id}`).pipe(
      tap((res)=>{
        const bookedTickets = res.bookedTickets;
        return bookedTickets;
      })
    )
  }
}
