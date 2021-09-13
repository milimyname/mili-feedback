import './sass/main.scss';
import iconCheck from './assets/shared/icon-check.svg';
import helpers from './helpers';

const formInput = document.querySelector('.form__input');
const formOptions = document.querySelector('.form__options');
const formOption = document.querySelector('.form__option');
const options = document.querySelector('.form__options');
const dropdown = document.querySelector('.dropdown');
const dropdownItem = document.querySelectorAll('.dropdown__item');
const textarea = document.querySelector('.textarea');
const iconDown = document.querySelector('.form__icon-down');
const iconUp = document.querySelector('.form__icon-up');
const feature = document.querySelector('.feature');
const btnAddFeedback = document.querySelector('.btn--feedback');
const btnCancel = document.querySelector('.btn--cancel');
export let newFeedback = '';

// Toggle dropdown
formOptions.addEventListener('click', (e) => {
  dropdown.classList.toggle('hidden');
  dropdown.classList.toggle('form__option--active');

  iconDown.classList.toggle('display-none');
  iconUp.classList.toggle('display-none');
});

// Add check icon to dropdown item and highlight item
helpers.toggleDropdown(dropdown, formOption, iconCheck);

// Btn Cancel returns to home page
btnCancel.addEventListener('click', function (e) {
  e.preventDefault();
  window.location.href = `/`;
});

// Btn Feedback adds new feedback
btnAddFeedback.addEventListener('click', function (e) {
  e.preventDefault();
  newFeedback = `
  <div class="feedback">
    <div class="feedback__upvote-box feedback__upvote-box--hover">
      <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
      <span>0</span>
    </div>
    <div class="feedback__details">
      <h3 class="heading-3">${formInput.value}</h3>
      <p class="paragraph-feedback mb-sm">${textarea}</p>
      <a href="#" class="btn-plain btn-plain--feedback">${formOption.textContent}</a>
    </div>
    <div class="feedback__comments-box">
      <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" fill="#CDD2EE" fill-rule="nonzero"/></svg>
      <span>3</span>
    </div>
  </div>
  `;
  console.log(newFeedback);
  // Return to home page
  window.location.href = `/`;
});
