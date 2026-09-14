`use strict`;

const getModal = function () {
  return document.querySelector(`.modal`);
};
const getOverlay = function () {
  return document.querySelector(`.overlay`);
};
const getCloseModal = function () {
  return document.querySelector(`.close-modal`);
};
const getShowModal = function () {
  /// almost like an array
  return document.querySelectorAll(`.show-modal`);
};

const modal = getModal();
const overlay = getOverlay();
const btnCloseModal = getCloseModal();
const btnOpenModal = getShowModal();

const openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

const closeModalWithEsc = function (event) {
  if (event.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener(`click`, openModal);

overlay.addEventListener(`click`, closeModal);
btnCloseModal.addEventListener(`click`, closeModal);
document.addEventListener(`keydown`, closeModalWithEsc);
