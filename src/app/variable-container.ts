import {CommunicatorService} from './communicator.service';
import {CookieModule, CookieService} from 'ngx-cookie';

export class VariableContainer {

  tick: 0;

  testClickers = 1;
  testCurrency = 0;
  testNextClickerCost = 10;

  testUpgrade = 0;
  testNextUpgradeCost = 20;

  constructor(private com: CommunicatorService, private _cookieService: CookieService ) {
    this.com.updateEvent.subscribe(val => this.updateTick());
    this.com.purchaseEvent.subscribe(val => this.purchase(val));
    this.com.clickersE.next(this.testClickers);
    this.com.nextclickerCostE.next(this.testNextClickerCost);
    this.com.upgradesE.next(this.testUpgrade);
    this.com.nextUpgradeCostE.next(this.testNextUpgradeCost);

 //   const sav = +this._cookieService.get('currency');
   // if (!isNaN(sav)) {
      //this.testCurrency = sav;
    //}

  }


  updateTick() {
    this.tick += 1;
    this.testCurrency += (this.testClickers * (0.1 * (this.testUpgrade + 1)) );
    this.com.currencyE.next(this.testCurrency);
    this._cookieService.put('currency', '' + this.testCurrency);

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


    } catch (e) {}
  }
}
