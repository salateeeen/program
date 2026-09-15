`use strict`;
let arr = [1, 2];
let obj = { name: `sultan`, age: 21 };
let newMap = new Map();

//$ set return object after added
newMap
  .set(`key`, `value`)
  .set(`string`, `string`)
  .set(1, `number`)
  .set(true, `boolean`)
  .set(arr, `array`)
  .set(`obj`, obj)
  .set(document.querySelector(`h1`), `heading`);
console.log(newMap);
/// get in key name
console.log(newMap.get(newMap.get(`obj`).name === `sultan`));
console.log(newMap.get());

console.log(newMap.has(`obj`));
console.log(newMap.has(obj));
console.log(newMap.has(1));

newMap.delete(1);
console.log(newMap);

console.log(newMap.size);

console.log([...newMap]);
console.log([...newMap.keys()]);
console.log([...newMap.values()]);

///for-Each
newMap.forEach(function (value, key, map) {
   console.log(`${key}: ${value}`);
});


// newMap.clear();

//$ array and obj to map
const questions = new Map([
  [`question`, `what is the best language?`],
  [1, `c++`],
  [2, `java`],
  [3, `javaScript`],
  [`correct`, 1],
  [true, `correct🎉`],
  [false, `try again!`],
]);
console.log(questions.get(`question`));
for (const [key, value] of questions) {
  if (typeof key === typeof 1) console.log(`${key}: ${value}`);
}
const choose = Number(prompt(`choosy your number`));
console.log(questions.get(questions.get(`correct`)=== choose));

let education = {
  name: `sultan`,
  id: 2231413,
  collage: `computer engineering`,
  atYear: 3,
};

let objMap = new Map(Object.entries(education))
console.log(objMap);
console.log(...objMap);
console.log([...objMap.keys()]);
console.log([...objMap.values()]);