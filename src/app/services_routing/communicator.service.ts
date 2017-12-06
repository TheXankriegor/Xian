import { Injectable } from '@angular/core';
import { ClickersComponent} from '../clickers/clickers.component';
import {Subject} from 'rxjs/Subject';
import {log} from 'util';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CommunicatorService {

  updateEvent = new Subject();
  purchaseEvent = new Subject();

  upgradesUnlockedE = new BehaviorSubject(false);

  currencyE = new BehaviorSubject(0);
  clickersE = new BehaviorSubject(0);
  nextclickerCostE = new BehaviorSubject(0);

  upgradesE = new BehaviorSubject(0);
  nextUpgradeCostE = new BehaviorSubject(0);


  //worldTime
  tickCountE = new BehaviorSubject(0);
  timeScaleE = new BehaviorSubject(1);

  dynastyLeaderE = new BehaviorSubject('null');
  nextDynastyLeaderE = new BehaviorSubject('null');
  dynastyE = new BehaviorSubject(1);

  yeartotalE = new BehaviorSubject(1);
  yearE = new BehaviorSubject(1);
  monthE = new BehaviorSubject(1);
  dayE = new BehaviorSubject(1);


  constructor() { }

  updateTick() {
    this.updateEvent.next();
  }

  attemptBuy(source: string) {
    this.purchaseEvent.next(source);
  }

  toggleUpgrades(val: boolean) {
    this.upgradesUnlockedE.next(val);
  }

}
