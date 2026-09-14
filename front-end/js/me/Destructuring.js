`use strict`
let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFrinds = [`sultan`, `omar`, `elias`, `asal`, [`amal`, [`zyad`, `osama`]]];

[a, b, c, d, e = `zaid`] = myFrinds;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log(`%c#########################`, `color:#fad000`);
const [x, y, , z] = myFrinds;
console.log(x);
console.log(y);
console.log(z);

const [, , , , [, [, u]]] = myFrinds;
console.log(u);

console.log(`%c#########################`, `color:#fad000`);
let num1 = 2;
let num2 = 1;

// let temb =num1;
// num1 = num2;
// num2 = temb
//? swap
[num1, num2] = [num2, num1]

console.log(num1);
console.log(num2);

console.log(`%c#########################`, `color:#fad000`);
const toDestruct = function (a, b){
    return [a, b]
}
const [w, v] = toDestruct(`sultan`, `omar`)
console.log(w, v);

console.log(`%c#########################`, `color:#fad000`);
let sultan = {
    id: 2000805181,
    age: 20,
    city: `Az-Zarqa`,
    skils: {
        html: `html`,
        css: `css`
    },
    subjects: [`data`, `js`, `control`]

};

// let id;
// let age;
// let city;
/// ({id, age, city} = sultan)// لازم افواس اذا ما حطيناهم بعتبرو block

let { id: i, age, city, skils: { html: h, css }, color: co = `white` } = sultan;

console.log(i);
console.log(age);
console.log(city);
console.log(h);
console.log(co);

console.log(`%c#########################`, `color:#fad000`);

let { html: ht, css: cs } = sultan.skils;
console.log(ht);
console.log(cs);

console.log(`%c#########################`, `color:#fad000`);
function showSultan({ id: i = 1, age, city, skils: { html: h, css } } = sultan) {
    console.log(i);
    console.log(age);
    console.log(city);
    console.log(css);
}
showSultan(sultan);

console.log(`%c#########################`, `color:#fad000`);

let { age: ag1 = [], skils: { css: cs1 }, subjects: [one, ,three], none = [`default value`] } = sultan;
console.log(ag1);
console.log(cs1);
console.log(one);
console.log(three);
console.log(none);