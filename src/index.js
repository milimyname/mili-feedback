import './sass/main.scss';
import 'core-js';
import helpers from './helpers';
import backImg from './assets/suggestions/desktop/background-header.png';
import iconCheck from './assets/shared/icon-check.svg';

class Main {
  mainContainer = document.querySelector('.main__container');
  headerBox = document.querySelector('.header__box');
  categories = document.querySelectorAll('.header__item');
  sidebarOptions = document.querySelector('.sidebar__options');
  sidebarItem = document.querySelector('.sidebar__item');
  upvoteBoxes = document.querySelectorAll('.feedback__upvote-box');
  feedbacks = Array.from(document.querySelectorAll('.feedback'));

  constructor() {
    this.headerBox.style.backgroundImage = `url(${backImg})`;
    this.clickFeedback();
    this.activateUpvote();
    this.displayDropdown();
    this.clickCategory();
  }
  clickFeedback() {
    this.feedbacks.forEach((feedback) =>
      feedback.addEventListener('click', function (e) {
        const clickedEl = e.target;
        if (
          !clickedEl.classList.contains('feedback__upvote-box') &&
          !clickedEl.parentElement.classList.contains('feedback__upvote-box')
        ) {
          window.location.href = `feedback-detail.html`;
        }
      })
    );
  }

  activateUpvote() {
    this.upvoteBoxes.forEach((btn) => {
      btn.addEventListener('click', () => {
        const btnNumber = btn.querySelector('span');
        helpers.upvote(btn, btnNumber);
      });
    });
  }

  displayDropdown() {
    const dropdown = document.querySelector('.dropdown');
    const iconDown = document.querySelector('.sidebar__icon-down');
    const iconUp = document.querySelector('.sidebar__icon-up');
    this.sidebarOptions.addEventListener('click', function () {
      dropdown.classList.toggle('hidden');
      dropdown.classList.toggle('form__option--active');

      iconDown.classList.toggle('display-none');
      iconUp.classList.toggle('display-none');
    });
    helpers.toggleDropdown(dropdown, this.sidebarItem, iconCheck);
  }

  clickCategory() {
    const feedbacks = this.feedbacks;
    this.categories.forEach((category, _, arr) => {
      category.addEventListener('click', function (e) {
        e.preventDefault();
        const clickedCategory = category.querySelector('a');
        const array = [];
        category.querySelector('a').classList.add('header__link--active');
        feedbacks.forEach((feedback, i, arr) => {
          // let html = `<div class="feedback">
          //                   ${feedback.innerHTML}
          //               </div>`;
          // array.push(html);
          // console.log(array);
          //     if (
          //       feedback.querySelector('.btn-plain--feedback').textContent.trim() ===
          //       'Enhancement'
          //     ) {
          //       console.log(feedback);
          //       console.log(arr);
          //       mainContainer.insertAdjacentHTML('beforeend', html);
          //     }
        });

        arr.forEach((category) => {
          if (category.querySelector('a') !== clickedCategory) {
            category
              .querySelector('a')
              .classList.remove('header__link--active');
          }
        });
      });
    });
  }
}

export default new Main();
