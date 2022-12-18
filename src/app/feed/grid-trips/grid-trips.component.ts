import { UserService } from './../../authenticate/user/user.service';
import { ITravel, IUser } from 'src/utils/interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { BookedTicketsService } from '../booked-tickets.service';
import { map, tap, switchMap } from 'rxjs';

@Component({
  selector: 'app-grid-trips',
  templateUrl: './grid-trips.component.html',
  styleUrls: ['./grid-trips.component.scss']
})
export class GridTripsComponent implements OnInit {

  @Input() trips !: ITravel[];

  userId: string | any = "";

  constructor(private bookedTicketsService : BookedTicketsService, private userService : UserService) { }

  ngOnInit(): void {
    this.userService.returnUser().subscribe(user => this.userId = user._id)
  }

  add(trip: ITravel){
   this.bookedTicketsService.AddTicket(this.userId, trip);
   alert("Adicionado ao carrinho")
  }

}
