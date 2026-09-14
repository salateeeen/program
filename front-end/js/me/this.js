// 'use strict';
'use strict';

console.log(this);

//* with use strict undefined without strict window
const fromFun = function() {
    console.log(this);
}
fromFun()

/// this point to parent scope
const fromArrow = () => {
    console.log(this);
}
fromArrow()

const sultan = {
    name(){
        console.log(this);
    },
    age : 21
}
sultan.name();

const Undefined = sultan.name
Undefined();


