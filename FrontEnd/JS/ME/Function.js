// console.log(`%c#########################`, `color:#fad000`);
// function sayHello() {
//   console.log(`say hello to my little friend`);
// }
// sayHello();

// console.log(`%c#########################`, `color:#fad000`);
// function sayMyName(myName) {
//   console.log(`my name is ${myName}`);
// }
// sayMyName(`geff`);
// sayMyName(`geff`, 45);

// console.log(`%c#########################`, `color:#fad000`);
// function sayMyNum(myNum) {
//   return myNum;
// }
// sayMyNum(799083736);
// console.log(sayMyNum(799083736));

// console.log(`%c#########################`, `color:#fad000`);
// function sayMyNameAge(myName, age = 34) {
//   if (age > 18) {
//     console.log(`my name is ${myName} my age is ${age}`);
//   } else console.log(`this app is fuck not to you`);
// }
// sayMyNameAge(`jack`); //default value for parameter is undefinde
// sayMyNameAge(`jack`, 20);
// sayMyNameAge(`jack`, 15);

// console.log(`%c#########################`, `color:#fad000`);
// function generateYears(start, end, exclude) {
//   for (let i = start; i <= end; i++) {
//     if (i === exclude) {
//       continue;
//     }
//     console.log(i);
//   }
// }
// generateYears(2004, 2024, 2013);

// console.log(`%c#########################`, `color:#fad000`);
// function Calculate(num1, num2) {
//   return num1 + num2; // return تنهي الكود تاع الفنكشن
//   let x = 40;
// }
// let result = Calculate(24, 7);
// console.log(result);

// console.log(`%c#########################`, `color:#fad000`);
// function generate(start, end) {
//   for (let i = start; i <= end; i++) {
//     console.log(i);
//     if (i === 20) {
//       return "error";
//     }
//   }
// }
// generate(10, 30);
// console.log(generate(10, 30));

// console.log(`%c#########################`, `color:#fad000`);
// // بعمل طباعة و return
// function Name(name) {
//   console.log(name);
//   return "asalReturn";
// }

// Name(`sultan`);
// console.log(Name(`asalConsole`));

// console.log(`%c#########################`, `color:#fad000`);
// //todo numbers is array //only one //last parameter
// function Rest(...numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//   }
// }
// Rest(12, 34, 1451, 52);

// console.log(`%c#########################`, `color:#fad000`);
// function Info(name = `uk`, age = `uk`, rate = 0, show = `yes`, ...skils) {
//   document.write(`<div>`);
//   document.write(`<h1>The name ${name} </h1>`);
//   document.write(`<p>the age ${age} </p>`);
//   document.write(`<p>the rate ${rate}$ </p>`);
//   if (show === `yes` || show === `Yes`) {
//     document.write(`<h3>Skils: </h3>`);
//     for (let i = 0; i < skils.length; i++) {
//       document.write(`<p> ${skils[i]} </p>`);
//     }
//   } else document.write(`<p>dont show skils !</p>`);
//   document.write(`</div>`);
// }
// Info(`sultan`, 20, 300, `no`, `html`, `css`, `js`);

// console.log(`%c#########################`, `color:#fad000`);
// console.log(Calc(20, 22)); // قبل ما نعمل الفنكشن
// function Calc(num1, num2) {
//   return num1 + num2;
// }

// //console.log(Anmus(20,22)); //TODO ما بزبط لما تكون Anonymous لأنها تنشأ في ال runTime
// let Anmus = function (num1, num2) {
//   return num1 + num2;
// };

// console.log(`%c#########################`, `color:#fad000`);
// function Avg(num1, num2, num3) {
//   function sum() {
//     return num1 + num2 + num3;
//   }
//   function devid() {
//     return sum() / 3;
//   }
//   return devid();
// }
// console.log(Avg(12, 22, 17));

// console.log(`%c#########################`, `color:#fad000`);
// let Arrow1 = (num1, num2) => num1 + num2; // اذا سطر واحد بنقدر نعملها هيك بسرعة
// console.log(Arrow1(12, 23));

// let Arrow2 = (num1) => num1; // اذا قيمة وحدة بقدر احطها بدون قوس
// console.log(Arrow2(27));

// let Arrow3 = (num1, num2) => {
//   console.log(`arrow`);
//   return num1 + num2;
// };
// console.log(Arrow3(12, 1));

// console.log(`%c#########################`, `color:#fad000`);
// var a = 2004;
// let b = 27;
// function Global() {
//   console.log(`Global function ${a}`);
//   console.log(`Global function ${b}`);
// }
// console.log(`Global ${a}`);
// console.log(`Global ${b}`);
// Global();

// console.log(`%c#########################`, `color:#fad000`);
// var a1 = 2005;
// let b1 = 2003;
// function Global2() {
//   console.log(`Global function ${a1}`);
//   console.log(`Global function ${b1}`);
//   // دور عليهم ولاقاهم بس حيعمل ايرور لازم وفق
//   //todo var a1 = 46;
//   //todo let b1 = 36;
// }
// console.log(`Global ${a}`);
// console.log(`Global ${b}`);
// // Global2();

// console.log(`%c#########################`, `color:#fad000`);
// var a2 = 2024;
// let b2 = 2020;
// function Local1() {
//   var a2 = 45;
//   let b2 = 64;
//   console.log(`Local function ${a2}`);
//   console.log(`Local function ${b2}`);
// }
// console.log(`Global ${a2}`);
// console.log(`Global ${b2}`);
// Local1();

// console.log(`%c#########################`, `color:#fad000`);
// function Local2() {
//   var a3 = 79;
//   let b3 = 97;
//   console.log(`Local function ${a3}`);
//   console.log(`Local function ${b3}`);
// }
// // لن يقرأهم من الفنكشن
// // console.log(`Global ${a3}`);
// // console.log(`Global ${b3}`);
// Local2();

// console.log(`%c#########################`, `color:#fad000`);
// //! var is not block scope
// var V = 27;
// if (true) {
//   var V = 54;
// }
// console.log(`var ${V}`);

// //! let is block scope
// let L = 20;
// if (true) {
//   let L = 40;
// }
// console.log(`let ${L}`);

// console.log(`%c#########################`, `color:#fad000`);
// function parent() {
//   let m = 11;
//   function child() {
//     console.log(m);
//     // console.log(k);
//     function grandChild() {
//       let k = 13;
//       console.log(m);
//       console.log(k);
//     }
//     grandChild();
//   }
//   child();
// }
// parent();

// console.log(`%c#########################`, `color:#fad000`);
// const arrow1 = (freez) => console.log(`my juice hava ${freez} freez`);
// arrow1(11);

// const arrow2 = (freez, banana) =>
//   console.log(`my juice hava ${freez} freez and banana ${banana}`);
// arrow2(4, 7);

// ///call by value and call by refrence
// let yourName = {
//   name: `sultan`,
// };
// let myName = `sultan`;

// const byValByRef = function (yourName, myName) {
//   yourName.name = `asal`;
//   myName = `asal`;
// };
// byValByRef(yourName, myName);

// console.log(yourName, myName);

// /// higher order function (function call function)
// const addition = function (num1, num2) {
//   return num1 + num2;
// };

// const subtraction = function (num1, num2) {
//   return num1 - num2;
// };

// const operation = function (num1, num2, operation) {
//   console.log(
//     `the operation is: ${operation.name} the num is:${operation(num1, num2)}`
//   );
// };
// operation(2, 3, addition);
// operation(2, 3, subtraction);

// /// functions returning functions
// const college = function (college) {
//   return function (major) {
//     console.log(`${college}: ${major}`);
//   };
// };
// const major = college(`Eng`);
// major(`computer`);
// college(`Eng`)(`computer`);

// const collegeArrow = (college) => (major) =>
//     console.log(`${college}: ${major}`);
// collegeArrow(`Eng`)(`electrical`);

// /// The call Method

// const Best = {
//   Name: `sultan`,
//   age: `21`,
//   myInfo(WhoIAm, myCountry) {
//     console.log(
//       `my name is ${this.Name} my age is ${this.age} and i am ${WhoIAm} from ${myCountry}`
//     );
//     return this;
//   },
// };
// Best.myInfo(`the best`, `jordan`);

// //& return to RETURN
// //* call then assign
// const RETURN = Best.myInfo(`call then assign`, `palestine`);
// console.log(RETURN);

// var age = 19;
// //& assign whole functin to variable then call
// //* call without call METHOD the (this) in function assign to the global window
// var Window = Best.myInfo;
// console.log(Window(`assign then call`, `syria`));
// window.Window(`assign then call`, `lebanon`);
// console.log(this);

// const callMethod = Best.myInfo;
// const person = {
//   Name: `ahmed`,
//   age: `27`,
// };
// callMethod.call(person, `person`, `call method`);

// /// The apply Methods
// const applyMethod = Best.myInfo;

// //$ seem as call method onle deffrence (this, [])
// const arrApply = [`person`, `apply method`];
// callMethod.apply(person, arrApply);

// //* modern JAVA SCRIPT
// const callApply = [`person`, `spread call method`];
// callMethod.call(person, ...callApply);

// const funGlopal = function (myCountry, method) {
//   console.log(
//     `my name is ${this.Name} my age is ${this.age} from ${myCountry} my method is ${method} the this is ${this}`
//   );
// };
// funGlopal.call(Best);

/// The bind Method
/// give a function the is set to what you write and just wait to call

// const person1 = funGlopal.bind(Best);
// person1(`jordan`, `bind`);

// //& partial applied
// const personJO = funGlopal.bind(Best, `jordan`);
// personJO(`bindJO`);

const numPhone = { 
 num :33,
 buyPhone () { 
  console.log(this);
  this.num++;
  console.log(this.num);
}
}

//# in event handler (thes) always point to the element in html not in object call the function
const docFun = numPhone.buyPhone;
document.querySelector(`.btn1`).addEventListener(`click`, docFun);

//# call from event handler but "this" is already set to numPhone
const docFunBind = numPhone.buyPhone.bind(numPhone);
console.log(docFunBind);
document.querySelector(`.btn2`).addEventListener(`click`, docFunBind);

///Immediately Invoked Function Expressions
(function () {
  console.log(`just trace one time`);
})();

(() => console.log(`just trace arrow one time`))();

/// closures