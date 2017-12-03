import { Component, OnInit } from '@angular/core';
import {CommunicatorService} from '../communicator.service';

@Component({
  selector: 'app-upgrades',
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.css']
})
export class UpgradesComponent implements OnInit {

  com: CommunicatorService;
  currency: any;
  upgradeCount: any;
  nextUpgradeCost: any;

  constructor(com: CommunicatorService) {
    this.com = com;
  }

  ngOnInit() {
    this.com.currencyE.subscribe(val => this.currency = val);
    this.com.upgradesE.subscribe(val => this.upgradeCount = val);
    this.com.nextUpgradeCostE.subscribe(val => this.nextUpgradeCost = val);
  }

  buyUpgrade() {
    this.com.purchaseEvent.next('upgrade');
  }

}
