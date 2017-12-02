import { Injectable } from '@angular/core';
import { HeroComponent} from './hero/hero.component';
import {Subject} from 'rxjs/Subject';
import {log} from 'util';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CommunicatorService {

  updateEvent = new Subject();
  purchaseEvent = new Subject();
  toggleEvent = new Subject();

  currencyE = new BehaviorSubject(0);
  clickersE = new BehaviorSubject(0);
  nextclickerCostE = new BehaviorSubject(0);

  constructor() { }

  updateTick() {
    this.updateEvent.next();
  }

  attemptBuy(source: string) {
    this.purchaseEvent.next(source);
  }

  toggleUpgrades(val: boolean) {
    log(String(val));
    this.toggleEvent.next(val);
  }

}
