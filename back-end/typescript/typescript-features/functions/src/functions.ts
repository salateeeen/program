type Buttons = {
  up: string;
  down: number;
  left?: "";
};

function add(n1: number, n2Inference = 4): number {
  return n1 + n2Inference;
}
add(1, 3);

function addArr(...numbers: number[]): number {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
}

addArr(1, 3, 3, 5, 6);

function addInference(n1: number, n2Inference = 4) {
  return n1 + n2Inference;
}
addInference(1, 3);

function giveActionButtons(btns: Buttons) {
  console.log(btns.up, btns.down, btns.left);
}

giveActionButtons({ down: 1, up: "sultan" });

type enumurable = -1 | 0 | 1;

function compare(n1: number, n2: number): enumurable {
  if (n1 === n2) return 0;
  if (n1 > n2) return 1;
  return -1;
}
compare(1, 3);

/// return undefind
function returnUndefind(): void {
  console.log("sultan is the best");
  return;
}
/// doesnt return anything
function returnIsNeverReturn(): never {
  throw "sultan is the best";
  // return;
}

/// define a function type in java script
function performAJobFun(callBack: Function) {
  //...
  callBack();
}
///specificly
function performAJob(callBack: () => string) {
  //...
  callBack();
}

type User = {
  name: string;
  ///define a function
  greet: () => string;
};

let user: User = {
  name: "sultan",
  ///implement a function
  greet() {
    return `hello ${this.name}`;
  },
};

/// function overloads to let a call knows what is expected returns
function getLength(val: string): string;
function getLength(val: any[]): number;

function getLength(val: string | any[]): string | number {
  if (typeof val === "string") {
    return `${val.split(' ').length} words`
  }
  return val.length
}

//* we can use assertion but overload is more practical
// const numberOfWords = getLength("sultan omar is the best") as string
const numberOfWords = getLength("sultan omar is the best")
const lengthOfArray = getLength(["sultan", "omar", "is", "the", "best"])
numberOfWords.trim() /// knew its string
