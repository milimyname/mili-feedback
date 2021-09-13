// Upvote Box Activate and Increase the upvote number

class Helpers {
  increasedByOne = false;
  // Upvote Box Activate and Increase the upvote number
  upvote(btn, upvoteNumber) {
    btn.classList.toggle('feedback__upvote-box--active');
    btn.classList.remove('feedback__upvote-box--hover');

    if (
      !this.increasedByOne &&
      btn.classList.contains('feedback__upvote-box--active')
    ) {
      upvoteNumber.textContent = +upvoteNumber.textContent + 1;
      this.increasedByOne = !this.increasedByOne;
    } else {
      upvoteNumber.textContent = +upvoteNumber.textContent - 1;
      this.increasedByOne = !this.increasedByOne;
    }
  }

  toggleDropdown(dropdown, option, iconCheck) {
    dropdown.children.forEach((item, _, arr) => {
      item.addEventListener('click', function () {
        const clickedItem = item;

        option.textContent = item.textContent;
        item.classList.add('dropdown__item--active');

        if (item.children.length < 1) {
          item.insertAdjacentHTML('beforeend', iconCheck);
        }

        arr.forEach((item) => {
          if (item !== clickedItem) {
            item.classList.remove('dropdown__item--active');
            item.querySelector('svg')?.remove();
          }
        });
      });
    });
  }

  displayCommentsNumber(commentsNum, comments) {
    commentsNum.textContent = comments.length + 1;
  }
}

export default new Helpers();
