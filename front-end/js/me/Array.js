console.log(`####################`)
let Name = [`sultan`, `omar`, `elias`, [`zain`, `jack`]];
let NEW = new Array(1, 2, 3, 4, 5);
console.log(NEW[3])
console.log(Name[0]);
console.log(Name[3][0]);
console.log(Name[3][0][3]);
console.log(Name.at(1));
//& from last
console.log(Name.at(-1));
console.log(Name.at(-2));

Name[1] = [`osama`, `abdullah`]
console.log(Name);
Name[2] = `asal`;
console.log(Name);
Name[3] = `saleh`;
console.log(Name);

console.log(`####################`)
console.log(typeof Name);
console.log(Array.isArray(Name));

console.log(`##########Length##########`)
let nameLength = [`sultan`, `omar`, `elias`, [`zain`, `jack`]];
console.log(nameLength.length);
Name[nameLength.length] = `loay`;
// Name[6] = `loay`;
console.log(nameLength);
console.log(nameLength.length);
nameLength.length = 3;
console.log(nameLength);

console.log(`##########AdRm##########`)
let nameAdRm = [`sultan`, `omar`, `elias`];

nameAdRm.unshift(2, 7) //add to first
console.log(nameAdRm);
console.log(typeof nameAdRm[0]);

nameAdRm.push(0, 4) //add to last //return length
console.log(nameAdRm);

let first = nameAdRm.shift() //remove from first
console.log(nameAdRm);
console.log(first);

let last = nameAdRm.pop(1) //remove from last
console.log(nameAdRm);
console.log(last);

console.log(`##########Searching##########`)
let nameSrch = [`sultan`, `omar`, `elias`, `sultan`];
console.log(nameSrch.indexOf("sultan")); //index of
console.log(nameSrch.indexOf("elias", 2));
console.log(nameSrch.indexOf("elias", 3)); //-1 قيمة غير موجودة

console.log(nameSrch.lastIndexOf('sultan'));

console.log(nameSrch.includes(`sultan`)); //boolean
console.log(nameSrch.includes(`asal`));
nameSrch.push(27);
//! `27` != 23 as a number
console.log(nameSrch.includes(`27`));
console.log(nameSrch.includes(27));

console.log(`##########Sorting##########`);
let numSort = [100, 200, 27, 1000, -300, 45, -1200, `sultan`, `asal`];
console.log(numSort);
console.log(numSort.reverse()); // عكس ال array
console.log(numSort.sort()); // 1, 2, ...9, a, b, ...z
console.log(numSort.reverse()); // عكس ال array

const sortingDescending = function (account) {
  account.movements.sort(function (a, b) {
    if (b > a)
      return 1; //? keep order
    if (b < a)
      return -1; //? switch order
  })
}
const _sortingDescending = function (account) {
  account.movements.toSort(function (a, b) {
    return b - a;
  })
}
//todo console.log(numSort.sort().reverse()); chain

console.log(`##########Slicing##########`); //!creat a new array
let nameSlic = [`sultan`, `omar`, `elias`, `zain`];
console.log(nameSlic.slice());
console.log(nameSlic.slice(1));
console.log(nameSlic.slice(1, 3));
console.log(nameSlic.slice(-3));
console.log(nameSlic.slice(-3,-1));
console.log(nameSlic);

console.log(`##########Splice##########`); //!edit for same array
let nameSplic = [`sultan`, `omar`, `elias`, `zain`];
nameSplic.splice(0, 0, "samer")
console.log(nameSplic);
nameSplic.splice(1, 1, "sam")
console.log(nameSplic);

let nameJoin_conc1 = [`sultan`, `omar`, `elias`];
let nameJoin_conc2 = [`asal`, `amal`];
let nameJoin_conc3 = [`zain`];

console.log(`##########Concat##########`);
let newJoin_conc1 = nameJoin_conc1.concat(nameJoin_conc2) //!creat a new array
console.log(newJoin_conc1);
console.log(nameJoin_conc1);
let newJoin_conc2 = nameJoin_conc1.concat(nameJoin_conc2, nameJoin_conc3, `nour`, [1, 2])
console.log(newJoin_conc2);
console.log(nameJoin_conc1);

console.log(`##########Join##########`);
console.log(newJoin_conc1.join()); //!creat a new string //todo default join add (,) after each element
console.log(newJoin_conc1.join(`|`));
console.log(newJoin_conc1.join(` `).toUpperCase());

///spreated array
let Arr = [4, 5, 6];

let badArr = [1, 2, Arr[0], Arr[1], Arr[2]];
console.log(badArr)

let goodArr =[1, 2, ...Arr, 7];
console.log(goodArr);

//! not the same of ...Arr
let putArrOnArr = [1, 2, Arr];
console.log(putArrOnArr);

// console.log(Arr, `<...>`, ...Arr);

//* just loop > map return a new array
console.log(`##### for-of #####`);
///Looping Arrays The for-of Loop
let forOfArr = [1, -2, 3, -4, 5];
for (const [index, item] of forOfArr.entries()) {
  if (item > 0) 
    console.log(`of ${index} we have a posetive ${item}`);
  else
   console.log(`of ${index} we have a negative ${item}`);
}
console.log(`##### for-each #####`);
///Looping Arrays The for-each Loop
let forEach = [1, -2, 3, 4, -5];
forEach.forEach(function (item, index, arr) {
  if (item > 0)
     console.log(`of ${index} we have a posetive ${item}`);
  else 
  console.log(`of ${index} we have a negative ${item}`);
});

//& entries put an index and item in new array
for (const [index, item] of forOfArr.entries()) {
  console.log(`${index}: ${item}`);
}


/// find return fist element passed a condition.
//& find last start from last index.
let findName = [`sultan`, `omar`, `samer`];
const find = findName.find(function (acc) {
  return acc === 'sultan';
})
console.log(find);

const equal = findName.includes(`sultan`)
console.log(equal);

//$ return true if condition is met 
const conditionSome = findName.some(function(name){
  return name === `sultan`
})
console.log(conditionSome);

//$ return true if all element is met the condition 
const theBest = [`sultan`, `sultan`, `sultan`] 
const conditionEvery = theBest.every(function (name) {
  return name === `sultan`
})
console.log(conditionEvery);

///flat 
//$ flatMap => map then flat
const arrFlat = [1, [2, 3], 4, [5, 6, 7]]
const arrFlatDeep = [1, [[2], 3], 4, [5, [6, 7]]]
console.log(arrFlat.flat());
console.log(arrFlatDeep.flat(1));
console.log(arrFlatDeep.flat(2));

const emptyAndFill1 = new Array(8 /* size */)
console.log(emptyAndFill1);
emptyAndFill1.fill(1, 2, 6)
console.log(emptyAndFill1);

const emptyAndFill2 = [1, 2, 3, 4, 5, 6, 7]
emptyAndFill2.fill(27, 2, 5)
console.log(emptyAndFill2);

const from = Array.from({length: 7}, function(_, i){
  ///return to crrent
  return i + 1;
})
console.log(from);


const n =1234
const r = +((n + ``).split(``).sort(() => -1).join(''))
console.log(r);