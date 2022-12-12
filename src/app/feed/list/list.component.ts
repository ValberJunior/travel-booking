import { ListService } from './list.service';
import { FeedService } from './../feed.service';
import { UserService } from './../../authenticate/user/user.service';
import { ITravel } from 'src/utils/interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  trips! : ITravel[];

  constructor(
   private userService : UserService,
   private feedService : FeedService,
   private listService : ListService
  ) { }

  ngOnInit(): void {
    this.userService.returnUser().subscribe((user)=>{
      const idUser = user.id ?? '';
      console.log(idUser);
      this.feedService.travelList().subscribe(
        (trips)=> {
          console.log(trips);
          this.trips = trips;
        }
        )
    })
  }

}
