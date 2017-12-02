import { Component, OnInit } from '@angular/core';
import { CommunicatorService} from '../communicator.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  currency: number;
  nextClickerCost: number;
  clickers: number;

  constructor(com: CommunicatorService) {
    com.updateEvent.subscribe(val => this.updateTick());
  }

  ngOnInit() {
    this.currency = 0;
    this.nextClickerCost = 10;
    this.clickers = 1;
  }

  buyClicker() {
    if (this.currency >= this.nextClickerCost) {
      this.clickers += 1;
      this.currency -= this.nextClickerCost;
      this.nextClickerCost += 1;
    }
  }

  updateTick() {
    this.currency += (this.clickers * 0.1);
  }
}
