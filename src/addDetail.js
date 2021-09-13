import './sass/main.scss';
import userRyan from './assets/user-images/image-ryan.jpg';
import userAnne from './assets/user-images/image-anne.jpg';
import userElijah from './assets/user-images/image-elijah.jpg';
import helpers from './helpers';



const commentsNum = document.querySelector('.comments-number');
let comments = document.querySelectorAll('.comment');
// Line

// Img
let userImgs = document.querySelectorAll('.comment__img');
let lastUserImg = userImgs[userImgs.length - 1];

// User Images
userImgs.forEach((img) => {
  if (img.classList.contains('user-elijah')) img.src = userElijah;
  if (img.classList.contains('user-anne')) img.src = userAnne;
  if (img.classList.contains('user-ryan')) img.src = userRyan;
});

// Comments Number
commentsNum.textContent = comments.length;

// Change the style of upvote box
const upvoteObj = {
  upvote: document.querySelector('.feedback__upvote-box'),
  upvoteNumber: document.querySelector('.feedback__upvote-number'),
};

upvoteObj.upvote.addEventListener('click', function () {
  helpers.upvote(upvoteObj.upvote, upvoteObj.upvoteNumber);
});

// Increase the height's line of comments
const increaseLineHeight = function (line, commentBox, img) {
  line.style.height = `${
    img.offsetTop +
    Number.parseInt(getComputedStyle(img).height) / 2 -
    commentBox.offsetTop -
    line.offsetTop
  }px`;
};

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-reply')) {
    e.preventDefault();
    const details = e.target.closest('.comment__details');
    // const firedComment = e.target.closest('.comment');
    const replyHtml = `
    <div class="reply-box">
      <textarea class="footer__textarea textarea"></textarea>
      <button class="btn btn--post reply-box--reply">Post Reply</button>
    </div>`;

    //  Get the username
    const userName = e.target
      .closest('.comment__name-box')
      .querySelector('.paragraph-username').textContent;

    if (!details.querySelector('.reply-box')) {
      details.insertAdjacentHTML('beforeend', replyHtml);
    } else {
      document.querySelector('.reply-box').remove();
    }

    const btnPostReply = document.querySelector('.reply-box--reply');
    btnPostReply.addEventListener('click', function (e) {
      const main = e.target.closest('.comment-main');
      const textarea = document.querySelector('.footer__textarea');
      const html = `<div class="comment comment-reply">
                      <img src="${userElijah}" alt="User photo" class="comment__img">
                      <div class="comment__details">
                        <div class="comment__name-box">
                          <div class="comment__name">
                            <h4 class="heading-4"> Ryan Welles </h4>
                            <p class="paragraph-username">@voyager.344</p>
                          </div>
                          <a href="#" class="btn-reply">Reply</a>
                        </div>
                      <p class="paragraph-comment">
                        <span class="comment__tag-username tag-username">${userName}</span> ${textarea.value} 
                      </p>
                      </div>
                    </div>`;

      // Amount of messages display
      comments = document.querySelectorAll('.comment');
      helpers.displayCommentsNumber(commentsNum, comments);

      // Insert Reply Message in Main
      main.insertAdjacentHTML('beforeend', html);
      document.querySelector('.reply-box').remove();

      // Refresh images
      userImgs = main.querySelectorAll('.comment__img');
      lastUserImg = userImgs[userImgs.length - 1];

      const line = main.querySelector('.line');
      line.classList.remove('display-none');
      const commentBox = main.querySelector('.comment__img-box');
      increaseLineHeight(line, commentBox, lastUserImg);
    });
  }
});

// Press the btn Post
const btnPost = document.querySelector('.btn--post');
btnPost.addEventListener('click', function (e) {
  e.preventDefault();
  // Get the textarea el and mainDetail parentEl
  const textarea = document.querySelector('.footer__textarea');
  const mainDetail = document.querySelector('.main-detail');

  const html = `<div class="comment-main">
                  <div class="comment">
                    <div class="comment__img-box">
                      <img src="${userElijah}" alt="User photo" class="comment__img user-elijah">
                      <div class="line mt-sm display-none">&nbsp;</div>
                    </div>
                    <div class="comment__details">
                      <div class="comment__name-box">
                        <div class="comment__name">
                          <h4 class="heading-4"> Elijah Moss</h4>
                          <p class="paragraph-username">@hexagon.bestagon</p>
                        </div>
                        <a href="#" class="btn-reply">Reply</a>
                      </div>
                      <p class="paragraph-comment">
                        ${textarea.value}
                      </p> 
                    </div>
                  </div>
                </div>`;

  comments = document.querySelectorAll('.comment');
  helpers.displayCommentsNumber(commentsNum, comments);
  mainDetail.insertAdjacentHTML('beforeend', html);
  textarea.value = '';

  const commentMain = document.querySelectorAll('.comment-main');
  const lastCommentMain = commentMain[commentMain.length - 1];

  //Refresh images
  userImgs = document.querySelectorAll('.comment__img');
  lastUserImg = userImgs[userImgs.length - 1];

  // Get a distance between the line top and the last img top
  const line = lastCommentMain.querySelector('.line');
  const commentBox = lastCommentMain.querySelector('.comment__img-box');

  increaseLineHeight(line, commentBox, lastUserImg);
});
