//!! creat a new

console.log(`%c#########################`, `color:#fad000`);
let friends = [`asal`, `amal`, `ahmad`, `zain`, `elias`];
let friendsA = friends.filter(function (ele){
  return ele.startsWith(`a`);
})
console.log(friendsA);


console.log(`%c#########################`, `color:#fad000`);
let num =[1, 23, 24, 255,56, 46];
let even = num.filter(function (ele) {
    return ele%2 === 0;
})
console.log(even);


console.log(`%c#########################`, `color:#fad000`);
let mix = `A13BS2ZX`;
let nums = mix.split(``).filter(function (ele) {
    return Number.isInteger(parseInt(ele));
})
console.log(nums)

let sum = nums.map(function (ele){
    return ele * ele;
})
console.log(sum);
