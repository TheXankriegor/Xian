export class Race {

  constructor(public id: number, public name: string, public dummyval: number) {

  }

  toString(): string {
    return this.name;
  }
}
