`use strict`

console.log(`test start`);
setTimeout(() => console.log(`after 0 second`), 0);
Promise.resolve(`resolved promise 1`)
    .then(resolved => console.log(resolved))
//% microtask call back is always execute before queue call back
Promise.resolve(`resolved promise 2`)
    .then(resolved => {
        for (let i = 0; i < 1000; i++) { }
        console.log(resolved)
    })
console.log(`test end`);


//$ rare call stack for last line executes before queue call back
const waitQueue = function () {
    setTimeout(() => console.log(`after 1 second`), 1000);
}
waitQueue();

const myPromise = new Promise(function (resolve, regect) {
    if (1 === 1)
        //# when we call resolved or regected we exit from promise
        //$ promise result
        resolve(`resolved`)

    regect(`regected`)
})
/// after then the promise is fulfilled and we dont have resolved
// .then(function (resolved) {
//     console.log(`callBackThen('${resolved}')`);
// })
// .catch(function (regected) {
//     console.log(`callBackCatch('${regected}')`);
// })

const asyncAwait = async function () {
    console.log(myPromise);
    const resolved = await myPromise
    console.log(`callBackThen('${resolved}')`);
}
asyncAwait()


//& the resolve (result) of fetch it is the HTTPrequest
const get = fetch(`https://restcountries.com/v2/name/jordan`)
    .then((resolve) => {
        return resolve.json()
    })
    .then(function (data) {
        console.log(data)
    })

const Async = async function () {
    const HTTPrequest = await fetch(`https://restcountries.com/v2/name/jordan`)
    const data = await HTTPrequest.json()
    console.log(data)
}
Async()

//* return promise was already resolved
Promise.resolve(`resolved promise`)
    .then(function (res) {
        console.log(res);
    })

const wait = new Promise(function (resolve) {
    setTimeout(function () {
        resolve(`wait 1s`)
    }, 5000)
}).then(function (res) {
    console.log(res);
})

//% async satTime
const waitAsync = async function (seconds) {
    await new Promise((resolve) => {
        setTimeout(resolve, seconds);
    })
}
const seconds = async function () {
    await waitAsync(1000);
    console.log(`after 1`);
    await waitAsync(1000);
    console.log(`after 2`);
    await waitAsync(1000);
    console.log(`after 3`);
}
seconds();

const thenAsync = async function (resolve) {
    /// if we dont have return the promise is still fulfilled put result is undefined
    return resolve;
}
const asyncCall = thenAsync(`VALUE`)
asyncCall.then(function (result) {
    console.log(result);
});
console.log(asyncCall);


try {
    const Try = 2;
    Try = 6;

} catch {
    console.log(`const must be initialization`);
}


const getJSON = async function (url, errorMsg = `something went error`) {
    const HTTPrespons = await fetch(url);
    if (!HTTPrespons.ok)
        throw new Error(errorMsg)
    return await HTTPrespons.json();
}

const All = async function () {
    //# return array of all resolve promises 
    //! if we have one regected not return anything
    const getAll = await Promise.all([
        getJSON(`https://restcountries.com/v2/name/jordan`),
        getJSON(`https://restcountries.com/v2/name/palestine`),
        getJSON(`https://restcountries.com/v2/name/syria`),
    ])
    console.log(getAll);
    console.log(getAll.map(resolve => resolve[0].capital));
}
All()

const Race = async function () {
    //# return first promise is settled no metter regected or resloved
    const raceAll = await Promise.race([
        getJSON(`https://restcountries.com/v2/name/jordan`),
        getJSON(`https://restcountries.com/v2/name/palestine`),
        getJSON(`https://restcountries.com/v2/name/syria`),
    ])
    console.log(raceAll);
    console.log(raceAll[0].capital);
}
Race()

const Any = async function () {
    //* return first resloved and ignore regected
    const any = await Promise.any([
        getJSON(`https://restcountries.com/v2/name/jordan`),
        getJSON(`https://restcountries.com/v2/name/palestine`),
        getJSON(`https://restcountries.com/v2/name/syria`),
    ])
    console.log(any);
    console.log(any[0].capital);
}
Any()

Promise.allSettled([
    Promise.resolve(`resolved 1`),
    Promise.reject(`regected 1 💥`),
    Promise.resolve(`resolved 2`)]
).then((settled) => console.log(settled))


const handelERROR = async function () {
    try {
        const HTTPrespons = await fetch(`https://restcountries.com/v2/name/jordan`);
        //? because not ok must not be regected
        if (!HTTPrespons.ok)
            throw new Error(`something went error`)

        return await HTTPrespons.json();
    } catch (error) {
        // console.log(HTTPrespons.ok);
        throw error;
    }
}

console.log(handelERROR());

handelERROR()
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
