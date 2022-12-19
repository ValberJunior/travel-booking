import { UserService } from './../../authenticate/user/user.service';
import { ITravel } from './../../../utils/interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { BookedTicketsService } from '../booked-tickets.service';

@Component({
  selector: 'app-list-trips',
  templateUrl: './list-trips.component.html',
  styleUrls: ['./list-trips.component.scss']
})
export class ListTripsComponent implements OnInit {

  @Input() trips !: ITravel[];

  userId: string | any = "";

  constructor(private bookedTicketsService : BookedTicketsService, private userService : UserService) { }

  ngOnInit(): void {
    this.userService.returnUser().subscribe(user => this.userId = user._id)
  }

  remove(trip: ITravel){   //to do
   this.bookedTicketsService.AddTicket(this.userId, trip);
   alert("Adicionado ao carrinho")
  }
}
