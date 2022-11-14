import { StatusSectionEnum } from './../../utils/enum';
import { Injectable } from '@angular/core';

const KEY = 'session'

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  returnSession(){
    return localStorage.getItem(KEY) ?? '';
  }

  ActiveSession(){
    return localStorage.setItem(KEY,StatusSectionEnum.active)
  }

  InactiveSession(){
    return localStorage.setItem(KEY,StatusSectionEnum.inactive)
  }

}
