import { IUser } from 'src/utils/interfaces';
import { DEFAULT_USERS } from './../../../utils/commons';
import { Injectable } from '@angular/core';
import { USERS } from 'src/utils/commons';
import { SessionService } from '../session.service';

const Users = USERS ? JSON.parse(USERS) : DEFAULT_USERS;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // returnUserCache(username:string){
  //   return localStorage.getItem(`${username}`) ?? '';
  // }

  // setUserCache(username: string){
  //   const user =  this.getUserDetails(username);
  //   return localStorage.setItem(`${username}`,JSON.stringify(user))
  // }

  getUserDetails(username:string){
     const filteredUser = Users.filter((user:IUser)=>{ return user.email === username });
     return filteredUser;
  }

}
