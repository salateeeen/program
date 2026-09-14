

fetch("https://restcountries.com/v2/name/jordan").then(() => {
  console.log(`fetch`);
}).catch(()=>{
  console.log(`Error`);
})

setTimeout(() => {
  console.log(`setTimeOut`);
}, 0)


const promise = new Promise((res, reg) => {
  res(`resolve`)
}) 
const test = function () {
 return promise.then(res => console.log(res))
  console.log(`await after promise`);
}
test()

console.log(`#########################`);

const test2 = async function () {
  console.log(await promise + `2`);
  console.log(`await after promise`);
}
test2()