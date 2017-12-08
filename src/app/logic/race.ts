export class Race {

  constructor(public id: number, public name: string, public lifespan: number, public dummyval: number) {

  }

  toString(): string {
    return this.name;
  }
}
