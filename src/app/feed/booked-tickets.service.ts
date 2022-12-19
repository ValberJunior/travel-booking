import { UserService } from './../authenticate/user/user.service';
import { ITravel } from './../../utils/interfaces';
import { TokenService } from './../authenticate/token.service';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class BookedTicketsService {

  bookedTickets : any;

  constructor(
                private httpClient : HttpClient,
                private tokenService : TokenService,
                private userService : UserService
                 ) { }

  // Add Ticket
  AddTicket(id:string, trip:ITravel):Observable<ITravel | any>{
    const token = this.tokenService.returnToken();
    const headers = new HttpHeaders().append('x-access-token',token);
    const newReserve = {
      newReserve : trip
    }
    return this.httpClient.patch(`${API}/user/reserve/${id}`, newReserve);
  }
  // Remove Ticket
  removeTicket(id:string):Observable<ITravel | any>{
    const token = this.tokenService.returnToken();
    const headers = new HttpHeaders().append('x-access-token',token);
    return this.httpClient.patch(`${API}/user/cancelReserve/${id}`, {
      headers
    });
  }

  // lis all trips

}
