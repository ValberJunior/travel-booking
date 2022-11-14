import { IUser } from 'src/utils/interfaces';
import { Injectable } from '@angular/core';
import { UserService } from './user/user.service';

const KEY = 'session'

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private userService : UserService) { }

  returnSession(){
    const session = localStorage.getItem(KEY);
    console.log(session);
    return session ? JSON.parse(session) : '';
  }

  setSession(username : string){
    const user : IUser = this.userService.getUserDetails(username);
    localStorage.setItem(KEY,JSON.stringify(user));
  }


  destroySession(){
    return localStorage.removeItem(KEY);
  }

}
