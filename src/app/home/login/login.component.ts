import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authenticate/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credential = {
    email: "",
    password: ""
  }

  constructor(private AuthService : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  login(){
    if (this.AuthService.authenticate(this.credential)){
      this.router.navigateByUrl('feed');
    }else{
      alert("usuário ou senha não não existem")
    }
  }

}
