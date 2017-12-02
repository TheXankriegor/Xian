import { Injectable } from '@angular/core';
import { HeroComponent} from './hero/hero.component';
import {Subject} from 'rxjs/Subject';
import {log} from 'util';

@Injectable()
export class CommunicatorService {

  updateEvent = new Subject();
  toggleEvent = new Subject();

  constructor() { }

  updateTick() {
    this.updateEvent.next();
  }

  toggleUpgrades(val: boolean) {
    log(String(val));
    this.toggleEvent.next(val);
  }

}
