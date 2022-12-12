import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { IUser } from './../../../utils/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private httpClient: HttpClient) { }

  register(newUser:IUser): Observable<any>{
    return this.httpClient.post(`${API}/user/register`,{
      name: newUser.name,
      email: newUser.email,
      cpf: newUser.cpf,
      phone: newUser.phone,
      password: newUser.password
    });
  }

  checkExistingEmail(email:string){
    return this.httpClient.post(`${API}/user/emailexists`,{
      email
    })
  }

  checkExistingCPF(cpf:string){
    return this.httpClient.post(`${API}/user/cpfexists`,{
      cpf
    })
  }
}
