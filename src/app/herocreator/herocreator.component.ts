import {Component, OnInit} from '@angular/core';
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
  heroCreated: boolean;

  constructor(private nam: Names, private com: CommunicatorService, private values: Values) {
    this.com.heroExistsE.subscribe(value => this.heroCreated = value);

    this.com.unlockedRacestE.subscribe(value => this.unlockedRaces = value);
    this.raceOptions = this.values.getRaceOptions(this.unlockedRaces);
    this.model = new Hero('', this.raceOptions[0], this.values.RANKS[0]);
    if (this.heroCreated) {
      this.model = <Hero>this.com.currentHeroE.getValue();
    }
  }

  ngOnInit() {

  }

  onSubmit() {
    if (this.model.valid()) {
      this.model.race = this.values.getRace(+this.model.race);
      this.model.setBirth([this.com.dayE.getValue(), this.com.monthE.getValue(), this.com.yeartotalE.getValue()]);
      this.com.currentHeroE.next(this.model);
    }

  }

}
