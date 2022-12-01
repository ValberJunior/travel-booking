import { IUser } from 'src/utils/interfaces';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<IUser>({});

  constructor(
    private tokenService : TokenService
  ) {
    if(this.tokenService.hasToken()){
      this.decodeJWT();
    }
   }

  private decodeJWT(){
    const token = this.tokenService.returnToken();
    const user = jwtDecode(token) as IUser;
    this.userSubject.next(user);
  }

  returnUser(){
    return this.userSubject.asObservable();
  }

  saveToken(token:string){
    this.tokenService.saveToken(token);
    this.decodeJWT();
  }

  logout(){
    this.tokenService.destroyToken();
    this.userSubject.next({});
  }

  isLogged(){
    return this.tokenService.hasToken();
  }

}
