import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';
import { NewUserService } from './new-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserExistsService {

  constructor(private newUserService : NewUserService) { }

  emailExists(){
    return (control: AbstractControl)=>{
      return control.valueChanges.pipe(
        switchMap((email)=>this.newUserService.checkExistingEmail(email)),
        map((exists)=>(exists?{emailAlreadyUsed: true}:null)),
        first()
      )
    }
  }

  cpfExists(){
    return (control: AbstractControl)=>{
      return control.valueChanges.pipe(
        switchMap((cpf)=>this.newUserService.checkExistingEmail(cpf)),
        map((exists)=>(exists?{cpfAlreadyUsed: true}:null)),
        first()
      )
    }
  }

}
