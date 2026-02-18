let User = {
    name: `sultan`,
    id: 2231413,
    age: 20,
    available: false,
    showSkils: function () {
        return this.available === false ? `dont show` : `show`;
        return User.available === false ? `dont show` : `show`;
    },
    contury: `Jordan`,
    "my Lang": [`Html`, `Css`, `JS`],
    adresses: {
        Jordan: `Zarqa'a`,
        Palestine: {
            one: `Yafa`,
            tow: `Gaza`
        }
    }
}
console.log(User.name);
console.log(User.id);
console.log(User.age);

console.log(User["my Lang"]);
//console.log(User."my Lang"); //! error
const myVar = `contury`;
console.log(User.myVar); //todo undefined
// console.log(User[myVaar]); //! error is not defined
console.log(User[myVar]); //? correct
const myLang = "my ";
console.log(User[myLang + "Lang"]); //? correct


console.log(User.adresses.Jordan)
console.log(User[`adresses`][`Palestine`][`one`])
console.log(User.showSkils())
console.log(User.available)

console.log(`%c#########################`, `color:#fad000`);
let S = {
    s: 2004,
    scope: function () {
        // لازم تستدعيها بال object
        return S.s;
    }
}
console.log(typeof S.s);
console.log(S.scope())

console.log(`%c#########################`, `color:#fad000`);
// let New = {}; نفس الاشي
let New = new Object({
    age: 32
});
New.name = `sultan`;
New.age = 20;
New.year = function year() {
    return 20 - 18;
}
console.log(New);
console.log(`%c#########################`, `color:#fad000`);
console.log(this);
console.log(this === window);
num = 27;
//! let num = 27;  لا تضاف لل window
console.log(window.num);
console.log(this.num);
function sayHello() {
    console.log(this
    )
}
sayHello();

console.log(`%c#########################`, `color:#fad000`);
// this return to owner => button
document.getElementById("button").onclick = function () {
    console.log(this)
};

let userThis = {
    age: 38,
    ageInDays: function () {
        return this.age * 365
        // return userThis.age * 365
        console.log(this);

    }
};
console.log(userThis[`age`]);
console.log(userThis.ageInDays());

console.log(`%c#########################`, `color:#fad000`);
//? protoType: زي توريث للعناصر من اوبجكت الى اوبجكت اخر
let copyObj = Object.create(userThis);
console.log(copyObj);
console.log(copyObj.age);
copyObj.age = 12;
console.log(copyObj.age);
console.log(copyObj.ageInDays());
console.log(copyObj[`ageInDays`]()); //.ال[] قبل ال () دن

console.log(`%c#########################`, `color:#fad000`);
let obj1 = {
    prop1: 1
};
let obj2 = {
    prop1: 270,
    prop2: 2,
    meth2: function () {
        return this.prop2;
    }
}
let targetObj = {
    prop1: 300,
    prop3: 3
}
//? targetObj = obj1 and obj2
let finalObj = Object.assign(targetObj, obj1, obj2, { prop4: 4 })
console.log(finalObj);
console.log(finalObj.prop1);
console.log(finalObj.prop2);
console.log(finalObj.prop3);
console.log(finalObj.meth2());
console.log(targetObj);

/// looping objects: object keys, values, and entries

let education = {
  name: `abdulraheem`,
  id: 2231413,
  collage: `computer engineering`,
  atYear: 3,
};
//* array of keys 
console.log(Object.keys(education));

//* array of values
console.log(Object.values(education));

//* array of entries
//* entries put an keys and values in new array
console.log(Object.entries(education));

/// set and get
let myInfo = {
  myName: ``,
  set setName(myName) {
    this.myName = myName;
  },
  get getName() {
    return this.myName;
  },
};
myInfo.setName = `SULTAN`;
console.log(myInfo.getName);

/// refrence
const Name = {
    name: `sutan`
}
const NameCopy = Name
NameCopy.name = `sultanCopy`
console.log(Name, NameCopy);