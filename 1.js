'use strict';

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');


  
    if (!clicked) return;
  
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    clicked.classList.add('operations__tab--active');
  
    tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add('operations__content--active');

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});


$(document).ready(function(){
    $('.burger-menu').click(function(){
    $('.mobile-off').toggle();
    });
    });