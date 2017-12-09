import {Race} from './race';
import {Rank} from './rank';
import {Values} from '../content/values';

export class Hero {
  name: string;
  race: Race;
  rank: Rank;
  nextRank: Rank;

  rankprogress: number;

  vitality: number;
  vitalityMax: number;

  birth: number[];
  totalage: number[];
  deathage: number[];

  constructor(nam: string, rac: Race, private ran: Rank) {
    this.name = nam;
    this.race = rac;
    this.birth = [0, 0, 0];
    this.totalage = [0, 0, 0];
    this.rankprogress = 0;
    this.rank = ran;
    this.updateLifeExpectancy();
  }

  setBirth(age: number[]) {
    this.birth = age;
    this.birth[2] = this.birth[2] - 15;
    console.log(this.birth);
  }

  cultivate(passed: number[], val: Values) {

    this.rankprogress += passed[0];
    if (this.rankprogress >= this.rank.toughness) {
      if (val.RANKS[this.rank.id + 1]) {
        this.rankprogress = this.rankprogress - this.rank.toughness;
        this.rank = val.RANKS[this.rank.id + 1];
        this.updateLifeExpectancy();
      } else {
        this.rankprogress = this.rank.toughness;
      }
    }
  }

  toString(): string {
    return this.name + ': ' + this.race;
  }


  updateLifeExpectancy() {
    const age = [0, 0, 0];
    age[0] = Math.floor(Math.random() * 28) + 1;
    age[1] = Math.floor(Math.random() * 12) + 1;
    const years = this.race.lifespan * this.rank.vitality;
    const modifier = (Math.floor(Math.random() * (years / 8)) * 2) - (years / 10);
    age[2] = Math.round(years + modifier);
    this.deathage = age;
    console.log(this.deathage);
  }

  valid(): boolean {
    if (this.name !== '') {
      return true;
    } else {
      return false;
    }
  }
}
