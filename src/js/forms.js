const logInForm = document.getElementById("log-in-form");
const signUpForm = document.getElementById("sign-up-form");

const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;
const passwordRegex = /^[a-zA-Z0-9]{10,}$/;

const validateField = (field) => {
  const regEx = field.type == "email" ? emailRegex : passwordRegex;
  const value = field.value.trim();
  const errorMessage = field.parentElement.querySelector(
    "[data-error-message]"
  );

  errorMessage.classList.add("hidden");
  field.classList.remove("input-error");

  if (!regEx.test(value)) {
    errorMessage.classList.remove("hidden");
    field.classList.add("input-error");
  }

  return regEx.test(value);
};

const validateForm = (form) => {
  const { email: emailInp, password: passInp } = form.elements;

  const isEmailValid = validateField(emailInp);
  const isPasswordValid = validateField(passInp);

  return isEmailValid && isPasswordValid;
};

const handleFormSubmit = (e) => {
  const isFormValid = validateForm(e.target);

  if (!isFormValid) e.preventDefault();
};

logInForm.addEventListener("submit", handleFormSubmit);
signUpForm.addEventListener("submit", handleFormSubmit);
