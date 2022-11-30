import { Observable } from 'rxjs';
import { IUser } from './../../../utils/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL="https://api-travel-booking.vercel.app/user"

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private httpClient: HttpClient) { }

  register(newUser:IUser): Observable<any>{
    return this.httpClient.post(`${URL}/register`,{
      name: newUser.name,
      email: newUser.email,
      cpf: newUser.cpf,
      phone: newUser.phone,
      password: newUser.password
    });
  }

  checkExistingEmail(email:string){
    return this.httpClient.post(`${URL}/emailexists`,{
      email
    })
  }

  checkExistingCPF(cpf:string){
    return this.httpClient.post(`${URL}/cpfexists`,{
      cpf
    })
  }
}
