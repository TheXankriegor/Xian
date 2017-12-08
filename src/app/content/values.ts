import {Race} from '../logic/race';
import {Rank} from '../logic/rank';

export class Values {


  RACES: Race[] = [
    new Race(0, 'Human', 100, 10),
    new Race(1, 'Human (Weak Variant Bloodline)', 150, 11),
    new Race(2, 'Human (Medium Variant Bloodline)', 200,12),
    new Race(3, 'Human (Strong Variant Bloodline)', 250, 13),
    new Race(4, 'Demon (Lesser Demon)', 300,14),
    new Race(5, 'Human (Elemental Affinity)', 150,15),
  ];

  RANKS: Rank[] = [
    new Rank(0, 'None', 50),
    new Rank(1, 'Initial Transformation Realm', 100),
    new Rank(2, 'Lower Transformation Realm', 500)
  ];

  constructor() {

  }

  getRace(i: number) {
    return this.RACES[i];
  }

  getRaceOptions(unlocked: number[]): Race[] {
    const options = new Array<Race>();
    unlocked.forEach(val => options.push(this.RACES[val]));
    return options;
  }
}
