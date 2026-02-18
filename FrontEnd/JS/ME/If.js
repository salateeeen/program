let priceOr = 100;
let priceAnd = 100;
let priceTr = 100;
let discount = true;
let discountAmount = 30;
let country = `jordan`;
let sudent = true;
let gender = `male`;

console.log(`####if{}Else####`); //if OR
if (discount === true) {
  priceOr -= discountAmount;
} else if (country === `jordan`) {
  priceOr -= discountAmount + 10; //?(+)
} else if (country === `palestine`) {
  priceOr = 0;
} else priceOr -= discountAmount + 40;
console.log(priceOr);


console.log(`####if{if}####`); //if AND
if (discount === true) {
  priceAnd -= discountAmount;
  if (country === `jordan`) {
    priceAnd -= 10;
    if (sudent === true) {
      priceAnd -= 20;
    }
  }
}
console.log(priceAnd);


console.log(`####Ternary####`);
country === `jordan`
  ? console.log((priceTr -= discountAmount))
  : console.log((priceTr -= 10));
let theGender = gender === `male` ? `Mr` : `Mrs`;
console.log(`${theGender} sultan`);
console.log(`${sudent === true ? `Eng` : `Med`} goat`);
let price =
  country === `palestine`
    ? (priceTr = 0)
    : country === `jordan`
      ? (priceTr -= discountAmount)
      : (priceTr = 27);
console.log(price);


console.log(`####Switch####`);
let day = 9;
switch (day) { //day === 9 STRICT
  case 0:
    console.log(`saturday`)
    break;
  case 1:
    console.log(`sunday`)
    break;
  case 2:
  case 9:
    console.log(`monday`)
    break;
  case 3:
    console.log(`tuesday`)
    break;
    default:
    console.log(`other`)
}



