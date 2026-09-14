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

    constructor() {
        this._getPosition();
        inputType.addEventListener(`change`, this._toggleElevationFeild.bind(this));
        containerWorkouts.addEventListener(`submit`, this.onSupmit.bind(this))
    }



    _getPosition() {
        navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
            window.alert(`Error`)
        })
    }

    _loadMap(position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;

       const coords = [latitude, longitude]

        this.#map = L.map('map').setView(coords, 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        this.#map.on(`click`, this.onClick.bind(this));

    }

    onClick(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove(`hidden`)
    }

    onSupmit(e) {
        e.preventDefault()
        const { lat, lng } = this.#mapEvent.latlng

        L.marker([lat, lng])
            .addTo(this.#map)
            .bindPopup(
                L.popup({
                    className: `cycling-popup`
                }))
            .setPopupContent(`the best in the world`)
            .openPopup();

        if (inputType.value === `running`) {
            new Running()
        } else if (inputType.value === `cycling`) {
            new Cycling()
        }

    }

    _toggleElevationFeild() {
        inputElevation.closest(`.form__row`).classList.toggle(`form__row--hidden`);
        inputCadence.closest(`.form__row`).classList.toggle(`form__row--hidden`);
    }

}
const app = new App();

class UI {

    constructor(type, distance, duration, paceOrSpeed) {
        this.creatWorkout()
        this.type = inputType.value;
        this.distance = inputDistance.value;
        this.duration = inputDuration.value;
        this.paceOrSpeed = paceOrSpeed;
    }

    workout(icon, value, unit) {
        return `<div class="workout__details">
             <span class="workout__icon">${icon}</span>
             <span class="workout__value">${value}</span>
             <span class="workout__unit">${unit}</span>
           </div>`
    }

    html() {
        console.log(this);
        return `<li class="workout workout--${inputType.value}" data-id="1234567891">
       <h2 class="workout__title">${inputType.value} on April 5</h2>
       ${this.workout(`🏃‍♂️`, inputDistance.value, `km`)}
       ${this.workout(`⏱`, inputDuration.value, `min`)}
       ${this.workout(`⚡️`, this.pace, `km/h`)}
       ${this.workout(`🦶🏼`, 222, `m`)}
     </li>`}

    creatWorkout = function () {
        containerWorkouts.insertAdjacentHTML(`afterbegin`, this.html())
    }
}

class WorkOut {
    date = new Date()
    id = ((+new Date()) + ``).slice(-10)

    constructor(coords, distance, duration,) {
        this.coords = coords;
        this.distance = +inputDistance; //# in km
        this.duration = +inputDuration; //# in min
    }
}

class Running extends WorkOut {
    type = `running`;
    constructor(coords, distance, duration, cadence) {
        super(coords, inputDistance.value, inputDuration.value);
        this.cadence = inputCadence.value;
        this.clacPace()
        this.UI()
    }

    clacPace() {
        //# km/min
        this.pace = +this.distance / +this.duration
        return this.pace
    }

    UI() {
        new UI(this.type, this.distance, this.duration, this.pace)
    }
}

class Cycling extends WorkOut {

    type = `cycling`;
    constructor(coords, distance, duration, elevationGain) {
        super(coords, inputDistance.value, inputDuration.value);
        this.elevationGain = inputElevation.value;
        this.clacSpeed()
        this.newWorkOut()
    }

    clacSpeed() {
        //# km/h
        this.speed = +this.distance / (+this.duration / 60)
        return this.speed
    }

    newWorkOut() {
        new UI(this.type, this.distance, this.duration, this.speed)
    }
}


