/* navigation*/

let nav = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toggle');

nav.classList.remove('navigation--no-js');
nav.classList.add('navigation--close');

navToggle.addEventListener('click', function () {
  if (nav.classList.contains('navigation--close')) {
    nav.classList.remove('navigation--close');
    nav.classList.add('navigation--open');
  } else {
    nav.classList.add('navigation--close');
    nav.classList.remove('navigation--open');
  }
});

/* map leaflet*/

const map = L.map('map')
  .setView({
    lat: 59.968137,
    lng: 30.316272,
  }, 100);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const mainPinMarker = L.marker(
  {
    lat: 59.968137,
    lng: 30.316272,
  },
  {
    icon:mainPinIcon,
  },
);

mainPinMarker.addTo(map);

/* slider swiper*/

const swiper = new Swiper(".slider__container", {
  navigation: {
    nextEl: '.slider__button--next',
    prevEl: '.slider__button--before',
  },
  pagination: {
    el: '.slider__pagination',
    clickable: true,
  },
});
