`use strict`
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const sideBar = document.querySelector('.sidebar');
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


class App {
    #map;
    #mapEvent;
    #mapLevelZoom = 13;
    #workOuts = [];

    constructor() {
        this.getPosition();
        inputType.addEventListener(`change`, this.toggleElevationFeild.bind(this));
        containerWorkouts.addEventListener(`submit`, this.onSupmit.bind(this))
        containerWorkouts.addEventListener(`click`, this.moveToMarker.bind(this))
    }

    getPosition() {
        navigator.geolocation.getCurrentPosition(this.loadMap.bind(this), function () {
            window.alert(`Error`)
        })
    }

    loadMap(position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;

        const coords = [latitude, longitude]

        this.#map = L.map('map').setView(coords, this.#mapLevelZoom);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        this.#map.on(`click`, this.onClick.bind(this));
    }

    onClick(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove(`hidden`)
    }

    marker(type, date) {
        const { lat, lng } = this.#mapEvent.latlng
        L.marker([lat, lng])
            .addTo(this.#map)
            .bindPopup(
                L.popup({
                    className: `${type}-popup`
                }))
            .setPopupContent(`${date}`)
            .openPopup();
    }
    hideForm() {
        inputType.value = `running`;
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ``;
        form.style.display = `none`;
        form.classList.add(`hidden`);
        setTimeout(() => form.style.display = `grid`, 1000)
    }

    onSupmit(e) {
        const { lat, lng } = this.#mapEvent.latlng
        const valueType = inputType.value
        let type;
        e.preventDefault()

        if (valueType === `running`) {
            const run = new Running([lat, lng])
            type = run.type;
            this.#workOuts.push(run);

        } else if (valueType === `cycling`) {
            const cycl = new Cycling([lat, lng])
            type = cycl.type;
            this.#workOuts.push(cycl)
        }
        const date = new Intl.DateTimeFormat(`en-us`, { month: `long`, day: `2-digit` }).format(new Date());

        this.marker(type, date)
        this.hideForm()

    }

    toggleElevationFeild() {
        inputElevation.closest(`.form__row`).classList.toggle(`form__row--hidden`);
        inputCadence.closest(`.form__row`).classList.toggle(`form__row--hidden`);
    }

    moveToMarker(e) {
        if (!e.target.closest(`.workout`)) return
        const id = e.target.closest(`.workout`).dataset.id
        const workOut = this.#workOuts.find(function (workOut) {
            return workOut.id === id
        })
        // console.log(workOut);
        console.log(workOut.coords);
        this.#map.setView(workOut.coords, this.#mapLevelZoom, {
            animate : true,
            pan: {
                duration: 1,
            }
        })
    }

}
const app = new App()


class UI {

    constructor(type, distance, duration, paceOrSpeed, cadenceOrelevation, date, id) {
        this.type = type;
        this.distance = distance;
        this.duration = duration;
        this.paceOrSpeed = paceOrSpeed;
        this.cadenceOrelevation = cadenceOrelevation;
        this.date = date;
        this.id = id;
        this.creatWorkout()
    }

    getLogo() {
        return this.type === `running` ? `🏃‍♂️` : `🚴‍♀️`
    }

    getIcon() {
        return this.type === `running` ? `🦶🏼` : `⛰`
    }
    getUnit() {
        return this.type === `running` ? `km/min` : `km/h`
    }

    getTitle() {
        return this.type === `running` ? `running` : `Cycling`
    }
    formatDate() {
        return new Intl.DateTimeFormat(`en-us`, { month: `long`, day: `2-digit` }).format(new Date());
    }


    workout(icon, value, unit) {
        return `<div class="workout__details">
             <span class="workout__icon">${icon}</span>
             <span class="workout__value">${value}</span>
             <span class="workout__unit">${unit}</span>
           </div>`
    }

    html() {
        return `<li class="workout workout--${this.type}" data-id=${this.id}>
       <h2 class="workout__title">${this.getTitle()} on ${this.formatDate()}</h2>
       ${this.workout(`${this.getLogo()}`, this.distance, `km`)}
       ${this.workout(`⏱`, this.duration, `min`)}
       ${this.workout(`⚡️`, this.paceOrSpeed, `${this.getUnit()}`)}
       ${this.workout(`${this.getIcon()}`, this.cadenceOrelevation, `m`)}
     </li>`}

    creatWorkout = function () {
        form.insertAdjacentHTML(`afterend`, this.html())
    }

}


class WorkOut {
    date = new Date()
    id = ((+new Date()) + ``).slice(-10)

    constructor(coords) {
        this.coords = coords;
        this.distance = +inputDistance.value; //# in km
        this.duration = +inputDuration.value; //# in min
    }
}

class Running extends WorkOut {
    type = `running`;
    constructor(coords) {
        super(coords);
        this.cadence = +inputCadence.value;
        this.clacPace()
        this.UI()
    }

    clacPace() {
        //# km/min
        this.pace = +(this.distance / this.duration).toFixed(2)
        return this.pace
    }

    UI() {
        new UI(this.type, this.distance, this.duration, this.pace, this.cadence, this.date, this.id)
    }
};

class Cycling extends WorkOut {
    type = `cycling`;
    constructor(coords) {
        super(coords);
        this.elevationGain = +inputElevation.value;
        this.clacSpeed()
        this.newWorkOut()
    }

    clacSpeed() {
        //# km/h
        this.speed = +(this.distance / (this.duration / 60)).toFixed(2)
        return this.speed
    }

    newWorkOut() {
        new UI(this.type, this.distance, this.duration, this.speed, this.elevationGain, this.date, this.id)
    }
}
