import {CommunicatorService} from '../services_routing/communicator.service';
import {Names} from '../content/names';

export class WorldTime {
  tickCount = 0;
  timeScale = 1;

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
    this.addTime(this.timeScale);

    this.com.tickCountE.next(this.tickCount);
    this.com.dynastyLeaderE.next(this.dynastyLeader);
    this.com.nextDynastyLeaderE.next(this.nextDynastyLeader);
    this.com.dynastyE.next(this.dynasty);
    this.com.yeartotalE.next(this.yeartotal);
    this.com.yearE.next(this.year);
    this.com.monthE.next(this.month);
    this.com.dayE.next(this.day);
  }

  addTime(days: number) {
    let remain = days;
    while (remain > 0) {
      if (remain > (this.monthlength[this.month - 1] - this.day)) {
        remain -= this.monthlength[this.month - 1] - this.day;
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
}
