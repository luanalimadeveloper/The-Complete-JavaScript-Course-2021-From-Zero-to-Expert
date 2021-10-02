'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Result of querySelectorAll (node list)
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Old way to Scroll the page

  // Scrolling
  // The current position + the current scroll

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // New way Scroll the page
  section1.scrollIntoView({ behavior: 'smooth' });
});
///////////////////////////////////////
// Page navigation

///// Attaching the same event handler to multiple elements.
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     // href has the same name of the id that I want to scroll
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//// Event delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function (e) {
  console.log(this, e.currentTarget);

  if (e.target.classList.contains('nav__link')) {
    console.log(this, e.currentTarget);

    // Creat a variable which contains, the element that we're working with.
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into an eventHandler function (can only have one argument).

// nav.addEventListener('mouseover', handleHover.bind(0.5));
// nav.addEventListener('mouseout', handleHover.bind(1));

// // Stick navigation
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function () {
//   //console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// Stick navigation: Intersection Observer API,

// 4. Callback function
// This callback function here will get called each time that the observed element (target element) is intersecting the root element at the threshold that we defined.
/*
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};
// 3. Options (object)
const obsOptions = {
  //root : the element that the target is intersecting.
  root: null, // viewport - set to null
  // threshold: the percentage of intersection at which the observer callback will be called.
  threshold: [0, 0.2], // 0 : completely out of the view,
};
// 1. Creat a new intersection observer
const observer = new IntersectionObserver(obsCallback, obsOptions);
// 2. Observe a certain target
observer.observe(section1);
*/

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

// add and to remove the stick class
const stickNav = function (entries) {
  const [entry] = entries; // equal to entries[0]
  //console.log(entry);

  //if the target isnt intersecting the root, then the sticky class will be applied.
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, //  90 px before the threshold was actually reached
});
headerObserver.observe(header);

// Reveal section
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  //const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  //observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
//Selecting, Creating, and Deleting Elements
/*
// Selecting elements

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// Select the first element
const header = document.querySelector('.header');
// Select multiples elements
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button';

// prepend - first child of header
// not could be in multiple places
//header.prepend(message);
header.append(message);
//header.append(message.cloneNode(true));

//header.before(message);
header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message);
  });
*/
//////////////////////////////////////
// Styles, Attributes and Classes
/*
// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// name of teh property and value
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// not work => not a standart propert expected to be on images
console.log(logo.designer);
console.log(logo.getAttribute('designer'));

logo.setAttribute('company', 'Bankist'); // new attribute

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// Don't use
logo.className = 'jonas';
*/

//////////////////////////////////////
//Implementing Smooth Scrolling
/*
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Old way to Scroll the page

  // Scrolling
  // The current position + the current scroll

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // New way Scroll the page
  section1.scrollIntoView({ behavior: 'smooth' });
});
*/
//////////////////////////////////////
//Types of Events and Event Handlers
/*
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventLIstener: Great! You are reading the heading ;D');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('onmousernter: Great! You are reading the heading ;D');
// };
*/

//////////////////////////////////////
/*
// rgb(255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

console.log(randomColor(0, 255));

// The event happens at the document root and from there it then travels down to the target element.The event handler functions are listening for click events that happen on the element itself and also listening for events that keep bubbling up from their child elements.

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();

  //target : where the event happened.(where the click happened in this case)
  // currentTarget: the element on which the event handler is attached.
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});
*/

//////////////////////////////////////
// DOM Traversing
/*
const h1 = document.querySelector('h1');

// Going downwards: child
// querySelector - finds children
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children); // elements inside h1
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// The closest parent element that has this class
// closest method  - finds parents
h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

// HTMLCollection (not an array) but is an iterable that we can be spread into an array.
[...h1.parentElement.children].forEach(function (el) {
  console.log(el);
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
*/
