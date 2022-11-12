import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map } from 'rxjs';
import { NewUserService } from './new-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserExistsService {

  constructor(private newUserService : NewUserService) { }

  UserAlreadyExists(){
    return (control : AbstractControl) => {
      return control.valueChanges.pipe(
        map((email)=>
          this.newUserService.CheckExistingUser(email) ? {existingUser : true} : null
        ),
        first()
      )
    }
  }
}
