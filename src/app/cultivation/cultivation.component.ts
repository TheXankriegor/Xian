import { Component, OnInit } from '@angular/core';
import {CommunicatorService} from '../services_routing/communicator.service';
import {Hero} from '../logic/hero';
import {Names} from '../content/names';
import {Values} from '../content/values';
import {Rank} from '../logic/rank';

@Component({
  selector: 'app-cultivation',
  templateUrl: './cultivation.component.html',
  styleUrls: ['./cultivation.component.css']
})
export class CultivationComponent implements OnInit {

  heroExists: boolean;

  heroage: number[];
  herobirth: number[];

  currentHero: Hero;

  currentlyCultivating: boolean;
  cultivationButtonText = 'Cultivate';
  cultivationBarText = '';
  cultivationProgress: number;
  currentRank: Rank;

  constructor(private com: CommunicatorService, private nam: Names, private val: Values) {
    this.com.heroExistsE.subscribe(value => this.heroExists = value);
    this.com.heroActionE.subscribe(value => this.onHeroActionChange(value));


    if (this.heroExists) {
      this.com.currentHeroAgeE.subscribe(value => this.heroage = value );
      this.herobirth = (<Hero>this.com.currentHeroE.getValue()).birth;

      this.com.currentHeroRankE.subscribe(value => this.onRankChange(value));
      this.com.currentHeroRankProgressE.subscribe(value => this.updateProgress(value));


    }
  }

  ngOnInit() {
  }

  onCultivate() {
    if (!this.currentlyCultivating) {
      this.com.heroActionE.next(1);
    } else {
      this.com.heroActionE.next(0);
    }

  }

  onHeroActionChange(ch: number) {
    if (ch === 1) {
      this.currentlyCultivating = true;
      this.cultivationButtonText = 'Stop Cultivating';
    } else {
      this.currentlyCultivating = false;
      this.cultivationButtonText = 'Cultivate';
    }
  }

  updateProgress(value: number) {
    this.cultivationProgress = (value / this.currentRank.toughness) * 100;
    if (this.val.RANKS[this.currentRank.id + 1]) {
      this.cultivationBarText = 'Progress towards ' + this.val.RANKS[this.currentRank.id + 1].name + ': ' + (this.cultivationProgress).toFixed(2) + '%';
    } else {
      this.cultivationBarText = 'Solidifying cultivation: ' + (this.cultivationProgress).toFixed(2) + '%';
    }

  }

  onRankChange(value: Rank) {
    this.currentRank = value;
  }
}
