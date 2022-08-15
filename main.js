'use strict';

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
