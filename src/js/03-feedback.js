import { throttle } from 'lodash';

const feedbackForm = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

feedbackForm.addEventListener('input', throttle(e => {
    const objactToSave = { email: email.value, message: message.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objactToSave));
    }, 500)
);
feedbackForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log({ email: email.value, message: message.value });
    feedbackForm.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
  });

const load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined :  JSON.parse(serializedState);
    } catch (error) {
      console.error("Get state error: ", error.message);
    }
  };

  const storageData = load(LOCALSTORAGE_KEY);
if (storageData) {
  email.value = storageData.email;
  message.value = storageData.message;
}

