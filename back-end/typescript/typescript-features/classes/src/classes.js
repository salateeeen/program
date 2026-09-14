"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    _age;
    address;
    static created = 0;
    birhtYear;
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    static getCreatedObjects() {
        console.log(this.created);
    }
    constructor(name, age, address) {
        Person.created++;
        this.name = name;
        this._age = age;
        this.address = address;
        this.birhtYear = function () {
            return 2026 - this._age;
        };
    }
}
const person1 = new Person("sultan", 22, "3126ps");
const person2 = new Person("sultan", 22, "3126ps");
const person3 = new Person("sultan", 22, "3126ps");
const person4 = new Person("sultan", 22, "3126ps");
Person.getCreatedObjects();
class App {
    name;
    age;
    id;
    protect;
    constructor(name, age, id, protect) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.protect = protect;
    }
}
const app = new App("sultan", 23, "2000805181", true);
//# sourceMappingURL=classes.js.map