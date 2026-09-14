//!! creat a new

console.log(`%c#########################`, `color:#fad000`);
let num1 = [1, 3, 5, 7];

let sum1 = num1.map(function (ele) {
    return ele + ele;
})
console.log(sum1);

let sum2 = num1.map((ele) => ele + ele)

let sum3 = num1.map(sumFun)
console.log(sum3);

function sumFun(ele) {
    return ele + ele + ele;
}

let num2 = [1, 2, 3, 4, 5, 6, 7, 8];
num2.map(function (ele /* اجباري */, index /* اختياري */, array /* اختياري */) {
    console.log(`current element: ${ele}`)
    console.log(`index: ${index}`)
    console.log(`array: ${array}`)
    console.log(`this: ${this}`)
    console.log(`%c!!!!!!!!!!!!!!!!!!!!!!!`, `color:#fad000`);

})
console.log(`%c#########################`, `color:#fad000`);
let swapping = 'SulTaN';
let swappingDone = swapping.split("").map(function (ele) {
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
}).join("");
console.log(swappingDone);

console.log(`%c#########################`, `color:#fad000`);
let invert = [100, 133, -145, -56, -65];
let invertDone = invert.map( (ele) => -ele );
console.log(invertDone);

console.log(`%c#########################`, `color:#fad000`);
console.log(parseInt(`sultan`))
console.log(isNaN(parseInt(`1`)))
let ignoreNum = `#sul2004tan`
let ignoreNumDone = ignoreNum.split("").map(function (ele) {
    return (isNaN(ele) )? ele : "" ;
    // return typeof ele === typeof "" ? ele : "" ;

}).join("");
console.log(ignoreNumDone);
