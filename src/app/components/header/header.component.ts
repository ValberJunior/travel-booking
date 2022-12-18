import { FeedService } from './../../feed/feed.service';
import { Router } from '@angular/router';
import { UserService } from './../../authenticate/user/user.service';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck{

  user$ = this.userService.returnUser();
  userId : any;
  travels : number | any;


  constructor(
    private userService : UserService,
    private feedService : FeedService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.userService.returnUser().subscribe(user => this.userId = user._id);
    // this.feedService.travelListUser(this.userId).subscribe(item => this.travels = item.length);
  }

  ngDoCheck(): void {
    this.feedService.travelListUser(this.userId).subscribe(item => this.travels = item.length);
  }

  logout(){
    this.userService.Logout();
    this.router.navigateByUrl('');
  }

}
