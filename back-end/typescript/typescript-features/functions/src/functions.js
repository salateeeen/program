"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function giveActionButtons(btns) {
    console.log(btns.up, btns.down, btns.left);
}
giveActionButtons({ down: 1, up: "sultan" });
function compare(n1, n2) {
    if (n1 === n2)
        return 0;
    if (n1 > n2)
        return 1;
    return -1;
}
compare(1, 3);
function returnUndefind() {
    console.log("sultan is the best");
    return;
}
function returnIsNeverReturn() {
    throw "sultan is the best";
    // return;
}
//# sourceMappingURL=functions.js.map