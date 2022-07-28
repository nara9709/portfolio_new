'use strict';

function toggleHidden(className) {
  const hoverMenu = document.getElementsByClassName(`nav-menu ${className}`);
  const hoverImg = document.getElementById(`${className}`);

  hoverImg.classList.toggle('hidden');
}
