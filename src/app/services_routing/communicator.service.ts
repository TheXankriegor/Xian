import { Injectable } from '@angular/core';
import { ClickersComponent} from '../clickers/clickers.component';
import {Subject} from 'rxjs/Subject';
import {log} from 'util';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Hero} from '../logic/hero';

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


  //variableContainer
  unlockedRacestE = new BehaviorSubject([1]);
  maxTimeScaleE = new BehaviorSubject(1);

  currentHeroE = new BehaviorSubject(null);
  currentHeroRankE = new BehaviorSubject(null);
  currentHeroRankProgressE = new BehaviorSubject(0);

  heroExistsE = new BehaviorSubject(false);
  heroActionE = new BehaviorSubject(0);
  currentHeroAgeE = new BehaviorSubject([0, 0, 0]);

  //unlockedTabs
  unlockedCultivationE = new BehaviorSubject(false);

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
