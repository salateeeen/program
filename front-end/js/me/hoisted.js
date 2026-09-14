// Hoisting and TDZ in Practice

// Variables
//* undefined
console.log(me);
//! error
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
//# actual function
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
//? undefined(2, 3)
//? console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

//* true
console.log(x === window.x);
//!false
console.log(y === window.y);
console.log(z === window.z);
