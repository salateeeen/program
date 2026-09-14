'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////


const renderUI = function (data, className = ``) {
    const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
          <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(data.population / 1_000_000).toFixed(2)} M</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
          </article>`
    countriesContainer.insertAdjacentHTML(`beforeend`, html)
    countriesContainer.style.opacity = 1;
}

const renderEROR = function (error) {
    countriesContainer.insertAdjacentText(`beforeend`, error)
    countriesContainer.style.opacity = 1;
}



/// asynchronous is a concept which mean we have some operations that handelling behind the scens
// const getDataByCountryXML = function (country) {
//     const request = new XMLHttpRequest()
//     request.open(`GET`, `https://restcountries.com/v2/name/${country}`)
//     request.send()

//     request.addEventListener(`load`, function () {
//         const data = JSON.parse(this.responseText)[0];
//         renderUI(data)
//         console.log(data);

//         //# nested hell call back

//         const request2 = new XMLHttpRequest()
//         const [neighbours] = data.borders
//          if (!neighbours) return;
//         request2.open(`GET`, `https://restcountries.com/v2/alpha/${neighbours}`)
//         request2.send()

//         request2.addEventListener(`load`, function () {
//             const data2 = JSON.parse(this.responseText);
// renderUI(data2, `neighbour`)
//         })
//     })
// }
//* getDataByCountryXML(`jordan`)




// const getDataByCountryPromise = function (country) {
//     //# fetch and .json() return promise
//     fetch(`https://restcountries.com/v2/name/${country}`).
//         then(function (HTTPrespons) {
//             //% JSON.parse(this.responseText)
//             return HTTPrespons.json();
//         })
//         .then(function (data) {
//             renderUI(data.at(0))
//             const [neighbours] = data[0].borders
//             if (!neighbours) return;
//               //! we go back to call back hell 
//             fetch(`https://restcountries.com/v2/alpha/${neighbours}`).
//                 then(function (HTTPrespons) {
//                     return HTTPrespons.json();
//                 })
//                 .then(function (data) {
//                     renderUI(data, `neighbour`)
//                 })
//         })
// }
// getDataByCountryPromise(`jordan`)


const getJSON = function (url, errorMsg = `something went error`) {
    return fetch(url)
        .then(function (HTTPrespons) {
            //% JSON.parse(this.responseText)
            if (!HTTPrespons.ok)
                throw new Error(errorMsg)
            return HTTPrespons.json();
        })
}

const getDataByCountryPromise = function (country) {

    //# fetch and .json() return promise
    getJSON(`https://restcountries.com/v2/name/${country}`, `throw country`)
        .then(function (data) {
            renderUI(data.at(0))

            const [neighbours] = data[0].borders
            if (!neighbours) return;
            //% return to then  from call back function
            return getJSON(`https://restcountries.com/v2/alpha/${neighbours}`, `throw neighbour`)
        })
        //* when fulfilled
        .then(function (data) {
            renderUI(data, `neighbour`)
            document.querySelector(`body`).style.backgroundColor = `rgb(145,233,45)`
        })
        //! when amy fitch return error
        .catch(function (error) {
            console.log(error);
            renderEROR(error.message);
            document.querySelector(`body`).style.backgroundColor = `rgb(237, 59, 35)`
            
        })
        //? always
        .finally(function () {
            setTimeout(function() {
                document.querySelector(`body`).style.backgroundColor = `rgb(34, 149, 236)`
            }, 5000)
        })
}
getDataByCountryPromise(`jordan`);
