'use strict';

let lang = 'korean';

const burgerMenu = document.querySelector('#nav-burgermenu');
const closeMenu = document.querySelector('#nav-closemenu');
const nav = document.querySelector('nav');

function hiddenBurger() {
  if (screen.width > 768) {
    burgerMenu.classList.add('hidden');

    nav.classList.remove('hidden');
  }
}

function showBurger() {
  if (screen.width > 768) {
    burgerMenu.classList.remove('hidden');
  }
}

hiddenBurger();

// If user click language button, change language setting
document.getElementById('lang-icon').addEventListener('click', () => {
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
    const intrductionEng = `I am creating a web and application for users, not is easy tocreate.
    My goal is one, building the web that people love. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorem voluptatum cumque voluptas aspernatur officia assumenda blanditiis quo corporis animi deserunt officiis necessitatibus delectus aut, est nulla quibusdam molestiae beatae.`;

    aboutme.innerText = intrductionEng;
  } else {
    const introductionKr = `그저 기능 구현에 초점을 맞추는것이 아닌 필요한 기능을 <strong> '어떻게' </strong> 구현 할것이며 <strong>'왜'</strong> 이렇게 구현 해야만 하는지에 초점을 맞춰 개발하려고 노력하고 있습니다. <br> <br> 또한 무수히 쏟아지는 새로운 언어와 라이브러리, 기능들을 열린 마음으로 배워보려는 동시에 왜 내가 이것을 배워야 하는지 알고 있는 <strong> '이유있는 개발자'</strong>를 모토로 삼고있습니다.
 `;

    aboutme.innerHTML = introductionKr;
  }
}

// Handle click event on Burger menu icon
burgerMenu.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('hidden');

  burgerMenu.classList.toggle('hidden');

  closeMenu.classList.toggle('hidden');
});

// Handle click event on close menu icon

closeMenu.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('hidden');

  burgerMenu.classList.toggle('hidden');

  closeMenu.classList.toggle('hidden');
});

// Make navbar transparent when it is on the top
// const navbar = document.querySelector('#sec-nav');
// const navbarHeight = navbar.getBoundingClientRect().height;

// document.addEventListener('scroll', () => {
//   if (window.scrollY > navbarHeight) {
//     navbar.classList.add('navbar--dark');
//   } else {
//     navbar.classList.remove('navbar--dark');
//   }
// });

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
  scrollTo.scrollIntoView({ behavior: 'smooth' });
  //   selectNavItem(navItems[sectionIds.indexOf(selector)]);
}
