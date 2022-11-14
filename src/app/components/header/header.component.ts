import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/authenticate/session.service';
import { UserService } from 'src/app/authenticate/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user = this.sessionService.returnSession();

  constructor(
                private sessionService : SessionService,
                private router : Router
              ) { }
  logout(){
    this.sessionService.destroySession();
    this.router.navigateByUrl('');
  }
}
