import throttle from 'lodash.throttle';

const STATE_STORAGE_KEY = 'feedback-form-state';

const feedbackFormRef = document.querySelector('.feedback-form');

feedbackFormRef.addEventListener('input', throttle(saveFormState, 500));
feedbackFormRef.addEventListener('submit', onFormSubmit);

retrieveFormState(feedbackFormRef);

function saveFormState(e) {
  const formRef = e.target.closest('form');
  const formState = {
    email: formRef.email.value,
    message: formRef.message.value,
  };
  localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(formState));
}

function onFormSubmit(e) {
  e.preventDefault();

  const formState = {
    email: e.currentTarget.email.value,
    message: e.currentTarget.message.value,
  };
  console.log(formState);

  e.currentTarget.reset();

  clearFormState();
}

function retrieveFormState(formRef) {
  if (!localStorage.getItem(STATE_STORAGE_KEY)) return;

  const { email, message } = JSON.parse(
    localStorage.getItem(STATE_STORAGE_KEY)
  );
  formRef.email.value = email;
  formRef.message.value = message;
}

function clearFormState() {
  localStorage.removeItem(STATE_STORAGE_KEY);
}
