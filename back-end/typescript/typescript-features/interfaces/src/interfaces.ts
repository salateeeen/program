/// interface can used to be a type fro objects
/// or extends for another interfaces  or implements
/// in a classes

interface User {
  readonly name: string;
  age: number;
}

let user: User = {
  name: "sultan",
  age: 23,
};

//* update the same interface
interface C {
  name: string;
}

interface C {
  age: number;
}

let user2: C = {
  name: "sultan",
  age: 23,
};

interface Admin {
  protect: boolean;
}

//* intersection
interface D extends C, Admin {
  id: string;
}

let user3: D = {
  name: "sultan",
  age: 23,
  id: "2000805181",
  protect: true,
};

