const tuple: readonly [string, number] = ["sultan", 22];
// tuple.push(2) without readonly we can manpulate

const possibleResults: [number, number] = [1, -1]
//!ERROR
// possibleResults= ["string", 2] 
