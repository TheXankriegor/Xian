import { Component, OnInit } from '@angular/core';
import {CommunicatorService} from '../services_routing/communicator.service';
import {Names} from '../content/names';


@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {
  day: any;
  month: any;
  year: any;

  months: string[] = this.nam.getMonths();
  dynastyLeader: any;
  constructor(private com: CommunicatorService, private nam: Names) {

  }

  ngOnInit() {
    this.com.dayE.subscribe(value => this.day = value);
    this.com.monthE.subscribe(value => this.month = value);
    this.com.yearE.subscribe(value => this.year = value);

    this.months = this.nam.getMonths();
    this.com.dynastyLeaderE.subscribe(value => this.dynastyLeader = value);
  }

}
