/// tell the placeholder its must exists from this values or this keys
function retType<T extends string | number, G extends string | number>(
  val1: T,
  val2: G,
): string {
  return `${val1}, ${val2}`;
}

console.log(retType<string, number>("sultan", 32));

/// build your own type
type DataStore<T> = {
  [key: string]: T;
};

let dataStore: DataStore<number | string> = {};
dataStore.name = "sultan";
dataStore.age = 22;

class User<T> {
  constructor(public id: T) {}
}
const user1 = new User(2231413);
const user2 = new User("2231413");

