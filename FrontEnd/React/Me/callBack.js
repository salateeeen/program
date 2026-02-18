const callBack = function (opp) {
    return opp
}

const callAndPassValue = function (cB) {
    const string = cB(`string`)
    const num = cB(12345)
    console.log(string, num);
}
callAndPassValue(callBack)