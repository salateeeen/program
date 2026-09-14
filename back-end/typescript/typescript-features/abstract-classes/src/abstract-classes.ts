/// we can not create a new instance from abstract class
abstract class Food {
  constructor(public title: string) {}
  abstract getCoockingTime(): void;
}

class Pizza extends Food {
  constructor(
    title: string,
    public pice: number,
  ) {
    super(title);
  }
  getCoockingTime() {
    console.log("It takes 25ms");
  }
}

class Mansaf extends Food {
  constructor(
    title: string,
    public pice: number,
  ) {
    super(title);
  }
  getCoockingTime() {
    console.log("It takes 90ms");
  }
}

const mansaf = new Mansaf("mansaf", 45);
mansaf.getCoockingTime();

abstract class Player {
  constructor(public name: string) {}
  attack(): void {
    console.log("is attacking now");
  }
}

class Amazon extends Player {
  constructor(
    name: string,
    public spares: number,
  ) {
    super(name);
  }
  override attack() {
    console.log(`amazon is attack, the number of speares is ${this.spares}`);
    this.spares--;
  }
}

const amazon = new Amazon("sultan", 12);
amazon.attack();
amazon.attack();
