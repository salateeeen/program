//!ERRORS
let numTypeAssignment: number = 27;
// numTypeAssignment = "sultan"

let numTypeInference = 27;
// numTypeInference = "sultan"

let any; /// anyInference

/// in unkown we need to check some types explicitly
function unknown(val: unknown) {
  if (
    typeof val === "object" &&
    !!val &&
    "log" in val &&
    typeof val.log === "function"
  )
    val.log();
}

/// union types
let combined: string | number = "sultan";
combined = 1;

/// null and undefined are special types and not equal each other
type specialTypes = null | undefined;

/// type of ele can be htmlElement or null
let ele = document.getElementById("my-ele");

if (!ele) {
  throw new Error("type of ele is null");
}

/// type of ele here is only htmlElement
ele;

/// !: just a convinenice for type script till hem that
/// the value cant be null
let ele2 = document.getElementById("my-ele")!;


let input = ""
/// ?? works just for null & undefind
let isProvideInput = input ?? false