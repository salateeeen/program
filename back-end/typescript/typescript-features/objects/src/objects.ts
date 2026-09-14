let objInference = {
  name: "sultan",
  age: 23,
};
//!ERROR
// obj.name = 1


let obj: {
  readonly name: string;
  age: number;
} = {
  name: "sultan",
  age: 23,
};
//!ERROR
// obj.name = "omar"
obj.age = 22;

//* not an empty object it is an any value except (null | undefind)
//* so if we need to define object without know some keys name
//*  then we can not just use {}
let val : {} = "sultan"

//$ instead we use Record<keyType, valueType> when we not know 
//$ what is the object contain
/// dynamic object keys without lose the type
//* 2 approaches are the same
let valObj :Record<string, string | number> = {}
valObj["name"] = "sultan"

type DataStort = {
  [key : string] : string | number
}
let unSchemaObj :DataStort = {}
unSchemaObj.id = "2231413"
//! unSchemaObj.1 = ERROR

/// destructure
let Prerson ={
  name: "sultan",
  age: 22
}

let PrersonReference = Prerson
let PrersonHardCopy = {...Prerson}