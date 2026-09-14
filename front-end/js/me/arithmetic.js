// جمع عادي
console.log(10 +10);
//! لأنه في كونكاتينيت
console.log(10 +"10");
console.log(20 +"sultan");
console.log(true +"sultan");
console.log(true +"10");
console.log(2+3+4+"10");
// طرح عادي
console.log(20-10);
// لأنه ما في كونكاتينيت
console.log(`33 -"10"`,33 -"10");
console.log(`33 *"10"`,33 *"10");
console.log(`33 /"10"`,33 /"10");
console.log(`33 **"10"`,33 **"10");
console.log(`"2"-"3"-"4"-12+"1"`, "2"-"3"-"4"-12+"1");
console.log(`33 "sultan"`,20 -"sultan");
console.log(`true -"sultan"`, true -"sultan");
console.log(true -"10");

console.log(7*2);
console.log(2 ** 4); // 2 to the power 4
console.log(10 /3);
console.log(11%3);
let x =5;
let y =5;
console.log(++x);
console.log(y++);
y+=5; //y=y+5
console.log(y);

console.log(`%c#####UnaryPlus#####`,`color:#fd9927`);
console.log(+100);
console.log(+`100`);
console.log(+`-100`);
console.log(+`15.5`);
console.log(+`sultan`);
console.log(+0xf5);
console.log(+null);
console.log(+false);
console.log(+true);

console.log(`%c#####UnaryNegation#####`,`color:#2799fd`);
console.log(-100);
console.log(-`100`);
console.log(-`-100`);
console.log(-`15.5`);
console.log(-`sultan`);
console.log(-0xf5);
console.log(-null);
console.log(-false);
console.log(-true);

console.log(`####++ --####`);
//! w is incrase for the after w
let w =5; 
console.log(++w + w++ + w); // 18 /19 w=7
console.log(w);
let u ='5';
console.log(++w + u-- + w - ++w);
console.log(++w + --u * w - ++w);

