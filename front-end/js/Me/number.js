
console.log(`%c#####sugar#####`,`color:#ff77aa`);
console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(1e6 + 34);
console.log(10 **6);
console.log(1000000.0);
console.log(`%c#####function#####`,`color:#ccff99`);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 27000000);
console.log(Number.MIN_VALUE);
console.log(`%c#################`,`color:#22bbff`);
console.log((100).toString()); //string
console.log((100.10).toString()); //string
console.log(2004.2727.toFixed(2)); //string

console.log(`%c#################`,`color:#22bbff`);
console.log(Number("100 sultan")); //?Number
console.log(+"100 sultan"); //?Number
console.log(Number.parseInt("100 sultan")); //?Number
console.log(Number.parseInt("sultan 100")); //?Number
console.log(Number.parseInt("100.150 sultan")); //?Number
console.log(Number.parseFloat("100.150 sultan.150")); //?Number

console.log(`%c#################`,`color:#22bbff`);
console.log(Number.isInteger("100")); //!boolean
console.log(Number.isInteger(100)); //!boolean
console.log(Number.isInteger(100.15)); //!boolean
console.log(Number.isNaN(+"100 osama")); //!boolean
console.log(Number.isFinite(20)); //!boolean
console.log(Number.isFinite(20 / 0)); //!boolean


