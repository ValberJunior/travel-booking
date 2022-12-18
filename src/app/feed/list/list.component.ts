import { Observable, switchMap } from 'rxjs';
import { ListService } from './list.service';
import { FeedService } from './../feed.service';
import { UserService } from './../../authenticate/user/user.service';
import { ITravel } from 'src/utils/interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  trips! : ITravel[];
  constructor(
    private activatedRouter : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(param => {
      this.trips = this.activatedRouter.snapshot.data['list'];
    })
  }

}
