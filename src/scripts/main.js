'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const galaryList = document.querySelector('.gallery__list');
  const largeImg = document.getElementById('largeImg');

  galaryList.addEventListener('click', (e) => {
    const link = e.target.closest('a');

    if (!link) {
      return;
    }

    e.preventDefault();

    const newSrc = link.href;

    largeImg.src = newSrc;
  });
});
