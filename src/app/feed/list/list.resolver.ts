import { ITravel } from './../../../utils/interfaces';
import { UserService } from './../../authenticate/user/user.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, switchMap, take } from 'rxjs';
import { FeedService } from '../feed.service';

@Injectable({
  providedIn: 'root'
})

export class ListResolver implements Resolve<ITravel[]> {

  constructor(private feedService : FeedService,
     private userService : UserService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITravel[]> {
    return this.userService.returnUser().pipe(
      switchMap((user)=>{
        const userId = user._id ?? "";
        return this.feedService.travelList();
      }),
      take(1)
    )
  }
}
