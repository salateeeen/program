'use strict';

const randomNum = function (min, max) {
    return Math.round(Math.random() * (max - min + 1) + min)
}
const randomColor = function () {
    return `rgb(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(0, 255)})`
}

document.querySelector(`.btn`).addEventListener(`click`, function() {
    const random = randomColor()
    console.log(random);
    document.querySelector(`body`).style.backgroundColor = random
})

