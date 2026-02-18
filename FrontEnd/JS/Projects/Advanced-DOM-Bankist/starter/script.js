'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const nav = document.querySelector(`.nav`)
const navLink = document.querySelectorAll(`.nav__link`)
const navLinks = document.querySelector(`.nav__links`)

const tabsContainer = document.querySelector(`.operations__tab-container`);
const tabs = document.querySelectorAll(`.operations__tab`);
const tabsContent = document.querySelectorAll(`.operations__content`);




const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(function (btn) {
  btn.addEventListener('click', openModal);
})

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const color = {
  randomNum(min, max) {
    return Math.round(Math.random() * (max - min + 1) + min)
  },
  randomColor() {
    return `rgb(${this.randomNum(0, 255)}, ${this.randomNum(0, 255)}, ${this.randomNum(0, 255)})`
  },
  // /// the event is generated even if we dont have addEventListener
  // link: document.querySelector('.nav__link').addEventListener(`click`, function (e) {
  //   document.querySelector('.nav__link').style.backgroundColor = this.randomColor()
  //   //$ target : the element is the click it
  //   /// console.log(`Link:`,e.target);
  //   //$ current target (this) : from where the listener call
  //   console.log(`Link:`, e.currentTarget);
  //   console.log(`Link:`, this);
  // }),

  // /// document.querySelector('.nav__links').addEventListener(`submit`, function (e) {
  // links: document.querySelector('.nav__links').addEventListener(`click`, function (e) {
  //   document.querySelector('.nav__links').style.backgroundColor = this.randomColor()
  //   /// e.target.style.backgroundColor = randomColor()
  //   /// console.log(`Links:`,e.target);
  //   console.log(`Links:`, e.currentTarget);
  //   console.log(`Links:`, this);
  // }),



  // nav: document.querySelector(`.nav`).addEventListener(`click`, function (e) {
  //   document.querySelector('.nav').style.backgroundColor = this.randomColor()

  //   /// console.log(`nav:`,e.target);
  //   console.log(`nav:`, e.currentTarget);
  //   console.log(`nav:`, this);
  // })
}

document.querySelector('.nav__links').addEventListener(`click`, function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    /// return #section--1
    const id = e.target.getAttribute(`href`);

    document.querySelector(id).scrollIntoView({ behavior: `smooth` })
  }
});

{
  // const h1 = document.querySelector(`h1`);
  // console.log(h1);

  // ///child for all deeps
  // console.log(h1.querySelectorAll(`.highlight`));
  // /// all 
  // console.log(h1.childNodes);
  // /// just elements
  // console.log(h1.children);
  // /// first last 
  // console.log(h1.firstElementChild);
  // console.log(h1.lastElementChild);

  // //& first parent 
  // console.log(h1.parentElement);
  // //& first ancestor has a class .header
  // console.log(h1.closest(`.header`));
  // h1.closest(`.header`).style.backgroundColor = color.randomColor()

  // //$ siblings 
  // console.log(h1.previousElementSibling);
  // console.log(h1.previousSibling);
  // console.log(h1.nextElementSibling);
  // console.log(h1.nextSibling);
}

{
  tabsContainer.addEventListener(`click`, function (e) {
    e.preventDefault();

    const clicked = e.target.closest(`.operations__tab`)
    console.log(clicked);
    if (!clicked) return


    tabs.forEach(function (t) {
      t.classList.remove(`operations__tab--active`)
    });
    clicked.classList.add(`operations__tab--active`);

    tabsContent.forEach(function (c) {
      c.classList.remove(`operations__content--active`)
    })
    const dataActive = clicked.getAttribute(`data-tab`);
    document.querySelector(`.operations__content--${dataActive}`).classList.add(`operations__content--active`);
    ///same
    // const dataSet = clicked.dataset.tab;
    // document.querySelector(`.operations__content--${dataSet}`).classList.add(`operations__content--active`);
  })
}

{
  const mouseHover = function (e, opacity) {
    if (e.target.classList.contains(`nav__link`)) {
      const link = e.target;
      const siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`)
      const logo = link.closest(`.nav`).querySelector(`img`)

      siblings.forEach(function (s) {
        if (s !== link) {
          s.style.opacity = opacity;
        }
        logo.style.opacity = opacity;
      })
    }
  }

  // const mouseoverEvent = new MouseEvent(`mouseover`)
  // const mouseoutEvent = new Event(`mouseout`)
  nav.addEventListener(`mouseover`, function (e) {
    mouseHover(e, 0.5)
  })

  nav.addEventListener(`mouseout`, function (e) {
    mouseHover(e, 1)
  })
}


const slider = document.querySelector(`.slider`)
const slides = document.querySelectorAll(`.slide`)
const btnRight = document.querySelector(`.slider__btn--right`)
const btnLeft = document.querySelector(`.slider__btn--left`)
const dotsContainer = document.querySelector(`.dots`)

//& بكونو فوق بعض بعض بنخليهم صف
slides.forEach(function (slide, i) {
  const dot = `<div class="dot dots__dot"  data-slide= ${i}>.</div>`
  dotsContainer.insertAdjacentHTML(`beforeend`, dot)
  
  slide.style.transform = `translateX(${(100 * i)}%)`
})

const dots = dotsContainer.querySelectorAll(`.dot`)

//? 0 100% 200% 300%
/// curSlide 0 1 2 3


dots[0].classList.add(`dots__dot--active`)
const goToSlide = function (toSlide) {
  slides.forEach(function (slide, i) {
    dots[i].classList.remove(`dots__dot--active`);
    //$ we are see the slide when (i - toSlide) = 0;
    slide.style.transform = `translateX(${(i - toSlide) * 100}%)`;
  })
  dots[toSlide].classList.add(`dots__dot--active`);
}

const prevSlide = function () {
  curSlide = curSlide === 0 ? lastSlide : --curSlide;
  goToSlide(curSlide);
}
const nextSlide = function () {
  curSlide = curSlide === lastSlide ? 0 : ++curSlide;
  goToSlide(curSlide);
}



let curSlide = 0;
const lastSlide = slides.length - 1;

btnRight.addEventListener('click', nextSlide)
//? -100% 0 100% 200% 
/// curSlide 1 2 3 0


btnLeft.addEventListener('click', prevSlide)
//? 0 100% 200% 300% 
/// curSlide 0 1 2 3 

document.addEventListener(`keydown`, function (e) {
  if (e.key === `ArrowRight`) {
    nextSlide()
  } else if (e.key === `ArrowLeft`) {
    prevSlide()
  }
})

dotsContainer.addEventListener(`click`, function (e) {
  if (!e.target.classList.contains(`dot`))
    return;
  curSlide = Number(e.target.dataset.slide);
  goToSlide(curSlide)
})