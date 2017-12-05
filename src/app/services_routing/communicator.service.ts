import { Injectable } from '@angular/core';
import { HeroComponent} from '../hero/hero.component';
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

  ageE = new BehaviorSubject(0);
  dynastyE = new BehaviorSubject('null');

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
