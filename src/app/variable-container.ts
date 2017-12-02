import {CommunicatorService} from './communicator.service';

export class VariableContainer {

  com: CommunicatorService;
  testClickers = 1;
  testCurrency = 0;
  testNextClickerCost = 10;

  constructor(com: CommunicatorService) {
    this.com = com;
    com.updateEvent.subscribe(val => this.updateTick());
    com.purchaseEvent.subscribe(val => this.purchase(val));
    com.clickersE.next(this.testClickers);
    com.nextclickerCostE.next(this.testNextClickerCost);

  }


  updateTick() {
    this.testCurrency += (this.testClickers * 0.1);
    this.com.currencyE.next(this.testCurrency);
  }

  purchase(s: any) {
    try {
      const source = <string> s;
      if (this.testCurrency >= this.testNextClickerCost) {
        this.testClickers += 1;
        this.testCurrency -= this.testNextClickerCost;
        this.testNextClickerCost += 1;
        this.com.clickersE.next(this.testClickers);
        this.com.nextclickerCostE.next(this.testNextClickerCost);
      }

    } catch (e) {}
  }
}
