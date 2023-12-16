document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');

  const storedState =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};

  form.email.value = storedState.email || '';

  form.message.value = storedState.message || '';

  form.addEventListener('input', function (event) {
    if (event.target.name === 'email' || event.target.name === 'message') {
      const currentState = {
        email: form.email.value.trim(),
        message: form.message.value.trim(),
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
    }
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (form.email.value.trim() && form.message.value.trim()) {
      const formData = {
        email: form.email.value.trim(),
        message: form.message.value.trim(),
      };
      console.log('Form Data:', formData);

      form.reset();
      localStorage.removeItem('feedback-form-state');
    }
  });
});
