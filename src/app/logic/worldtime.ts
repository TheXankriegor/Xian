import {CommunicatorService} from '../services_routing/communicator.service';
import {Names} from '../content/names';

export class WorldTime {
  tickCount = 0;
  timeScale = 1;

  smallTick = 0;

  dynastyLeader: string;
  nextDynastyLeader: string;
  dynasty = 1;

  yeartotal = 1;
  year = 1;
  month = 1;
  day = 1;

  monthlength: number[] = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
  ];

  constructor(private com: CommunicatorService, private nam: Names) {

    this.day = Math.floor((Math.random() * 28) + 1);
    this.month = Math.floor((Math.random() * 12) + 1);
    this.year = Math.floor((Math.random() * 999) + 1);

    this.dynastyLeader = this.nam.getRandomName();
    this.com.tickCountE.next(this.tickCount);
    this.com.timeScaleE.next(this.timeScale);
    this.com.timeScaleE.subscribe(value => this.changeTimeScale(value));
    this.com.dynastyLeaderE.next(this.dynastyLeader);
    this.com.nextDynastyLeaderE.next(this.nextDynastyLeader);
    this.com.dynastyE.next(this.dynasty);
    this.com.yeartotalE.next(this.yeartotal);
    this.com.yearE.next(this.year);
    this.com.monthE.next(this.month);
    this.com.dayE.next(this.day);

  }


  advanceTime() {
    this.tickCount += 1;
    const passed = [0, 0, 0];

    if (this.timeScale < 5) {
      this.smallTick += 1;
      if (this.smallTick > 20 - this.timeScale) {
        this.addDays(1);
        passed[0] = 1;
        this.smallTick = 0;
      }
    } else if (this.timeScale >= 5) {
      this.addDays(this.timeScale - 4);
    }

    //this.addDays(this.timeScale);

    this.com.tickCountE.next(this.tickCount);
    this.com.dynastyLeaderE.next(this.dynastyLeader);
    this.com.nextDynastyLeaderE.next(this.nextDynastyLeader);
    this.com.dynastyE.next(this.dynasty);
    this.com.yeartotalE.next(this.yeartotal);
    this.com.yearE.next(this.year);
    this.com.monthE.next(this.month);
    this.com.dayE.next(this.day);
  }

  addDays(days: number) {
    let remain = days;
    while (remain > 0) {
      if (remain > (this.monthlength[this.month - 1] - this.day)) {
        remain -= this.monthlength[this.month - 1] - this.day + 1;
        this.day = 1;
        this.month += 1;
        if (this.month > 12) {
          this.month = 1;
          this.year += 1;
          this.yeartotal += 1;
        }
      } else {
        this.day += remain;
        remain = 0;
      }
    }
    if (this.year >= 1000) {
      this.year = 1;
      this.dynasty += 1;
      if (this.nextDynastyLeader !== '') {
        this.dynastyLeader = this.nextDynastyLeader;
        this.nextDynastyLeader = '';
      } else {
        this.dynastyLeader = this.nam.getRandomName();
      }
    }
  }

  changeTimeScale(value: any) {
    this.timeScale = +value;
  }

  getAgeDifference(age: number[]): number[] {
    const diff = [0, 0, 0];
    if (this.day < age[0]) {
      diff[0] = this.monthlength[age[1]] - age[0] + this.day;
      diff[1] -= 1;
    } else if (this.day >= age[0]) {
      diff[0] = this.day - age[0];
    }
    if (this.month < age[1]) {
      diff[1] += 12 - age[1] + this.month;
      diff[2] -= 1;
    } else if (this.month >= age[1]) {

      diff[1] += this.month - age[1];
    }
    diff[2] += this.yeartotal - age[2];

    if (diff[1] === -1) {
      diff[1] = 12;
      diff[2] -= 1;
    }
    return diff;
  }
}
