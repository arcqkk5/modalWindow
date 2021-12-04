'use strict';

//DOM
const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-modal-window');
const showButton = document.querySelectorAll('.show-modal-window');

//JS
const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

const showModalWindow = function () {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < showButton.length; i++) {
  showButton[i].addEventListener('click', showModalWindow);
}

closeButton.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);
