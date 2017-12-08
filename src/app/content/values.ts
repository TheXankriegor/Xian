import {Race} from '../logic/race';

export class Values {


  RACES: Race[] = [
    new Race(0, 'Human', 10),
    new Race(1, 'Human (Weak Bloodline)', 11),
    new Race(2, 'Human (Medium Bloodline)', 12),
    new Race(3, 'Human (Strong Bloodline)', 13),
    new Race(4, 'Demon (Lesser Demon)', 14),
    new Race(5, 'Human (Elemental Affinity)', 15),
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
