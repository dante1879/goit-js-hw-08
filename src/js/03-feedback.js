import throttle from 'lodash.throttle'
const form = document.querySelector(".feedback-form");
const formInput = {};

form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", throttle(onTextInput), 500);

populateFields();

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem("feedback-form-state");
}

function onTextInput(evt) {
  evt.preventDefault();

  formInput[evt.target.name] = evt.target.value;
  formInput[evt.target.name] = evt.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(formInput));
}

function populateFields() {
  const previousFormState = JSON.parse(
    localStorage.getItem("feedback-form-state")
  );

  if (previousFormState) {
    const { email, message } = previousFormState;

    form.email.value = email;
    form.message.value = message;

    console.log(previousFormState);
  }
}
