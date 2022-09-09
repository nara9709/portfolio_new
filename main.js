'use strict';

let lang = 'english';

const burgerMenu = document.querySelector('  #nav-burgermenu');
const closeMenu = document.querySelector('#nav-closemenu');
const nav = document.querySelector('nav');
const langIcon = document.getElementById('lang-icon');
const arrowUpBtn = document.querySelector('.arrowUp');

const viewportWidth = document.documentElement.clientWidth;

function toggleBurger() {
  // In screen is widder than 768px, hide burger menu
  if (viewportWidth > 768) {
    burgerMenu.classList.add('hidden');

    // If screen is smaller than 768px, show burger menu
  } else if (viewportWidth < 768) {
    burgerMenu.classList.remove('hidden');
    document.querySelector('nav').classList.add('hidden');
    arrowUpBtn.classList.add('hidden');
  }
}

toggleBurger();

window.onresize = toggleBurger;

// If user click language button, change language setting
langIcon.addEventListener('click', () => {
  if (lang === 'korean') {
    lang = 'english';

    changeLangContent();
  } else {
    lang = 'korean';

    changeLangContent();
  }
});

function changeLangContent() {
  console.log(lang);
  let aboutme = document.querySelector('.aboutme-introduction');

  if (lang === 'english') {
    const intrductionEng = `Instead of just focusing on whether a function is working or not, I'm trying to develop focusing on <strong>HOW</strong> and <strong>WHY</strong> I should implement like that. <br> <br>
    In addition, I am willing to learn new languages, libraries, and framworks, and at the same time, I am trying to be a developer who knows why I have to learn this.`;

    aboutme.innerHTML = intrductionEng;
  } else {
    const introductionKr = `그저 기능 구현에 초점을 맞추는것이 아닌 필요한 기능을 <strong> '어떻게' </strong> 구현 할것이며 <strong>'왜'</strong> 이렇게 구현 해야만 하는지에 초점을 맞춰 개발하려고 노력하고 있습니다. <br> <br> 또한 무수히 쏟아지는 새로운 언어와 라이브러리, 기능들을 열린 마음으로 배워보려는 동시에 왜 내가 이것을 배워야 하는지 알고 있는 <strong> '이유있는 개발자'</strong>를 모토로 삼고있습니다.
 `;

    aboutme.innerHTML = introductionKr;
  }
}
function toggleMenu() {
  document.querySelector('nav').classList.toggle('hidden');

  burgerMenu.classList.toggle('hidden');

  closeMenu.classList.toggle('hidden');
}

// Handle click event on Burger menu icon
burgerMenu.addEventListener('click', () => {
  toggleMenu();
});

// Handle click event on close menu icon

closeMenu.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('hidden');

  burgerMenu.classList.toggle('hidden');

  closeMenu.classList.toggle('hidden');
});

// Handle click on nav button
// Skills Btn
const btnSkills = document.querySelector('.nav-menu.skills');

btnSkills.addEventListener('click', () => {
  scrollIntoView('#sec-skills');

  const skillHtml = document.querySelector('.skill_value.html');

  skillHtml.style.cssText += 'animation-name:html;';

  const skillCss = document.querySelector('.skill_value.css');

  skillCss.style.cssText += 'animation-name:css;';

  const skillJs = document.querySelector('.skill_value.js');

  skillJs.style.cssText += 'animation-name:js;';

  const skillReact = document.querySelector('.skill_value.react');

  skillReact.style.cssText += 'animation-name:react;';

  const skillTs = document.querySelector('.skill_value.ts');

  skillTs.style.cssText += 'animation-name:ts;';
});

// About me btn
const btnAboutme = document.querySelector('.nav-menu.aboutme');
btnAboutme.addEventListener('click', () => {
  scrollIntoView('#sec-aboutme');
});

// Testimonials
const btnTestimonials = document.querySelector('.nav-menu.testimonials');
btnTestimonials.addEventListener('click', () => {
  scrollIntoView('#sec-testimonials');
});

// My Work Btn
const btnMywork = document.querySelector('.nav-mywork');

btnMywork.addEventListener('click', () => {
  scrollIntoView('#sec-mywork');

  setTimeout(() => {
    const myWorkImgFirst = document.querySelector('.findCarrotImg.first');

    myWorkImgFirst.style.cssText += 'animation-name: fadeInLeft;';

    const myWorkImgSecond = document.querySelector('.findCarrotImg.second');

    myWorkImgSecond.style.cssText += 'animation-name: fadeInRight;';

    const myWorkDescFirst = document.querySelector(
      '.mywork-projectDescContainer.first'
    );

    myWorkDescFirst.style.cssText += 'animation-name: fadeInRight;';

    const myWorkDescSecond = document.querySelector(
      '.mywork-projectDescContainer.second'
    );

    myWorkDescSecond.style.cssText += 'animation-name: fadeInLeft;';
  }, 500);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'nearest',
  });

  if (viewportWidth < 768) {
    toggleMenu();
  }
}

window.addEventListener('scroll', () => {
  const navHeight = 30;
  if (
    document.body.scrollTop > navHeight ||
    document.documentElement.scrollTop > navHeight
  ) {
    document.querySelector('#sec-nav').classList.add('scrolling');
    document.querySelector('.arrowUp').classList.remove('hidden');
  } else if (
    document.body.scrollTop < navHeight ||
    document.documentElement.scrollTop < navHeight
  ) {
    document.querySelector('#sec-nav').classList.remove('scrolling');
    document.querySelector('.arrowUp').classList.add('hidden');
  }
});

// Arrow up click event
arrowUpBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
