`use strict`;

/// constructor
const Person = function (firstName, age) {
  this.myName = firstName;
  this.myAge = age;
};
Person.prototype.calcBirthYear = function () {
  return 2025 - this.myAge;
};

const Student = function (firstName, age, ID) {
  Person.call(this, firstName, age);
  this.myID = ID;
};

//* should be the first protoType writting
Student.prototype = Object.create(Person.prototype);

//$ Student.prototype.__proto__ = Person.prototype;
Student.prototype.calcAvg = function () {
  return (80 + 70 + 90) / 3;
};
//& cause return stu.prot pointer to stu
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

console.log(Person.prototype);
console.log(Student.prototype);
console.log(Student.prototype.__proto__);

const student1 = new Student(`sultan`, 21, 2231413);
console.log(student1);
console.log(student1.calcAvg());

console.log(student1 instanceof Student);
console.log(student1 instanceof Person);
console.log(student1 instanceof Object); //! end of chain

///ES6
class PeopleCl {
  constructor(firstName, year) {
    this.myName = firstName;
    this.myBirthYear = year;
  }
  calcMyAge() {
    return 2025 - this.myBirthYear;
  }
  sayMyName() {
    console.log(`my name is ${this.myName}`);
  }
}

class StudentCl extends PeopleCl {
  constructor(firstName, year, ID) {
    super(firstName, year);
    this.myID = ID;
  }
  //$ override
  calcMyAge() {
    console.log(`calcAge in student class ${2025 - this.myBirthYear}`);
  }
}

const studentCl1 = new StudentCl(`sultan`, 21, 2231413);
console.log(studentCl1);

/// object creater
const PersonProto = {
  info(firstName, year) {
    this.myName = firstName;
    this.myBirthYear = year;
  },
  calcMyAge() {
    return 2025 - this.myBirthYear;
  },
};
const StudentProto = Object.create(PersonProto);
StudentProto.info = function (firstName, year, ID) {
  PersonProto.info.call(this, firstName, year);
  this.myID = ID;
};
const sultan = Object.create(StudentProto);

sultan.info(`sultan`, 2004, 2231413);
console.log(sultan);
console.log(sultan.calcMyAge());
