const arrTypeAssignment: string[] = ["1", "2", "three"];
const arrTypeInference = ["1", "2", "three"];
//!ERROR
// arrTypeInference.push(30)

const arrTypeAssignmentStrorNum: (string | number)[] = [1, "2", "three"];
const arrTypeInferenceStrorNum = [1, "2", "three"];
const arrGenerecs: Array<string | number> = [1, "2", "three"];

const arr2: string[][] = [["1", "2"], ["three"]];

let arrReadOnly: readonly string[] = [];

/// let arrAsConst: readonly ["admin", "guest", "user"]
let arrAsConst = ["admin", "guest", "user"] as const;

// arrReadOnly = ["string"]
// arrReadOnly.push("2");

// arrAsConst = ["string"]
// arrAsConst.push("2")
