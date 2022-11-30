import { IUser } from './../../../utils/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL="https://api-travel-booking.vercel.app/user/register"

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private httpClient: HttpClient) { }

  register(newUser:IUser){
    return this.httpClient.post(URL,{
      newUser
    });
  }
}
