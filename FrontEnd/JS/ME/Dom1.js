console.log(`%c#########################`, `color:#fad000`);
let myIdElement = document.getElementById("my-div");
console.log(myIdElement);

let myTagElement = document.getElementsByTagName("p");
console.log(myTagElement[0]);

let myClassElement = document.getElementsByClassName("my-span");
console.log(myClassElement[0])

let myQueryElement1 = document.querySelector(".my-span"); // بجيب اول عنصر بس
console.log(myQueryElement1)

let myQueryElement2 = document.querySelector("#my-div");
console.log(myQueryElement2)

let myQueryAllElement = document.querySelectorAll(".my-span"); // بتجيب كل العناصر
console.log(myQueryAllElement)

console.log(`%c#########################`, `color:#fad000`);
console.log(document.title)
console.log(document.body)
console.log(document.forms[0].one.value)
console.log(document.links[0].href)

console.log(`%c#########################`, `color:#fad000`);
console.log(myQueryElement1.innerHTML);
console.log(myQueryElement1.textContent);

console.log(`%c#########################`, `color:#fad000`);
// document.images[0].src="../media/fire.jpg";
console.log("images: ");
document.images[0].title = "img";
document.images[0].id = "img";
document.images[0].className = "pic";
document.images[0].alt = "alternate"

console.log(`%c#########################`, `color:#fad000`);
let myLink = document.querySelector(".link");
console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("id"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("class", "a");
myLink.setAttribute("id", "a");
myLink.setAttribute("href", "x.com");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("id"));
console.log(myLink.getAttribute("href"));

console.log(`%c#########################`, `color:#fad000`);
console.log(myTagElement[0].attributes);

if (myTagElement[0].hasAttribute("data-src")) {
    if (myTagElement[0].getAttribute("data-src") === "") {
        myTagElement[0].remove("data-src");
    } else myTagElement[0].setAttribute("data-src", "alt")
} else "not found";

if (myTagElement[0].hasAttributes()) {
    console.log("has attributes");
}

console.log(`%c#########################`, `color:#fad000`);
let myBtn = document.getElementById("btn");

myBtn.onclick = function () {
    console.log(`onclick`);
}
myBtn.oncontextmenu = function () {
    console.log(`oncontextmenu`);
}
myBtn.onmouseenter = function () {
    console.log(`onmouseenter`);
}
myBtn.onmouseleave = function () {
    console.log(`onmouseleave`);
}
window.onscroll = function () {
    console.log(`onscroll`);خ
}
window.onresize = function () {
    console.log(`onresize`);
}

let myText = document.getElementsByClassName("text");
myText[0].onfocus = function () {
    console.log("focus")
}
myText[0].onblur = function () {
    console.log("blur")
}

let mySubmit = document.getElementById("submit");
mySubmit.onsubmit = function () {
    console.log(`submit`);
}

console.log(`%c#########################`, `color:#fad000`);
document.links[2].onclick = function (event) {
    console.log(event);
    event.preventDefault();
}

console.log(document.forms[3]);

document.links[2].onclick = function (event) {
    console.log(event);
    event.preventDefault();
}


console.log(`%c#########################`, `color:#fad000`);
let inputName = document.querySelector("#name");
let inputAge = document.querySelector("#age")

document.forms[5].onsubmit = function (event) {
    let age = false;
    let name = false;
    if (inputName.value !== "" && inputName.value.length <= 10) {
        name = true;
    }
    if (inputAge.value !== "") {
        age = true;
    }
    if (name === false || age === false) {
        event.preventDefault();
    }
}

console.log(`%c#########################`, `color:#fad000`);
let inputOne = document.querySelector("#one");
let inputTwo = document.querySelector("#two");

inputOne.onblur = function () {
    inputTwo.focus();
}

console.log(`%c#########################`, `color:#fad000`);
let myDiv = document.querySelector("#myDiv");

console.log(myDiv.classList);
console.log(myDiv.classList.contains("four"));
console.log(myDiv.classList.contains("five"));
myDiv.classList.add("sex", "seven");
myDiv.classList.remove("one");
myDiv.classList.toggle("nine"); // المش موجود بضيفه
myDiv.classList.toggle("sex"); // الموجود بشيله

console.log(`%c#########################`, `color:#fad000`);
let myCss = document.querySelector("#css");
myCss.style.color = " red";
myCss.style.fontWeight = " bold";
myCss.style.cssText = "font-weight:bold; color:green; opacity:0.75"

// inline style 
myCss.style.removeProperty("color")
myCss.style.setProperty("color","blue","important")

// css style sheet
//! document.styleSheets[0].rules[0].style.setProperty("color","blue","important")
//! document.styleSheets[0].rules[0].style.setProperty("backgroundColor","blue","important")
//! document.styleSheets[0].rules[0].style.removeProperty("color");
//! console.log(document.styleSheets[0].rules[0]);
