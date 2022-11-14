import { SessionService } from './session.service';
import { DEFAULT_USERS, USERS } from './../../utils/commons';
import { Injectable } from '@angular/core';
import { CACHE } from 'src/utils/commons';
import { ILogin, IUser } from 'src/utils/interfaces';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

private Users : IUser[]  = USERS ? JSON.parse(USERS) : DEFAULT_USERS;

constructor(private sessionService : SessionService) { }

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

logout(){
  this.sessionService.destroySession();
}

}
