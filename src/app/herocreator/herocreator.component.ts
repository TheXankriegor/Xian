import { Component, OnInit } from '@angular/core';
import {Names} from '../content/names';
import {CommunicatorService} from '../services_routing/communicator.service';
import {Race} from '../logic/race';
import {Values} from '../content/values';
import {Hero} from '../logic/hero';

@Component({
  selector: 'app-herocreator',
  templateUrl: './herocreator.component.html',
  styleUrls: ['./herocreator.component.css']
})
export class HerocreatorComponent implements OnInit {

  name: string;

  selectedrace: Race;
  raceOptions: Race[];
  unlockedRaces: number[];

  model: Hero;
  heroCreated = false;

  constructor(private nam: Names, private com: CommunicatorService, private values: Values) {
    this.com.unlockedRacestE.subscribe(value => this.unlockedRaces = value);
    this.raceOptions = this.values.getRaceOptions(this.unlockedRaces);
    this.model = new Hero('', this.raceOptions[0]);
  }

  ngOnInit() {

  }

  onSubmit() {
    this.heroCreated = true;
    this.model.birth = [this.com.dayE.getValue(), this.com.monthE.getValue(), this.com.yeartotalE.getValue()];
    this.com.currentHeroE.next(this.model);
  }

}
