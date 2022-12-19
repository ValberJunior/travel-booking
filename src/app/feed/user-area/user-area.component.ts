import { UserService } from './../../authenticate/user/user.service';
import { FeedService } from './../feed.service';
import { ITravel } from './../../../utils/interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.scss']
})
export class UserAreaComponent implements OnInit {

  trips! : ITravel[] ;
  user : any;

  constructor(
    private feedService : FeedService,
    private userService : UserService
  ) { }

  ngOnInit(): void {
    this.userService.returnUser().subscribe(user => this.user = user);
    this.userAreaList();
  }

  userAreaList(){
    this.feedService.travelListUser(this.user._id).subscribe(tripsData => this.trips = tripsData);
  }

}
