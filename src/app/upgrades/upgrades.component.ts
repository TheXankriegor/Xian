import { Component, OnInit } from '@angular/core';
import {CommunicatorService} from '../services_routing/communicator.service';

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

  progress: any;

  constructor(com: CommunicatorService) {
    this.com = com;
  }

  ngOnInit() {
    this.com.currencyE.subscribe(val => this.onTick(val));
    this.com.upgradesE.subscribe(val => this.upgradeCount = val);
    this.com.nextUpgradeCostE.subscribe(val => this.nextUpgradeCost = val);
  }

  buyUpgrade() {
    this.com.purchaseEvent.next('upgrade');
  }

  onTick(val: any) {
    val = <number> val;
    this.currency = val;
    this.progress = Math.min(100, (this.currency / this.nextUpgradeCost) * 100);
  }

}
