import { RouterModule } from '@angular/router';
import { CardModule } from './../components/card/card.module';
import { FooterModule } from './../components/footer/footer.module';
import { HeaderModule } from './../components/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { ListComponent } from './list/list.component';
import { GridTripsComponent } from './grid-trips/grid-trips.component';


@NgModule({
  declarations: [
    ListComponent,
    GridTripsComponent,
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
