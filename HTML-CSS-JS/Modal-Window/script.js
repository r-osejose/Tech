'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
//console.log(btnShowModal);

const closemodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const showmodal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', showmodal);
}

btnCloseModal.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    //console.log('button clicked');
    closemodal();
  }
});
