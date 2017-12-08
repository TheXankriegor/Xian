import {Race} from './race';

export class Hero {
  name: string;
  race: Race;

  birth: number[];
  totalage: number[];

  constructor(nam: string, rac: Race ) {
    this.name = nam;
    this.race = rac;
    this.birth = [0, 0, 0];
    this.totalage = [0, 0, 0];
  }

  setBirth(age: number[]) {
    this.birth = age;
  }

  toString(): string {
    return this.name + ': ' + this.race;
  }

}
