console.log(`##########For##########`);
let nameLoop = [`sultan`, `omar`, `elias`, `zain`];

for (i = 0; i < nameLoop.length; i++) {
    console.log(nameLoop[i]);
}

let nameOnly = [1, 2, `sultan`, `omar`, `elias`, 27, `zain`];
let names = [];
let nums = [];
for (i = 0; i < nameOnly.length; i++) {
    if (typeof nameOnly[i] === typeof "string") {
        names.push(nameOnly[i]);
    } else nums.push(nameOnly[i]);
}
console.log(nameOnly);
console.log(names);
console.log(nums);

console.log(`%c##########nestedFor##########`, `color:#fad000`);
let products = [`kyeboard`, `mouse`, `pen`, `ipad`];
let colors = [`red`, `green`, `black`];
let models = [2023, 2024];

for (i = 0; i < products.length; i++) {
    console.log(`#`.repeat(20))
    console.log(` `.repeat(10 - (products[i].length / 2)) + products[i])
    console.log(`#`.repeat(20))
    console.log(`%ccolors:`, `color:#ff57ab`)
    for (j = 0; j < colors.length; j++)
        console.log(`- ` + colors[j])
    console.log(`%cmodels:`, `color:#57fabf`)
    for (k = 0; k < models.length; k++)
        console.log(`.. ` + models[k]);
}

console.log(`%c##########loopControl##########`, `color:#fad000`);
for (i = 0; i < products.length; i++) {
    console.log(products[i])
    if (products[i] === `pen`) {
        break;
    }
}

console.log(`%c##############################`, `color:#fad000`);
let numOnly = [1, 2, `sultan`, `omar`, `elias`, 27, `zain`];
for (i = 0; i < numOnly.length; i++) {
    if (typeof numOnly[i] === `string`) {
        continue;
    }
    console.log(numOnly[i])
}

console.log(`%c##############################`, `color:#fad000`);
colors = [`blue`, `red`, `green`, `black`];
mainLoop: for (i = 0; i < products.length; i++) {
    console.log(products[i]);
    nestedLoop: for (j = 0; j < colors.length; j++) {
        console.log(`- ` + colors[j]);
        if (colors[j] === `green`) {
            break mainLoop;
        }
    }
}

console.log(`%c##############################`, `color:#fad000`);
mainLoop: for (i = 0; i < products.length; i++) {
    console.log(products[i]);
    nestedLoop: for (j = 0; j < colors.length; j++) {
        console.log(`- ` + colors[j]);
        if (colors[j] === `red`) {
            break nestedLoop;
        }
    }
}

// نفس الي فوق
console.log(`%c##############################`, `color:#fad000`);
for (i = 0; i < products.length; i++) {
    console.log(products[i]);
    for (j = 0; j < colors.length; j++) {
        console.log(`- ` + colors[j]);
        if (colors[j] === `red`) {
            break;
        }
    }
}

console.log(`%c#######addProducts#######`, `color:#fad000`);
products = [`kyeboard`, `mouse`, `pen`, `ipad`, `macOs`];
colors = [`blue`, `red`, `green`, `black`];
models = [2023, 2024];
let showCount = 3;
for (let i = 0; i < showCount; i++) {
    document.write(`<div>`)
    document.write(`<h1>${i + 1}- ${products[i]} </h1>`)

    for (let j = 0; j < colors.length; j++) {
        document.write(`<p> ${colors[j]} </p>`)
    }

    for (let k = 0; k < models.length; k++) {
        document.write(`<p> ${models[k]} </p>`)
    }

    document.write(`</div>`)
}

console.log(`%c#######While#######`, `color:#fad000`);
products = [`kyeboard`, `mouse`, `pen`, `ipad`, `macOs`];
i = 0;
while (i < products.length) {
    console.log(products[i]);
    i++;
}

j = 0;
nums = [1, 23, 34, 45, 67];
while (true) {
    j += 2;
    console.log(nums[j]);
    if (j > nums.length) {
        break;
    }
}

console.log(`%c#######doWhile#######`, `color:#fad000`);
do {
    console.log(`do while`);
} while (false);