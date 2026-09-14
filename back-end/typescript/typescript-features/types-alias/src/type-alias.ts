type A = {
  one: boolean;
  two: number;
};

type B = {
  three: string;
};

type union = A & B;

type userRoel = `admin` | `guest` | `user`;

type stAndNum = string | number;
let var1: stAndNum = 2;
var1 = "1";
