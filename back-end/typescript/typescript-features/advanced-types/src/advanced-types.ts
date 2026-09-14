/// derived types from values

const constant = "sultan";
//* "sultan" because it is constant
type cons = typeof constant;

let variable = "sultan";
//* string because it is mutable
type var1 = typeof variable;

const user = {
  name: "sultan",
  age: 1,
};
type User = typeof user;

function print(user: User) {
  console.log(user.name, user.age);
}

/// "name" | "age" like a alternative enums
type validKeys = keyof User;

function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
  const val = obj[key];
  if (!val) {
    throw new Error("can not access this key");
  }
  return val;
}

getValue(user, "age");

/// indexed access types
type Name = User["name"];

type People = { name: string }[];
type Person = People[number];

/// mapped types

type Operation = {
  add: (a: number, b: number) => number;
  sub: (a: number, b: number) => number;
};

let mathOperations: Operation = {
  add(a: number, b: number) {
    return a + b;
  },
  sub(a: number, b: number) {
    return a - b;
  },
};

// type Results = {
//   add: number;
//   sub: number;
// };

type Results<T extends object> = {
  readonly [Key in keyof T]: number
  // [Key in keyof T]: number
}

let mathResults: Results<Operation> = {
  add: mathOperations.add(1, 5),
  sub: mathOperations.sub(1,3),
};
//! Error because readonly
// mathResults.add = 10

/// template literal 

type WritePermissions = 'noWrite' | 'write'
type ReadPermissions = 'noRead' | 'read'
type FilePermissions = `${WritePermissions}-${ReadPermissions}`

type DataFile = {
  data : string,
  permissions: FilePermissions
}

type DataEventNames = `${keyof DataFile}Changed`

type DataEvents = {
  [Key in DataEventNames] : () => void
}

/// conditional types 
//$ T extends any[] if array T[number] else T 
type GetElementType<T> = T extends any[] ? T[number] : T


type FullName = {firstName: string, lastName: string}
type FullNameOrNothing<T> = T extends FullName ? string : never

function getFullName<T extends object>(person : T): FullNameOrNothing<T> {
  if('firstName' in person && 'lastName' in person && person.firstName && person.lastName){
    return `${person.firstName} ${person.lastName}` as FullNameOrNothing<T>
  }
  throw new Error("there is no first name or last name.")
}