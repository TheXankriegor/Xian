import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CommunicatorService} from '../services_routing/communicator.service';
import {Names} from '../content/names';

@Component({
  selector: 'app-agedetail',
  templateUrl: './agedetail.component.html',
  styleUrls: ['./agedetail.component.css']
})
export class AgedetailComponent implements OnInit {
  @ViewChild('timescaleslider') timescaleslider: ElementRef;

  day: any;
  month: any;
  year: any;

  timeScale: any;

  months: string[] = this.nam.getMonths();
  dynastyLeader: any;

  constructor(private com: CommunicatorService, private nam: Names) {  }

  ngOnInit() {
    this.com.dayE.subscribe(value => this.day = value);
    this.com.monthE.subscribe(value => this.month = value);
    this.com.yearE.subscribe(value => this.year = value);

    this.com.timeScaleE.subscribe(value => this.timeScale = value);
    this.months = this.nam.getMonths();
    this.com.dynastyLeaderE.subscribe(value => this.dynastyLeader = value);
  }


  onTimeScaleChange() {
    this.com.timeScaleE.next(this.timescaleslider.nativeElement.value);
  }

}
