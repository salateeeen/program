`use strict`;

///Formatting Date
//? now date
console.log(new Date());
//? 1/1/1970
console.log(new Date(0));
//? 3 days after (0) in ms
console.log(new Date(259200000));
//? month is seem month

//* month/date/year
console.log(new Date(`December 25, 2004`));
console.log(new Date(`12, 25, 2004`));
console.log(new Date(`12-25-2004`));
//* year/month/date
console.log(new Date(`2004/2/7`));
console.log(new Date(`2004-2-7`));
console.log(new Date(`2004, 2, 7`));
//* year/month
console.log(new Date(`1975, 3`));
console.log(new Date(`75, 3`));
//* year
console.log(new Date(`1967`));
console.log(new Date(`67`));

//? month in zero based
console.log(new Date(2004, 1, 7, 10, 30, 45));
//? edit month rely on number of days 
console.log(new Date(2028, 1, 31));
//? in isos 
console.log(new Date(`2004-02-07T08:30:45.000Z`));



///get
const method = new Date(`2004-02-07T08:30:45.000Z`);
console.log(method.getFullYear());
//? month in date zero based
console.log(method.getMonth());
//* debend on wake and **sunday** is 0
console.log(method.getDay());
//? num of day debend on month
console.log(method.getDate());

console.log(method.getHours());
console.log(method.getMinutes());
console.log(method.getSeconds()); 

/// write a date with international standered
console.log(method.toISOString());

/// time dambed based 1/1/1970 
console.log(method.getTime());
console.log(+method);
console.log(Number(method));
console.log(Date.now());

/// set
method.setTime(0);
console.log(method);

method.setFullYear(2004);
method.setMonth(1);
method.setDate(7);
console.log(method);



