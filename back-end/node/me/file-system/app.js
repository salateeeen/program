
const fs = require('fs');
/// non blocking
//? ./ where script.js find
const data = fs.readFileSync('./hello.text', `utf8`);
console.log(data);

fs.readFile('./hello.text', `utf8`,(err, data) => {
    if(err){
        console.log(err);
    } else console.log(data);
})
