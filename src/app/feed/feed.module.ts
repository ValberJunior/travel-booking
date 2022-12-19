import { RouterModule } from '@angular/router';
import { CardModule } from './../components/card/card.module';
import { FooterModule } from './../components/footer/footer.module';
import { HeaderModule } from './../components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { ListComponent } from './list/list.component';
import { GridTripsComponent } from './grid-trips/grid-trips.component';
import { UserAreaComponent } from './user-area/user-area.component';
import { ListTripsComponent } from './list-trips/list-trips.component';


@NgModule({
  declarations: [
    ListComponent,
    GridTripsComponent,
    UserAreaComponent,
    ListTripsComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    HeaderModule,
    FooterModule,
    CardModule
  ]
})
export class FeedModule { }
