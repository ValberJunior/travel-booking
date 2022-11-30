import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/utils/interfaces';
import { cpfValidator } from './cpf.validator';
import { NewUserService } from './new-user.service';
import { UserExistsService } from './user-exists.service';

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
    private userExistsService: UserExistsService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      name: ['', [
        Validators.required, Validators.minLength(4)
      ]],
      email: ['', [
        Validators.required, Validators.email
      ],
        [
          this.userExistsService.emailExists()
        ]
      ],
      cpf: ['', [
        Validators.required,
        cpfValidator
      ],
        [
          [
            this.userExistsService.cpfExists()
          ]
        ]
      ],
      phone: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required, Validators.minLength(6)
      ]]
    })
  }


  signup() {
      const newUser = this.newUserForm.getRawValue();
      this.newUserService.register(newUser).
      subscribe(
        ()=>{
          this.router.navigateByUrl('')
        },
        (error)=>{
          alert('Verifique os dados informados');
          console.log(error)
        }
       )
  }

}

