'use strict';

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        // console.log(this);
        console.log(2037 - this.year);

        // Solution 1
        // const self = this; // self or that
        // const isMillenial = function () {
        //   console.log(self);
        //   console.log(self.year >= 1981 && self.year <= 1996);
        // };

        // Solution 2
        //* because this in arrow function point to parent scope
        // const isMillenial = () => {
        //     console.log(this);
        //     console.log(this.year >= 1981 && this.year <= 1996);
        // };
        // isMillenial();

        // Solution 3
        const isMillenial = function () {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial.call(this);

        // const isMillenial = function () {
        //     console.log(this);
        //     console.log(this.year >= 1981 && this.year <= 1996);
        // };
        // //! error isMillenial() not function in jonas object
        // this.isMillenial();

    },

    greet: () => {
        /// 'this' here point to window because Jonas object not a block scope and arrow point to the parent
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};
jonas.calcAge();
jonas.greet();

// arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
    //! error
    // console.log(arguments);
    return a + b;
};
addArrow(2, 5, 8);
