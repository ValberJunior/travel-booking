import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTripsComponent } from './grid-trips.component';

describe('GridTripsComponent', () => {
  let component: GridTripsComponent;
  let fixture: ComponentFixture<GridTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridTripsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
