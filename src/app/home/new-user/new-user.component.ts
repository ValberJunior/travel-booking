import { NewUserService } from './new-user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/utils/interfaces';
import { cpfValidator } from './cpf.validator';
import { UserExistsService } from './user-exists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newUserService: NewUserService,
    private userExistsService : UserExistsService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this, this.newUserForm = this.formBuilder.group({
      fullName: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100)
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
      ],
      [
        this.userExistsService.userAlreadyExists()
      ]
      ],
      phone: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(14)
      ]
      ],
      cpf: ['', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(14),
        cpfValidator
      ]
      ],
      password: ['', [
        Validators.required, Validators.minLength(6)
      ]]
    })
  }

  register() {
    if (this.newUserForm.valid){
    const newUser = this.newUserForm.getRawValue() as IUser;
      if(this.newUserService.createUser(newUser)){
        this.router.navigateByUrl('');
      }else{
        console.log("Ocorreu um erro")
      }
    }
  }
}
