import throttle from 'lodash.throttle';

feedbackFormRef = document.querySelector('.feedback-form');

feedbackFormRef.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
  localStorage.setItem(e.target.name, e.target.value);
  //   console.log(e.target.name);
}
