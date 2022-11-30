import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUser } from 'src/utils/interfaces';
import { NewUserService } from './new-user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  newUserForm!: FormGroup ;

  constructor(
               private formBuilder : FormBuilder,
               private newUserService : NewUserService
             ) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      name:[''],
      email:[''],
      cpf:[''],
      phone:[''],
      password:['']
    })
  }


  signup(){
    const newUser = this.newUserForm.getRawValue() as IUser;
    console.log(newUser);
  }

}
