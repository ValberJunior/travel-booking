import { Injectable } from '@angular/core';

const TOKEN = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

 returnToken(){
  return localStorage.getItem(TOKEN) ?? '';
 }

saveToken(token: string){
  localStorage.setItem(TOKEN,token);
}

destroyToken(){
  localStorage.removeItem(TOKEN);
}

hasToken(){
  return !!this.returnToken();
}

}
