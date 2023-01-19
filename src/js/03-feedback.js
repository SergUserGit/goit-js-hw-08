import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');
const formInput = document.querySelector('input');
const formTextarea = document.querySelector('textarea');
const formDate = {};

populateElements();

feedbackForm.addEventListener('input', throttle(onFeedbackFormInput, 500));
feedbackForm.addEventListener('submit', onFeedbackFormSubmit);

function onFeedbackFormInput(event) {
  formDate[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formDate));
}

function onFeedbackFormSubmit(event) {
  event.preventDefault();

  const dateObject = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (dateObject) {
    console.log(dateObject);
  }

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateElements() {
  const dateObject = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (dateObject) {
    formInput.value = dateObject.email ?? '';

    formTextarea.value = dateObject.message ?? '';

    for (const key in dateObject) {
      formDate[key] = dateObject[key];
    }
  } else {
    formInput.value = '';
    formTextarea.value = '';
  }
}
