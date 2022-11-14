import { DEFAULT_USERS, USERS } from './../../utils/commons';
import { Injectable } from '@angular/core';
import { CACHE } from 'src/utils/commons';
import { StatusSectionEnum } from 'src/utils/enum';
import { ILogin, IUser } from 'src/utils/interfaces';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

private Users : IUser[]  = USERS ? JSON.parse(USERS) : DEFAULT_USERS;

StatusSession : string = CACHE ? CACHE : StatusSectionEnum.inactive;

constructor() { }

authenticate(params:ILogin) : boolean{
  let match = false;
  console.log(this.Users);
  this.Users.forEach(
    item => {
      if (item.email === params.email && item.password === params.password){
        match = true;
      }
    })
    return match;
}

sessionActive(){
  localStorage.setItem("Session", StatusSectionEnum.active);
  this.StatusSession = StatusSectionEnum.active;
}

logout(){
  localStorage.setItem("Session", StatusSectionEnum.inactive);
  this.StatusSession = StatusSectionEnum.inactive;
}

}
