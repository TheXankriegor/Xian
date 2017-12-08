import {Race} from './race';
import {Rank} from './rank';
import {Values} from '../content/values';

export class Hero {
  name: string;
  race: Race;
  rank: Rank;
  nextRank: Rank;

  rankprogress: number;

  birth: number[];
  totalage: number[];

  constructor(nam: string, rac: Race, private ran: Rank) {
    this.name = nam;
    this.race = rac;
    this.birth = [0, 0, 0];
    this.totalage = [0, 0, 0];
    this.rankprogress = 0;
    this.rank = ran;

  }

  setBirth(age: number[]) {
    this.birth = age;
  }

  cultivate(passed: number[], val: Values) {

    this.rankprogress += passed[0];
    if (this.rankprogress >= this.rank.toughness) {
      if (val.RANKS[this.rank.id + 1]) {
        this.rankprogress = this.rankprogress - this.rank.toughness;
        this.rank = val.RANKS[this.rank.id + 1];
      } else {
        this.rankprogress = this.rank.toughness;
      }
    }
  }

  toString(): string {
    return this.name + ': ' + this.race;
  }

}
