// const fav = prompt(`input a number`) //! string
// if (fav === 18) {
//     console.log(`the old is 18`);

// } else {
//     console.log(`the old is not enough`);

// }

// const fav1 =Number(prompt(`input a number`)); //! num
// if (fav1 === 18) {
//     console.log(`the old is 18`);

// } else {
//     console.log(`the old is not enough`);
// }

//? const age = 15;
// //! statment
// let IF = if (age >= 18) {
//    `is avelable`
// }
// //! expression
// let TERNARY = age >= 18 ?`the age is avelable`: `is not avelable`;

// //todo statment
// let IF1 = `the age ${IF = if (age >= 18) {
//        `is avelable`
//      }}

// //todo expression
// let TERNARY1 = `the age ${age >= 18 ?`the age is avelable`: `is not avelable`}`

// myJuice1() //? is allowed
// function myJuice1() {
//     console.log(`my juice is freez and banana`);
// }

// myJuice2() //? is not allowed before initialization
// const myJuice2 = function() {
//     console.log(`my juice is freez and banana`);
// }

// /// arrow is should to be expression
// const arrow1 = freez => console.log(`my juice hava ${freez} freez`);
// arrow1(11);

// const arrow2 = (freez, banana)=> console.log(`my juice hava ${freez} freez and banana ${banana}`);
// arrow2(4, 7);

// const arrow3 = (freez, banana)=>{
//     const total = freez + banana;
//     console.log(`my juice hava ${total} freez and banana`);
//     return `return`;
// }
// console.log(arrow3(4, 9));

// const cutFruite = function (fruite) {
//     return fruite*4;
// }
// const arrow4 = (freez, banana)=>{
//     const freezPecies = cutFruite(freez);
//     const bananaPecies = cutFruite(banana);
//     console.log(`my juice hava ${freezPecies} pecies of freez and ${bananaPecies} pecies of banana`);
//     return `return`;
// }
// console.log(arrow4(4, 9));

// ///CREAT ARRAY
// let Name = [`sultan`, `omar`, `elias`, [`zain`, `jack`]];
// //! new array
// let NEW = new Array(1, 2, 3, 4, 5);

// ///CONST
// //! is not allowed to primetive data type
// const friend = `sultan`;
// friend = `asal`;
// console.log(friend);

//? // is allowed
// const friends = [`abdullah`, `sultan`, `obada`, `emran`, `mohammed`];
// friends[1] = `the best`;
// console.log(friends[1]);
// //! is not allowed
// friends = [`zaid`, `elias`];

// //? concatinate
// let concat = new Array(1, 2, 3, 4, 5);
// concat += 10;
// console.log(concat); //string

//? object
// const myLang = "my ";
// console.log(User[myLang + "Lang"]); //? correct

// console.log(copyObj[`ageInDays`]()); //todo .ال[] قبل ال () دن

// /// debugger;
// let Sultan = {
//     bearthYear: 2004,
//     ageYear: function () {
//         this.age = 2024 - this.bearthYear;
//         return this.age;
//     }
// };
// Sultan.ageYear()
// console.table(Sultan);

//* age proparety it creat when we invoke ageYear() function
// ! console.log(Sultan.age); // undfined
// ! console.log(Sultan.age);

// console.log(Sultan.ageYear());
// console.log(Sultan.ageYear());
// console.log(Sultan.ageYear());

// ?verey verey speed
// todo console.log(Sultan.ageYear());
// todo console.log(Sultan.age);
// todo console.log(Sultan.age);

///spreated iterables: Arr, String, Set, Maps
//&Array To String
//*spread ... right of =
// let strName = `sullta`;

// let arrName = [...strName, ``, `o`, `m`, `a`, `r`];
// console.log(arrName);

// const spreated = function(a0, a1, a2, a3){
//     console.log(a0, a1, a2, a3);
// }
// let spreatedArr = [0, 1, 2, 3];
// spreated(spreatedArr[0], spreatedArr[1], spreatedArr[2], spreatedArr[3]);
// spreated(...spreatedArr)

// let sultanOriginal = {
//     firstName: `sultan`,
//     bearthYear: 2004,
// };
// console.log(sultanOriginal);

///rest as examble Destructing
//&String To Array
//*rest ... left of =
// let [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(others);

// const rest = function (a, ...others) {
//   console.log(a, others);
// };
// rest(1, 2, 3, 4, 5);

// let sprOther = [3, 4, 5, 6, 7];
// let [x, y, ...restOther] = [1, 2, ...sprOther];
// console.log(x, y, restOther);
// console.log(...restOther);

// let myName = `sultan`;
// const RestName = function (a,...myRestName) {
//   console.log(a, myRestName);
// };
// RestName(myName);

// /// logical assignment operators
// let rest1 = {
//   name: `carpi`,
//   numGustes: 20,
//*  numGustes: 0
// };

// let rest2 = {
//   name: `pizza`,
//   owner: `giovany`
// };

// rest1.numGustes = rest1.numGustes || 10;
// rest1.numGustes ||= 10;
// console.log(rest1.numGustes);

// rest1.numGustes = rest1.numGustes ?? 10;
// rest1.numGustes ??= 10;
// console.log(rest1.numGustes);

// rest2.numGustes = rest2.numGustes || 10;
// rest2.numGustes ||= 10;
// console.log(rest2.numGustes);

// rest2.falsy = rest2.falsy && 10;
// rest2.falsy &&= 10;
// console.log(rest2.falsy);

// /// entries put an index and item in new array
// let forOfArr = [1, 2, 3, 4, 5];
// for (const [index, item] of forOfArr.entries()) {
//   console.log(`${index}: ${item}`);
// }

// ///  enhanced object literals
// let education ={
//     college:`computer engineering`,
//     atYear: 3
// }
// let lastName = `abdulraheem`;

// let Sultan = {
//   //& nameing the properety with [put any expression here]
//   [`bearth` + `Year`]: 2004,

//   //& just write name and parentheses
//   ageYear() {
//     this.age = 2024 - this.bearthYear;
//     return this.age;
//   },
//   //& put an any property without declaration
//   lastName,
//   education
// };
// Sultan.ageYear();
// console.log(Sultan.education.college);
// console.log(Sultan.lastName);

// /// optional chaining (?.)
// //! undefind.value error
// //& undefind?.value undefind

// console.log(Sultan.id.print);
// console.log(Sultan.id?.print);
// console.log(Sultan.id?.print ?? 2231413);

// console.log(Sultan.ageYear?.() ?? `function is not include`);
// console.log(Sultan.ageMonth?.() ?? `function is not include`);

// let arrHave = [{name:`sultan`}]
// console.log(arrHave?.[0]?.name);
// console.log(arrHave?.[1]?.name);

/// looping objects: object keys, values, and entries

// let education = {
//   name: `abdulraheem`,
//   id: 2231413,
//   college: `computer engineering`,
//   atYear: 3,
// };
// //* array of keys
// console.log(Object.keys(education));

// //* array of values
// console.log(Object.values(education));

// //* array of entries
// console.log(Object.entries(education));

/// Strings
// let indent = ` indent  \n`;
// console.log(indent);
// console.log(indent.trim());

// const capitalizeName = function (fullName) {
//   const smallName = fullName.toLowerCase();
//   let newArr = [];
//   for (const fully of smallName.split(` `)) {
//     newArr.push(fully.replace(fully[0], fully[0].toUpperCase()));
//   }
//   return newArr.join(` `);
// };
// console.log(capitalizeName(`sultAn oMAR`));

// const maskTheCode = function (number) {
//   number = number + ``;
//   let sliceNum = number.slice(-3);
//   let maskNum = sliceNum.padStart(number.length, `*`);
//   return `${maskNum} is your number?`
// };
// console.log(maskTheCode(799083736));
// console.log(maskTheCode(`799083736`));

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));
// document.querySelector("textarea").value = `underscore_case;
// first_name;
// Some_Variable;
// calculate_AGE;
// delayed_departure`;

// const convertToCammilCase = function () {
//   let text = document.querySelector("textarea").value;
//   let sunteses = text.split(`\n`);

//   for (let i = 0; i < sunteses.length; i++) {
//     let small = sunteses[i].toLowerCase().trim();
//     let [first, second ]= small.split(`_`);
//     let output = `${first}${second
//       .replace(second[0], second[0].toUpperCase())}`;
//     console.log(`${output.padEnd(20, ` `)}  ${`✅`.repeat(i + 1)}`);
//   }
// };
// document.querySelector("button").addEventListener("click", convertToCammilCase);

// /// functions
// const defaultParameterES5 = function (name, age) {
//   //$ ES5
//   name = name || `sultan`;
//   age = age || 21;
//   console.log(name, age);
// };
// defaultParameterES5(`asal`);

// const defaultParameterES6 = function (name = `sultan`, age = 21) {
//   //$ ES6
//   console.log(name, age);
// };
// //* undefind skip
// defaultParameterES6(undefined , 12);

// console.log(typeof defaultParameterES5);

// /// call by value and call by refrence
// let yourName= {
//     name: `sultan`
// }
// let myName = `sultan`

// const byValByRef = function (yourName, myName) {
//   yourName.name = `asal`;
//   myName = `asal`;
// };
// byValByRef(yourName, myName);

// console.log(yourName, myName);

// /// ferst class function (the common function)
// /// higher order function (abstraction)
// const addition = function(num1, num2){
//   return num1 + num2;
// }

// const subtraction = function (num1, num2) {
//   return num1 - num2;
// };

// const operation = function (num1, num2, operation) {
//   console.log(`the operation is: ${operation.name} the num is:${operation(num1, num2)}`);
// };
// operation(2,3,addition)

// /// functions returning functions
// const college = function (cl){
//   return function(major){
//     console.log(`${college}: ${major}`);
//   }
// }

// college(`Eng`, `computer`)

// /// Number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite(20 / 0));
// console.log(Number.isFinite(`20`));
// console.log(Number.isFinite(+`24x`));

// //$ (max - min + 1) the range
// //$ (+ min) start with
// const randomInteger = function (min, max) {
//   return Math.trunc(Math.random() * (max - min + 1) + min);
// };
// console.log(randomInteger(3, 9));

// //$ to fixed
// console.log(2004.274.toFixed(0)); //string
// console.log(2004.274.toFixed(2)); //string

// //$ big int
// const big1 = 27272727272727272n
// const big2 = BigInt(27272727272727272);
// const num = 27272727272727272;
// console.log(big1, big2);
// console.log(big1 + big2);
// //? console.log(big1 + num);
// //!error cannot mix BigInt and other types
// console.log(typeof big1);
// console.log(big1 + ` big1`);
// console.log(10 / 3);
// console.log(10n / 3n);

// const hugeNum = 345_000_000;
// console.log(hugeNum);
// //! console.log(_079._9083__736_); error
// console.log(Number(`230_569`));
// console.log(Number.parseInt(`230_569`));

const monthKeys = [
  "Jan", "Feb",
  "Mar", "Apr",
  "May", "Jun",
  "Jul", "Aug",
  "Sep", "Oct",
  "Nov", "Dec",
];

const nowDate2 = new Date(`2024, 10, 10`);
console.log(nowDate2);
console.log(nowDate2.getMonth());
console.log(monthKeys[nowDate2.getMonth()]);

const nowDate1 = new Date(2024, 10, 10);
console.log(nowDate1);
console.log(nowDate1.getMonth());
console.log(monthKeys[nowDate1.getMonth()]);

const passedDays = function (date1, date2) {
  return Math.round(Math.abs(date1 - date2) / 1000 / 3600 / 24);
};
console.log(passedDays(Date.now(), new Date(2025, 1, 7)));


/// set and get
let myInfo = {
  myName: ``,
  set setName(myName) {
    this.myName = myName;
  },
  get getName() {
    return this.myName;
  },
};
myInfo.setName = `SULTAN`;
console.log(myInfo.getName);