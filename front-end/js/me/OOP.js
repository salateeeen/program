`use strict`;

//# in regular function call the this is set to undefined
const Person = function (firstName, age) {
  this.myName = firstName;
  this.myAge = age;
  this.myID = 2231413;

  //& in all instace objects
  //! this.calcBirthYear = function () {
  //! return 2025 - this.myAge;
  //!};
};


//* method in proto type cant Person reach them
Person.prototype.calcBirthYear = function () {
  return 2025 - this.myAge;
};

//* attribute in proto type
Person.prototype.religion = `muslim`

//* static call by the class and not inhert in protoType
Person.sayStatic = function () {
  console.log(`say is static`);
}
Person.sayStatic();


/// new creat a new object
const sultan = new Person(`sultan`, 21);
console.log(sultan);
console.log(sultan.calcBirthYear());
const omar = new Person(`omar`, 45);
console.log(omar);
const marwa = new Person(`marwa`, 21);
console.log(marwa);


console.log(Person.prototype);
console.log(Person.__proto__);
console.log(sultan.__proto__);

/// object proto type (top chain)
console.log(Person.prototype.__proto__);
console.log(Person.prototype.__proto__.__proto__);

//& [] === new Array
const arrOne = [1, 2, 2, 5, 3, 4, 5];
const arrTwo = [1, 2, 2, 7, 6, 7, 7, 3, 4, 5];
console.log(arrOne.__proto__ === Array.prototype);
console.log(Array.prototype.__proto__);

//$ crear a new method for all arrays in your project
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arrOne.unique());
console.log(arrTwo.unique());

///ES6
class PersonCl {
  //$ constructor create a new objet
  constructor(firstName, year) {
    this.myName = firstName;
    this.myBirthYear = year;
    this.myID = 2231413;
  }
  //? method out constructor written in __proto__
  calcMyAge() {
    return 2025 - this.myBirthYear;
  }

  get getAge() {
    return 2025 - this.myBirthYear;
  }
  //* static call by the class and [not inhert in protoType]
  static sayStatic() {
    console.log(`say is static`);
  }
}
PersonCl.sayStatic()

const elias = new PersonCl(`sultan`, 2004);
console.log(elias);
console.log(elias.calcMyAge());
console.log(elias.getAge);

// elias.sayStatic(); //!error

//? we also can write as function constructer

PersonCl.prototype.sayMyName = function () {
  console.log(`my name is ${this.myName}`);
};
elias.sayMyName();

const PeopleProto = {
  info(firstName, year) {
    this.myName = firstName;
    this.myBirthYear = year;
  },
  calcMyAge() {
    return 2025 - this.myBirthYear;
  }
}
const personProto1 = Object.create(PeopleProto);
console.log(personProto1);
personProto1.info(`sultan`, 2004)
console.log(personProto1.calcMyAge());