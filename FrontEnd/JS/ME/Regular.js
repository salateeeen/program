let str = 'os0 os12os os 23'
let invalidEmail = "sultmar@@@gmail.8..com" 
let validEmail = "sultan2004omar@gmail.com"
let ip = `192.168.3.1`
let url =`https://sultan.com`  

// i case sensetive
// g global
let myString1 = `Sultan is love sultan`;

let myStringRe1 = /sultan/ig;
console.log(myString1.match(myStringRe1));

let myStringRe2 = new RegExp(`sultan`, `ig`)
console.log(myString1.match(myStringRe2));

let myStringRe3 = /sltan/ig;
console.log(myString1.match(myStringRe3)); //null

let tld = `Com Org Net Edu Io`;
let tldRe = /(edu|com|info)/ig;
console.log(tld.match(tldRe));

let nums1 = `1234567890`;
let numsRe1 = /[0-9]/ig;
console.log(nums1.match(numsRe1));

let notNumsIn = `1234567890`;
let notNumsInRe = /[^0-5]/ig;
console.log(notNumsIn.match(notNumsInRe));

let notNums = `1!2@$56^7%89.0`;
let notNumsRe = /[^0-9]/ig;
console.log(notNums.match(notNumsRe));

let practice = `su1 su27su su2 su4su`;
let practiceRe = /su[0-9]su/ig;
console.log(practice.match(practiceRe));

let myString2 = `a-zfsSD5e4tEc^CAtFD45#$^$#ER`;

let atozSmall = /[a-z]/g;
console.log(myString2.match(atozSmall));

let notAtozSmall = /[^a-z]/g;
console.log(myString2.match(notAtozSmall));

let atozCapital = /[A-Z]/g
console.log(myString2.match(atozCapital));

let notAtozCapital = /[^A-Z]/g
console.log(myString2.match(notAtozCapital));

let atoz1 = /(a-z)/ig
console.log(myString2.match(atoz1));

// [A-Z]
let atoz2 = /[a-zA-Z]/ig
console.log(myString2.match(atoz2));

let atoz3 = /[a-z][A-Z]/ig
console.log(myString2.match(atoz3));

// [^a-zA-Z]
let notAtoz = /[^A-Z]/ig
console.log(myString2.match(notAtoz));

let AandCandE = /[ACE]/ig
console.log(myString2.match(AandCandE));

let notAandCandE = /[^ACE]/ig
console.log(myString2.match(notAandCandE));

let spicial1 = /[^a-zA-Z0-9]/g
console.log(myString2.match(spicial1));

//^^
let spicial2 = /[^a-z^A-Z0-9]/g
console.log(myString2.match(spicial2));

let spicial3 = /[!@#$%]/g
console.log(myString2.match(spicial3));

//todo character classes 
let email = "sultmar@@@gmail.8.com sultan@gmail.com o@sds31.com 2@7.org" 

//? w d . الهم اندكس واحد بس

// . all except newLine
let dot = /./g;
console.log(email.match(dot));

// \w [a-zA-Z0-9]
let word = /\w/g;
console.log(email.match(word));

//! \W == ^\w
let notWord = /\W/g;
console.log(email.match(notWord));

// \d [0-9]
let digit = /\d/g;
console.log(email.match(digit));

//! \D == ^\d
let notDigit = /\D/g;
console.log(email.match(notDigit));

// \s [` `]
let space = /\s/g;
console.log(email.match(space));

//! \S == ^\s
let notSpace = /\S/g;
console.log(email.match(notSpace));

let vlaid1 = /\w@\w.(com|org|edu)/ig
console.log(email.match(vlaid1));

let vlaid2 = /\w+@\w+.(com|org|edu)/ig
console.log(email.match(vlaid2));

// \b start and end with
let myString3 = `sultan 2sultan sultan7 2sultan7`

let bRe1 =/\bsultan/ig
console.log(myString3.match(bRe1));

let bRe2 =/sultan\b/ig
console.log(myString3.match(bRe2));

let bRe3 =/(\bsultan|sultan\b)/ig
console.log(myString3.match(bRe3));

//! \B == ^\b
let bRe4 =/\Bsultan/ig
console.log(myString3.match(bRe4));

let bRe5 =/\Bsultan\B/ig
console.log(myString3.match(bRe5));

let test1 =/sultan/ig
let test2 = /omar/ig
console.log(test1.test(myString3))
console.log(test2.test(myString3))

let quantifiers1 = `sultan#`;

let quantifiersRe1 = /\w#/;
console.log(quantifiers1.match(quantifiersRe1));

// +  (one or more)
let quantifiersRe2 = /\w+#/;
console.log(quantifiers1.match(quantifiersRe2));

let nums2 = '10 02 00 060 0770'

let numsRe2 = /0\d0/ig;
console.log(nums2.match(numsRe2));

// *  (zero or more)
let numsRe3 = /0\d*0/ig;
console.log(nums2.match(numsRe3));

let http = `https:// http://`

let httpRe1 = /https:\/\//ig;
console.log(http.match(httpRe1));

// ? (zero or one) 
let httpRe2 = /https?:\/\//ig;
console.log(http.match(httpRe2));

let serials = 's333s s4444s s55555s s666666s s7777777s'
console.log(serials.match(/s\d{3}s/g));
console.log(serials.match(/s\d{4,6}s/g));
console.log(serials.match(/s\d{4,}s/g));

let quantifiers2 = `sultan is the best`;

// ^ start with...
console.log(/^sultan/.test(quantifiers2));
console.log(/^is/.test(quantifiers2));

// ^ end with...
console.log(/best$/.test(quantifiers2));
console.log(/^the/.test(quantifiers2));


let myString4 = `sultan 2sultan 8sultan7 9sultan7`
// ?= followed by
console.log(myString4.match(/\d\w{6}(?=7)/g));

// ?! not followed by
console.log(myString4.match(/\d\w{6}(?!7)/g));

let myString5 = `3sulta7n`
console.log(myString5.match(/\d\w/));
console.log(myString5.match(/\d\w/g));

let replace = `@ is the best @`;
console.log(replace);
console.log(replace.replace(`@`, `sultan`));
console.log(replace.replaceAll(`@`, `sultan`));
