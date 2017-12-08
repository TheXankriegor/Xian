import {CommunicatorService} from '../services_routing/communicator.service';
import {CookieModule, CookieService} from 'ngx-cookie';
import {Names} from '../content/names';
import {WorldTime} from './worldtime';
import {Hero} from './hero';

export class VariableContainer {

  //put unlocks etc here

  time: WorldTime;
  currentHero: Hero;
  unlockedRaces: number[] = [0, 1, 2];



  tick: 0;
  age: 0;
  dynasty: string;

  testClickers = 1;
  testCurrency = 0;
  testNextClickerCost = 10;

  testUpgrade = 0;
  testNextUpgradeCost = 20;

  upgradesUnlocked: any;

  constructor(private com: CommunicatorService, private _cookieService: CookieService, private nam: Names) {
    this.time = new WorldTime(com, nam);

    this.com.unlockedRacestE.next(this.unlockedRaces);

    this.com.currentHeroE.subscribe(value => this.currentHero = <Hero>value);

    this.com.updateEvent.subscribe(val => this.updateTick());
    this.com.purchaseEvent.subscribe(val => this.purchase(val));
    this.com.clickersE.next(this.testClickers);
    this.com.nextclickerCostE.next(this.testNextClickerCost);
    this.com.upgradesE.next(this.testUpgrade);
    this.com.nextUpgradeCostE.next(this.testNextUpgradeCost);

    this.com.upgradesUnlockedE.subscribe(val => this.upgradesUnlocked = val);

    this.age = 0;
    this.dynasty = this.nam.getRandomName();

    //   const sav = +this._cookieService.get('currency');
    // if (!isNaN(sav)) {
    //this.testCurrency = sav;
    //}

  }


  updateTick() {
    this.time.advanceTime();
    if (this.currentHero) {
      this.currentHero.totalage = this.time.getAgeDifference(this.currentHero.birth);
      this.com.currentHeroAgeE.next(this.currentHero.totalage);
    }


    this.tick += 1;
    this.testCurrency += (this.testClickers * (0.1 * (this.testUpgrade + 1)));
    this.com.currencyE.next(this.testCurrency);
    this._cookieService.put('currency', '' + this.testCurrency);

    this.age += 1;
    if (this.age >= 1000) {
      this.age = 0;
      this.dynasty = this.nam.getRandomName();
    }


  }

  purchase(s: any) {
    try {
      const source = <string> s;
      if (source === 'test') {
        if (this.testCurrency >= this.testNextClickerCost) {
          this.testClickers += 1;
          this.testCurrency -= this.testNextClickerCost;
          this.testNextClickerCost += 1;
          this.com.clickersE.next(this.testClickers);
          this.com.nextclickerCostE.next(this.testNextClickerCost);
        }
      } else if (source === 'upgrade') {
        if (this.testCurrency >= this.testNextUpgradeCost) {
          this.testUpgrade += 1;
          this.testCurrency -= this.testNextUpgradeCost;
          this.testNextUpgradeCost += 10;
          this.com.upgradesE.next(this.testUpgrade);
          this.com.nextUpgradeCostE.next(this.testNextUpgradeCost);
        }
      }


    } catch (e) {
    }
  }
}
