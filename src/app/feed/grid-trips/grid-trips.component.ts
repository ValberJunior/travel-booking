import { ITravel } from 'src/utils/interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-trips',
  templateUrl: './grid-trips.component.html',
  styleUrls: ['./grid-trips.component.scss']
})
export class GridTripsComponent implements OnInit {

  @Input() trips !: ITravel[];

  constructor() { }

  ngOnInit(): void {
  }

}
