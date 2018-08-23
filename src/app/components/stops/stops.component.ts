import { Component, OnInit } from '@angular/core';
import { StopsFirebaseService } from '../../sevices/stops-firebase.service';


@Component({
  selector: 'app-stops',
  templateUrl: './stops.component.html',
  styleUrls: ['./stops.component.css']
})
export class StopsComponent implements OnInit {
  stops: StopsModel[];
  constructor(private stopsService: StopsFirebaseService){
    stopsService.getStopsData().subscribe(stops => {
      this.stops = stops;
    })
  }

  ngOnInit() {
  }

}
