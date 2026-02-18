'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const sideBar = document.querySelector('.sidebar');
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map;
let mapEvent;

inputType.addEventListener(`change`, function () {
    inputElevation.closest(`.form__row`).classList.toggle(`form__row--hidden`);
    inputCadence.closest(`.form__row`).classList.toggle(`form__row--hidden`);
})

navigator.geolocation.getCurrentPosition(function (pos) {
    const { latitude } = pos.coords;
    const { longitude } = pos.coords;

    const coords = [latitude, longitude]
    map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    map.on(`click`, function (mapE) {
        mapEvent = mapE
        console.log(mapE);
        form.classList.remove(`hidden`)
    })
}, function () {
    window.alert(`Error`)
})


const workout = function (icon, value, unit) {
    return `<div class="workout__details">
        <span class="workout__icon">${icon}</span>
        <span class="workout__value">${value}</span>
        <span class="workout__unit">${unit}</span>
      </div>`
}

const newWorkout = function () {
    const { lat, lng } = mapEvent.latlng
    L.marker([lat, lng]).addTo(map)
        .bindPopup(
            L.popup({
                className: `cycling-popup`
            }))
        .setPopupContent(`the best in the world`)
        .openPopup();

    const type = inputType.value;
    const distance = inputDistance.value;

    const logo = type === `running` ? `🏃‍♂️` : `🚴‍♀️`
    const icon = type === `running` ? `🦶🏼` : `⛰`

    const html =
        `<li class="workout workout--${type}" data-id="1234567891">
          <h2 class="workout__title">${type} on April 5</h2>
          ${workout(logo, distance, `km`)}
          ${workout(`⏱`, distance, `min`)}
          ${workout(`⚡️`, 16, `km/h`)}
          ${workout(icon, 223, `m`)}
        </li>`

    containerWorkouts.insertAdjacentHTML(`afterbegin`, html)
}

form.addEventListener(`submit`, function (e) {
    e.preventDefault()
    form.classList.add(`hidden`)
    newWorkout();

})

