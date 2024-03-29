import { IUser } from 'src/utils/interfaces';
import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<IUser>({});

  constructor(private tokenService : TokenService) {
    if(this.tokenService.hasToken()){
      this.decodeJWT();
    }
  }

  private decodeJWT(){
    const token = this.tokenService.returnToken();
    const user = jwt_decode(token) as IUser;
    this.userSubject.next(user);
  }

  returnUser(){
    return this.userSubject.asObservable();
  }

  saveToken(token:string){
    this.tokenService.saveToken(token);
    this.decodeJWT();
  }

  Logout(){
    this.tokenService.destroyToken();
    this.userSubject.next({});
  }

  isLogged(){
    return this.tokenService.hasToken();
  }

}
