"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// the value of variable is one of them
var childs;
(function (childs) {
    childs[childs["sex"] = 20] = "sex";
    childs[childs["seven"] = 21] = "seven";
    childs[childs["eight"] = 22] = "eight";
})(childs || (childs = {}));
var level;
(function (level) {
    level[level["KIDS"] = 21] = "KIDS";
    level[level["EASY"] = 22] = "EASY";
    level[level["HARD"] = 23] = "HARD";
})(level || (level = {}));
const lvl = "easy";
if (lvl === "easy") {
    console.log(`the seconds of ${lvl} is ${level.EASY}`);
}
//# sourceMappingURL=enums.js.map