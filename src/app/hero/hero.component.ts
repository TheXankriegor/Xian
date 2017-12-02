import { Component, OnInit } from '@angular/core';
import { CommunicatorService} from '../communicator.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  com: CommunicatorService;

  currency: any;
  nextClickerCost: any;
  clickers: any;

  constructor(com: CommunicatorService) {
    this.com = com;
    com.updateEvent.subscribe(val => this.updateTick());
  }

  ngOnInit() {
    this.com.currencyE.subscribe(val => this.currency = val);
    this.com.clickersE.subscribe(val => this.clickers = val);
    this.com.nextclickerCostE.subscribe(val => this.nextClickerCost = val);
  }

  buyClicker() {
    this.com.purchaseEvent.next('test');
  }

  updateTick() {

  }
}