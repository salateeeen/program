"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Food {
    title;
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    pice;
    constructor(title, pice) {
        super(title);
        this.pice = pice;
    }
    getCoockingTime() {
        console.log("It takes 25ms");
    }
}
class Mansaf extends Food {
    pice;
    constructor(title, pice) {
        super(title);
        this.pice = pice;
    }
    getCoockingTime() {
        console.log("It takes 90ms");
    }
}
const mansaf = new Mansaf("mansaf", 45);
mansaf.getCoockingTime();
class Player {
    name;
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log("is attacking now");
    }
}
class Amazon extends Player {
    spares;
    constructor(name, spares) {
        super(name);
        this.spares = spares;
    }
    attack() {
        console.log(`amazon is attack, the number of speares is ${this.spares}`);
        this.spares--;
    }
}
const amazon = new Amazon("sultan", 12);
amazon.attack();
amazon.attack();
//# sourceMappingURL=abstract-classes.js.map