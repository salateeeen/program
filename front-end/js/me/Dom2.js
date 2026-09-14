let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-costum");
let myText = document.createTextNode("product one");
let myComment = document.createComment("createComment");

myElement.className = "product";
myElement.setAttributeNode(myAttr); //?بدون قيمة
myElement.setAttribute("data-test", "testing"); //!لازم تعطيها قيمة

myElement.append(myComment);
myElement.append(myText);
document.body.append(myElement);


console.log(`%c#########################`, `color:#fad000`);


for (let i = 0; i < 2; i++) {

    let myDiv = document.createElement("div");
    let myH = document.createElement("h3");
    let myP = document.createElement("p");
    let myTextDiv = document.createTextNode(`myTextDiv`);
    let myTextH = document.createTextNode("myTextH");
    let myTextP = document.createTextNode("myTextP");

    myDiv.append(myTextDiv);
    myH.append(myTextH);
    myP.append(myTextP);

    myH.append(myP);
    myDiv.append(myH);

    document.body.appendChild(myDiv);
}


let count = 0;
const target = function (event) {
    count++;
    if (count === 3) {
        myElement.removeEventListener(`click`, target)
    }
    console.log(count);
}
myElement.addEventListener(`click`, target);

