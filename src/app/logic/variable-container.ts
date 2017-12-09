import {CommunicatorService} from '../services_routing/communicator.service';
import {CookieModule, CookieService} from 'ngx-cookie';
import {Names} from '../content/names';
import {WorldTime} from './worldtime';
import {Hero} from './hero';
import {Values} from '../content/values';

export class VariableContainer {

  //put unlocks etc here
  unlockedCultivation = false;
  unlockedRaces: number[] = [0, 1, 2];

  //world values
  time: WorldTime;
  maxTimeScale = 50;
  heroCount = 0;

  //runtime values
  currentHero: Hero;
  heroExists = false;
  //0 = none, 1 = cultivating
  heroAction: number;


  tick: 0;
  age: 0;
  dynasty: string;

  testClickers = 1;
  testCurrency = 0;
  testNextClickerCost = 10;

  testUpgrade = 0;
  testNextUpgradeCost = 20;

  upgradesUnlocked: any;

  constructor(private com: CommunicatorService, private _cookieService: CookieService, private nam: Names, private val: Values) {

    this.time = new WorldTime(com, nam);

    this.com.unlockedCultivationE.next(this.unlockedCultivation);

    this.com.unlockedRacestE.next(this.unlockedRaces);
    this.com.maxTimeScaleE.next(this.maxTimeScale);

    this.com.currentHeroE.subscribe(value => this.createHero(<Hero>value));
    this.heroAction = 0;
    this.com.heroActionE.subscribe(value => this.heroAction = value);

    this.com.updateEvent.subscribe(value => this.updateTick());
    this.com.purchaseEvent.subscribe(value => this.purchase(value));
    this.com.clickersE.next(this.testClickers);
    this.com.nextclickerCostE.next(this.testNextClickerCost);
    this.com.upgradesE.next(this.testUpgrade);
    this.com.nextUpgradeCostE.next(this.testNextUpgradeCost);

    this.com.upgradesUnlockedE.subscribe(value => this.upgradesUnlocked = value);

    this.age = 0;
    this.dynasty = this.nam.getRandomName();

    //   const sav = +this._cookieService.get('currency');
    // if (!isNaN(sav)) {
    //this.testCurrency = sav;
    //}

  }


  updateTick() {
    const passedTime = this.time.advanceTime();
    if (this.currentHero) {
      this.currentHero.totalage = this.time.getAgeDifference(this.currentHero.birth);
      this.com.currentHeroAgeE.next(this.currentHero.totalage);

      if (this.heroAction === 1) {
        this.currentHero.cultivate(passedTime, this.val);
        this.com.currentHeroRankE.next(this.currentHero.rank);
        this.com.currentHeroRankProgressE.next(this.currentHero.rankprogress);
      }

      if (this.currentHero.deathage[2] <= this.currentHero.totalage[2]) {
        if (this.currentHero.deathage[1] <= this.currentHero.totalage[1]) {
          if (this.currentHero.deathage[1] < this.currentHero.totalage[1] || this.currentHero.deathage[0] <= this.currentHero.totalage[0]) {

            console.log('HERO DIED');
            this.com.currentHeroE.next(null);
          }
        }
      }
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

  createHero(newHero: Hero) {
    if (this.heroCount === 0) {
      this.unlockedCultivation = true;
      this.com.unlockedCultivationE.next(this.unlockedCultivation);
    }
    if (newHero !== null) {
      this.currentHero = newHero;
      this.currentHero.updateLifeExpectancy();
      this.heroExists = true;
      this.com.heroExistsE.next(this.heroExists);
      this.heroCount += 1;

      this.com.currentHeroRankE.next(this.currentHero.rank);
      this.com.currentHeroRankProgressE.next(this.currentHero.rankprogress);
    } else {
      this.currentHero = null;
      this.heroExists = false;
      this.com.heroExistsE.next(this.heroExists);
    }

  }
}
