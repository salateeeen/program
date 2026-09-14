///as array with unique item///

// can passed any iterable
let newSet = new Set([1, 2, 4, 3, 4, 2, 1]);
console.log(newSet);
console.log(`size:`, newSet.size);
console.log(`has:`, newSet.has(1));
console.log(`has:`, newSet.has(8));
console.log(`add:`, newSet.add(8));
console.log(`add:`, newSet.add(8));
console.log(`delete:`, newSet.delete(1));
console.log(newSet);

///for-Each
//& no key in set
newSet.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
});

/// to array
let toArray = [...newSet];
console.log(`toArray`, toArray);

/// spread and destructure
let [a, b, c, d] = newSet;
console.log(a, b, c, d);
console.log(...newSet);
//! console.log(newSet[0]);

newSet.clear();
console.log(`clear:`, newSet);

let newTomato = new Set(`tomato`);
console.log(newTomato);
console.log(`size:`, newTomato.size);

/// operations

const italianFoods = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  `garlic`,
  "Pizza",
  `basil`,
]);

const mexicanFoods = new Set([
  "Pasta",
  `garlic`,
  `rice`,
  `beans`,
  `tomato`,
  "Pasta",
]);

//& find in tow set
const intersection = italianFoods.intersection(mexicanFoods);
console.log(intersection);

//& all in italian and mexican without repeat
const union = italianFoods.union(mexicanFoods);
console.log(union);
//* seem union
const newUnion = new Set([...italianFoods, ...mexicanFoods]);
console.log(newUnion);

//& just a italian food unique
const uniqueItalian = italianFoods.difference(mexicanFoods);
console.log(uniqueItalian);

const uniqueMexican = mexicanFoods.difference(italianFoods);
console.log(uniqueMexican);

//& union of difference
const symmetric = italianFoods.symmetricDifference(mexicanFoods);
console.log(symmetric);

//& has not intersection
console.log(italianFoods.isDisjointFrom(mexicanFoods));