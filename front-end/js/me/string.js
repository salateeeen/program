console.log('sultan "omar"');
console.log("sultan 'omar'");
console.log("sultan 'omar' ");
console.log("sultan omar ");
console.log("sultan \nomar");
let a = `sultan`;
let b = `omar`;
console.log(a + " " + b);
console.log(a, b);
console.log(`${a} ${b}`);
console.log(`  
    <div>
      <h1>sultan is the best</h1>
    </div>`);

console.log(`%c#####Length#####`, `COLOR:#F7F777`);
let nameSultan = `sultan`;
console.log(nameSultan);
console.log(nameSultan.toLocaleUpperCase());
console.log(nameSultan.length);
console.log(nameSultan[0]);
console.log(nameSultan[6]);
console.log(nameSultan.charAt(0));
console.log(nameSultan.charAt(6));
console.log(nameSultan.at(5));

console.log(`%c#####Trim#####`, `COLOR:#77FF77`);
let indent = ` indent  \n`;
console.log(indent);
console.log(indent.trim());

//todo ########chain########
console.log(indent.trim().charAt(1).toLowerCase());

console.log(`%c##################`, `COLOR:#ff4472`);
let sultanIsTheBest = `sultan is the best`;

//كلمة وحدة
console.log(sultanIsTheBest.indexOf(`best`));
console.log(sultanIsTheBest.lastIndexOf(`best`));
console.log(sultanIsTheBest.lastIndexOf(`best`));
console.log(sultanIsTheBest.lastIndexOf(`Best`));

// اكثر من خيار
console.log(sultanIsTheBest.indexOf(`s`));
console.log(sultanIsTheBest.lastIndexOf(`s`));

// غير موجود
console.log(sultanIsTheBest.indexOf(`w`));
console.log(sultanIsTheBest.lastIndexOf(`w`));

console.log(`%c##################`, `COLOR:#4472ff`);
console.log(nameSultan.startsWith(`s`,/* index اختياري */));
console.log(nameSultan.startsWith(`u`,/* index اختياري */));
console.log(nameSultan.includes(`u`,/* index اختياري */));
console.log(nameSultan.endsWith(`n`,/* length اختياري */));

console.log(`%c##################`, `COLOR:#fedcba`);
//& (position to start slice, position after end slice)
console.log(nameSultan.slice(2, 4)); //!not inculeding end
console.log(nameSultan.slice(2, 4)); //!not inculeding end
console.log(nameSultan.slice(-6,-1)); //!not inculeding end
//? length = end - beguining


console.log(`%c#####Split####`, `COLOR:#72f4f7`);
let sultan$Is$The$Best = `sultan$is$the$best`;
console.log(sultanIsTheBest.split()); //todo (من وين نبلش قص, )
console.log(sultanIsTheBest.split(``));
console.log(sultanIsTheBest.split(` `));
console.log(sultanIsTheBest.split(``, 6));
console.log(sultanIsTheBest.split(` `, 2));
console.log(sultan$Is$The$Best.split(`$`).join(' '));

console.log(`%c#####subString####`, `COLOR:#ff2004`);
let Sub = `sultan is the best`
let L = Sub.length;
console.log(sultanIsTheBest.substring(1));
console.log(sultanIsTheBest.substring(-7)); //(0)
console.log(sultanIsTheBest.substring(-7 ,7)); //(0-6)
console.log(sultanIsTheBest.substring(L-1)); //(-1)
console.log(sultanIsTheBest.substring(L-4)); //(-4)
console.log(sultanIsTheBest.substring(L-4 , L-2)); //(-4, -2)

console.log(`%c#####subStr####`, `COLOR:#7f4f70`);
console.log(sultanIsTheBest.substr(-7)); 
console.log(sultanIsTheBest.substr(0, 6)); // 6 احرف
console.log(sultanIsTheBest.substr(L)); // اكبر من ال string
console.log(sultanIsTheBest.substr(-4, 2));
console.log(sultanIsTheBest.substr());

console.log(`%c##################`, `COLOR:#00ffaa`);
console.log(nameSultan.concat(` omar`));
console.log(nameSultan.repeat(2));
console.log(nameSultan.match(`sultan`));
console.log(nameSultan.matchAll());

console.log(`%c##################`, `COLOR:#00ffaa`);
//& add to reach the number you want 
console.log(nameSultan.padEnd(10,`*`));
console.log(nameSultan.padStart(10,`*`));
console.log(nameSultan.padStart(10, `*`).padEnd(14, `*`));

console.log(`%c##################`, `COLOR:#00ffaa`);
let priceGB = `288,54€`;
let priceUs = priceGB.replace(`€`, `$`).replace(`,`, `.`);
console.log(priceGB);
console.log(priceUs);

console.log(`sultan sultan sultan`.replace(`sultan`, `best`));
console.log(`sultan Sultan sultan`.replaceAll(`sultan`, `best`));

