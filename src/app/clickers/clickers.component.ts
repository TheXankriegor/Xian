import { Component, OnInit } from '@angular/core';
import { CommunicatorService} from '../services_routing/communicator.service';

@Component({
  selector: 'app-hero',
  templateUrl: './clickers.component.html',
  styleUrls: ['./clickers.component.css']
})
export class ClickersComponent implements OnInit {
  com: CommunicatorService;

  currency: any;
  nextClickerCost: any;
  clickers: any;

  progress: any;

  constructor(com: CommunicatorService) {
    this.com = com;
  }

  ngOnInit() {
    this.com.currencyE.subscribe(val => this.currencyTick(val));
    this.com.clickersE.subscribe(val => this.clickers = val);
    this.com.nextclickerCostE.subscribe(val => this.nextClickerCost = val);
  }

  buyClicker() {
    this.com.purchaseEvent.next('test');
  }

  currencyTick(val: any) {
    this.currency = val;
    this.progress = Math.min(100, (this.currency / this.nextClickerCost) * 100);
  }
}
