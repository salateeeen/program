console.log(Math.round(100.7))
console.log(Math.round(100.2))
console.log(Math.ceil(100.2))
console.log(Math.floor(100.7))
console.log(Math.trunc(99.7))
console.log(Math.trunc(99.2))
console.log(Math.trunc(-24))
console.log(Math.floor(-24));
console.log(Math.min(10, 20, 35, 100, -100))
console.log(Math.max(10, 20, 35, 100, -100))
console.log(Math.max(10, 20, 35, `100`, -100));
console.log(Math.max(10, 20, 35, `100px`, -100));
console.log(Math.pow(2, "3"))
console.log(Math.pow(2, 3))
console.log(Math.sqrt(4));
console.log(Math.random()) //0-1
console.log(Math.random()*4+9) //9-13

const randomInteger = function (min, max) {
  return Math.trunc(Math.random() * (max - min + 1) + min);
};
console.log(randomInteger(3, 9));