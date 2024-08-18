"use strict";

let lang = "english";

const burgerMenu = document.querySelector("#nav-burgermenu");
const closeMenu = document.querySelector("#nav-closemenu");
const nav = document.querySelector("nav");
const langIcon = document.getElementById("lang-icon");
const arrowUpBtn = document.querySelector(".arrowUp");

const maxWidth = 390;

function toggleBurger() {
  const viewportWidth = document.documentElement.clientWidth;

  // If screen is wider than max width, hide burger menu and show nav
  if (viewportWidth > maxWidth) {
    burgerMenu.classList.add("hidden");
    closeMenu.classList.add("hidden");
    nav.classList.remove("hidden");
  } else {
    burgerMenu.classList.remove("hidden");
    closeMenu.classList.add("hidden");
    nav.classList.add("hidden");
    arrowUpBtn.classList.add("hidden");
  }
}

toggleBurger();

window.onresize = toggleBurger;

function toggleMenu() {
  nav.classList.toggle("hidden");
  burgerMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
}

// Handle click event on Burger menu icon
burgerMenu.addEventListener("click", () => {
  toggleMenu();
});

// Handle click event on close menu icon
closeMenu.addEventListener("click", () => {
  toggleMenu();
});

// Work btn
const btnSkills = document.querySelector(".nav-menu.work");

btnSkills.addEventListener("click", () => {
  scrollIntoView("#sec-work");
});

// Skill languages observer and If this section is visible, add animation
const skillsLangSec = document.querySelector(".skills-langContainer");

let skillsLangObserver = new IntersectionObserver((e) => {
  e.forEach((box) => {
    if (box.isIntersecting) {
      box.target.style.opacity = 1;
    }
  });
});

skillsLangObserver.observe(skillsLangSec);

// About me btn
const btnAboutme = document.querySelector(".nav-menu.aboutme");
btnAboutme.addEventListener("click", () => {
  scrollIntoView("#sec-contact");
});

// Testimonials
const btnTestimonials = document.querySelector(".nav-menu.testimonials");
btnTestimonials.addEventListener("click", () => {
  scrollIntoView("#sec-testimonials");
});

// My Work Btn
const btnMywork = document.querySelector(".nav-mywork");

btnMywork.addEventListener("click", () => {
  scrollIntoView("#sec-mywork");
});

// Work first observer and If this section container is visible, add animations
const worksSecFirst = document.querySelector(".mywork-projectContainer.first");

let workFirstObserver = new IntersectionObserver((e) => {
  e.forEach((box) => {
    if (box.isIntersecting) {
      const myWorkImgFirst = document.querySelector(".findCarrotImg.first");

      myWorkImgFirst.style.cssText += "animation-name: fadeInLeft;";

      const myWorkDescFirst = document.querySelector(
        ".mywork-projectDescContainer.right"
      );

      myWorkDescFirst.style.cssText += "animation-name: fadeInRight;";
    }
  });
});

workFirstObserver.observe(worksSecFirst);

// Work second observer and If this section container is visible, add animations
const worksSecond = document.querySelector(".mywork-projectContainer.second");

let workSecondObserver = new IntersectionObserver((e) => {
  e.forEach((box) => {
    if (box.isIntersecting) {
      const myWorkImgSecond = document.querySelector(".findCarrotImg.second");

      myWorkImgSecond.style.cssText += "animation-name: fadeInRight;";

      const myWorkDescSecond = document.querySelector(
        ".mywork-projectDescContainer.second"
      );

      myWorkDescSecond.style.cssText += "animation-name: fadeInLeft;";
    }
  });
});

workSecondObserver.observe(worksSecond);

// Testimonial first section observer and If this section is visible, add animation
const testimonialsFirst = document.querySelector(".testimonials-desc.first");

let testimonialsFirstObserver = new IntersectionObserver((e) => {
  e.forEach((box) => {
    if (box.isIntersecting) {
      box.target.style.opacity = 1;
    }
  });
});

testimonialsFirstObserver.observe(testimonialsFirst);

// Testimonial second section observer and If this section is visible, add animation
const testimonialsSecond = document.querySelector(".testimonials-desc.second");

let testimonialsSecondObserver = new IntersectionObserver((e) => {
  e.forEach((box) => {
    if (box.isIntersecting) {
      box.target.style.opacity = 1;
    }
  });
});

testimonialsSecondObserver.observe(testimonialsSecond);

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "nearest",
  });

  if (document.documentElement.clientWidth < maxWidth) {
    toggleMenu();
  }
}

window.addEventListener("scroll", () => {
  const navHeight = 30;
  if (
    document.body.scrollTop > navHeight ||
    document.documentElement.scrollTop > navHeight
  ) {
    document.querySelector("#sec-nav").classList.add("scrolling");
    arrowUpBtn.classList.remove("hidden");
  } else {
    document.querySelector("#sec-nav").classList.remove("scrolling");
    arrowUpBtn.classList.add("hidden");
  }
});

// Arrow up click event
arrowUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
