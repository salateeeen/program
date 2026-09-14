//!! creat a new

// اذا اعطيتها قيمة بتوخذها وبتبلش ال indexCurrent من 1
num1 = [10, 30, 20, 50];
let sum1 = num1.reduce(function(previos, current, indexCurrent,array) {
    console.log(`previos: ${previos}`);
    console.log(`current: ${current}`);
    console.log(`indexCurrent: ${indexCurrent}`);
    console.log(`array: ${array}`);
    console.log(`%c!!!!!!!!!!!!!!!!!!!!!!`, `color:#fad000`);
    return current + previos;
})

// اذا اعطيتها قيمة بتوخذها وبتبلش ال indexCurrent من 0
console.log(`%c##############################`, `color:#fc0000`);
num2 = [10, 30, 20, 50];
let sum2 = num2.reduce(function(previos, current, indexCurrent,array) {
    console.log(`previos: ${previos}`);
    console.log(`current: ${current}`);
    console.log(`indexCurrent: ${indexCurrent}`);
    console.log(`array: ${array}`);
    console.log(`%c!!!!!!!!!!!!!!!!!!!!!!`, `color:#fad000`);
    return current + previos;
}, 5)

console.log(`%c##############################`, `color:#fc0000`);
let theBiggest = [`elias`, 1, `omar`, `sultan`, `asal`, `mohammed`];
let check = theBiggest.reduce(function(previos, current) {
    console.log(`previos: ${previos}`);
    console.log(`current: ${current}`);
    console.log(previos.length > current.length ? previos : current );
    console.log(`%c!!!!!!!!!!!!!!!!!!!!!!`, `color:#fad000`);
    //! return to be a previos
    return previos.length > current.length ? previos : current ;
})
console.log(check);

console.log(`%c##############################`, `color:#fc0000`);
let removeAt = [`S`, `@`, `U`, `@`, `L`, `T`, `A`, `@`, `N`];
let remove = removeAt.filter(function(ele) {
    return !(ele.includes(`@`)) ;
})
console.log(remove);

let concat = remove.reduce(function(previos, current) {
    return `${previos}${current}` ;
})
console.log(concat);
