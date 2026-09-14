`use strict`;

/// Date
const now = new Date();
console.log(new Intl.DateTimeFormat(`en-US`).format(now));

const myBirthDay = new Date(`2004/2/7`);
console.log(new Intl.DateTimeFormat(`ar-JO`).format(myBirthDay));

const imBecomeMiloneer = new Date(2030, 1, 7, 10, 30, 45); 

const optionsDate = {
  hour: `numeric`,
  minute: `numeric`,
  day: `2-digit`,
  month: `2-digit`,
  year: `numeric`,
  weekday: `long`,
};
console.log(new Intl.DateTimeFormat(`ar-JO`, optionsDate).format(imBecomeMiloneer));
console.log(new Intl.DateTimeFormat(`en-cr`, optionsDate).format(imBecomeMiloneer));
console.log(new Intl.DateTimeFormat(`pt-PT`, optionsDate).format(imBecomeMiloneer));

const myWebLang = navigator.language;
console.log(new Intl.DateTimeFormat(myWebLang).format(imBecomeMiloneer));

/// number

let num = 44334543.54;

const optionsNum = {
  //?package
  //!style: `unit`,
  //!unit: `celsius`,
  
  //?package
  style: `currency`,
  currency: `USD`,
  // currency: `jod`,

  // useGrouping: false,
};
console.log(new Intl.NumberFormat(`ar-SY`, optionsNum).format(num));
console.log(new Intl.NumberFormat(`en-US`, optionsNum).format(num));
