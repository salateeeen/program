console.log(`####===####`);
console.log(10 == `10`); //compare value only
console.log(10 === `10`); //compare value and type
console.log(10 === 10); //compare value and type

console.log(`####!!!####`);
console.log(10 != `10`); //!compare value only
console.log(10 !== `10`); //!compare value and type
console.log(10 !== 10); //!compare value and type

console.log(`####<<==>>####`);
console.log(10>10); //?compare value only
console.log(10>=10); //?compare value only
console.log(10<`11`); //?compare value only

console.log(`####String####`);
console.log(`sultan`===`sultan`);
console.log(`sultan`==`sultan`);
console.log(`sultan`===`omar`);
console.log(`sultan`==`omar`);
console.log(`sultan`>`omar`);
console.log(`sultan`<`omar`);
console.log(typeof `sultan`=== typeof `omar`);
console.log(typeof `sultan`== typeof `omar`);

console.log(`####!&&||####`);
console.log(!false);
console.log(!(10 == `10`));
console.log(10>10 && 10==10);
console.log(10>10 || 10==10);




console.log(`####logicalOr ||####`);
//! Falsy value: null 0 "" undefined NaN
console.log(`%c"": ${Boolean("")}`, `color:#0096c7`);
console.log(`%c0: ${Boolean(0)}`, `color:#0096c7`);
console.log(`%cundefined: ${Boolean(undefined)}`, `color:#0096c7`);
console.log(`%cnull: ${Boolean(null)}`, `color:#0096c7`);

console.log(`---||---`);
/// short circut until first true
console.log(`Or:`, true || 700);
console.log(`Or:`, 27 || 0);
console.log(`Or:`, undefined || 20);
console.log(`Or:`, null || NaN);
console.log(`Or:`, true || 33 || null || NaN);

console.log(`---&&---`);
/// short circut until first false
console.log(`And:`, true && 700);
console.log(`And:`, undefined && 20);
console.log(`And:`, true && 0);
console.log(`And:`, null && NaN);
console.log(`And:`, true && 33 && null && NaN);

if (``|| 0) {
    console.log(`log2 is truthy`);
} else{
    console.log(`log2 is falsy`);
}

console.log(`---Nullish ??---`);
//& Nullish Value: null undefined Only (Not: 0, ``)
//? ?? is the same of ||
console.log(`Nullish:`, null ?? 200);
console.log(`Nullish:`, undefined ?? 700);
console.log(`Nullish:`, undefined ?? 0);
console.log(`Nullish:`, `` ?? 400);
console.log(`Nullish:`, 0 ?? 400);

// logical assignment operators
const Null = null;
Null = Null || 0;
Null ||= 0;

Null = Null ?? 0;
Null ??= 0;

Null = Null && 0;
Null &&= 0;

