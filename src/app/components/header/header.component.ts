import { Router } from '@angular/router';
import { UserService } from './../../authenticate/user/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user$ = this.userService.returnUser();

  constructor(
    private userService : UserService,
    private router : Router
  ) { }

  logout(){
    this.userService.Logout();
    this.router.navigateByUrl('');
  }

}
