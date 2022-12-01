import { ILogin } from './../../../utils/interfaces';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authenticate/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credential: ILogin = {
    email: "",
    password: ""
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.authenticate(this.credential).
      subscribe({
        complete: () => {
          this.router.navigateByUrl('/feed')
        },
        error: (error) => {
          alert('Usuário ou senha inválidos');
          console.log(error.message)
        }
      })
  }
}
