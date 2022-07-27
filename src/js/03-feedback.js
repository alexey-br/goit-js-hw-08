import throttle from 'lodash.throttle';

feedbackFormRef = document.querySelector('.feedback-form');

feedbackFormRef.addEventListener('input', throttle(saveFormState, 500));

retrieveFormState();


function retrieveFormState() {
  if (!localStorage.getItem('feedback-form-state')) return;

  const { email, message } = JSON.parse(localStorage.getItem('feedback-form-state')); 
  feedbackFormRef.email.value = email;
  feedbackFormRef.message.value = message;
}

function saveFormState() {
  const formState = {email: feedbackFormRef.email.value, message: feedbackFormRef.message.value}
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}
