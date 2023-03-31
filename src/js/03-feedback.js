const formEl = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
let feedbackData = {};

formEl.addEventListener(
  'input',
  throttle(event => {
    feedbackData = { email: email.value, message: message.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackData));
  }, 500)
);

const savedFeedbackData = JSON.parse(
  localStorage.getItem('feedback-form-state')
);

if (savedFeedbackData) {
  email.value = savedFeedbackData.email;
  message.value = savedFeedbackData.message;
}

formEl.addEventListener('submit', event => {
  event.preventDefault();

  if (!email.value || !message.value) {
    return;
  }

  feedbackData = { email: email.value, message: message.value };
  console.log(feedbackData);
  formEl.reset();
  localStorage.removeItem('feedback-form-state');
});