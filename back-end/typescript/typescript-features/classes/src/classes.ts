class Person {
  public name: string;
  private _age: number;
  /// to access the address in inhereted class
  protected address: string;

  static created: number = 0;

  birhtYear: () => number;

  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }

  static getCreatedObjects(): void {
    console.log(this.created);
  }

  constructor(name: string, age: number, address: string) {
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

interface Info {
  name: string;
  age: number;
  id: string;
  protect: boolean;
}

class App implements Info {
  name: string;
  age: number;
  id: string;
  protect: boolean;

  constructor(name: string, age: number, id: string, protect: boolean) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.protect = protect;
  }
}

const app = new App("sultan", 23, "2000805181", true);
