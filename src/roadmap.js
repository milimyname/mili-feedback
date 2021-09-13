import './sass/main.scss';
import helpers from './helpers';

const headings = document.querySelectorAll('.heading-5');
const roadmapNav = document.querySelector('.roadmap-nav');
const roadmapBox = document.querySelectorAll('.roadmap-box');
const mapUpvotes = document.querySelectorAll('.map__upvote');

roadmapNav.addEventListener('click', function (e) {
  const clicked = e.target.closest('.heading-5');
  //  Guard clause
  if (!clicked) return;

  // Activate heading
  headings.forEach((h) => (h.className = 'heading-5 opacity-4'));

  clicked.classList.add(`border-${clicked.dataset.roadmap}`);
  clicked.classList.remove('opacity-4');

  roadmapBox.forEach((box) => {
    box.classList.add('translateX-R', 'position-absolute');
  });
  document
    .querySelector(`.roadmap-box--${clicked.dataset.roadmap}`)
    .classList.remove('translateX-R', 'position-absolute', 'translateX-L');
});

// Activate upvote btn
mapUpvotes.forEach((upvote) => {
  upvote.addEventListener('click', () => {
    const btnNumber = upvote.querySelector('span');
    helpers.upvote(upvote, btnNumber);
  });
});
