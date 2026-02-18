`use strict`;

const creatI = document.createElement(`div`);
const creatT = document.createElement(`div`);
creatI.innerHTML =`<strong>ddd</strong>`
creatT.textContent =`<strong>ddd</strong>`
console.log(creatI);
console.log(creatT);
document.body.append(creatT)
document.body.append(creatI)
document.body.insertAdjacentHTML(`afterbegin`,`<strong>ddd</strong>`)
document.body.insertAdjacentText(`beforeend`,`<strong>ddd</strong>`)

console.log(window);
console.log(document);