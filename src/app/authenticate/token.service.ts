import { TOKEN } from './../../utils/commons';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  returnToken(){
    return localStorage.getItem(TOKEN) ?? ';'
  }

  saveToken(token:string){
    localStorage.setItem(TOKEN, token);
  }

  destroyToken(){
    localStorage.removeItem(TOKEN);
  }

  hasToken(){
    return !! this.returnToken();
  }

}
