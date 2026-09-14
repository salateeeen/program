console.log(`%c######datatype######`, `color:gold;`);
console.log(typeof "sultan");
console.log(typeof 2700);
console.log(typeof [7, 2, 4]);
console.log(typeof {name:`sultan`, age:20});
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

console.log(`%c######ID######`, `color: #a0ff99;`);
console.log(ID);
ID.innerHTML = `SULTAN OMAR`;

console.log(`%c######variables######`, `color:#fa9cff;`);

// redeclare (yes)
//! acces before redeclare (undefined)
//todo added to window
var x =5;
var x =7;
console.log(x)

// redeclare (no)
//! acces before redeclare (error)
//todo dosent added to window
let y =5;
let u; //undefined
console.log(y)

// redeclare (no)
//! acces before redeclare (error)
//todo dosent added to window
const z =5;
const e; //error
console.log(z)







