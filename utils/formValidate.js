const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^.{4,}$/;

export const signInValidateForm = (
  event,
  formData,
  setFormErrors,
  dispatch,
  login
) => {
  event.preventDefault();
  const { email, password } = formData;
  const errors = {};
  if (!email) {
    errors.emailError = "Enter an email";
  } else if (!emailRegex.test(email)) {
    errors.emailError = "Invalid email";
  }
  if (!password) {
    errors.passwordError = "Enter a password";
  } else if (!passwordRegex.test(password)) {
    errors.passwordError =
      "min. 8 characters, one uppercase letter, lowercase letter, number, special character";
  }
  setFormErrors(errors);
  if (Object.keys(errors).length === 0) {
    "data", formData;
    dispatch(login(formData));
  }
};

export const signInHandleBlur = (formData, name, formErrors, setFormErrors) => {
  let newFormErrors = { ...formErrors };
  if (name === "password") {
    newFormErrors.passwordError = !passwordRegex.test(formData.password)
      ? "min. 8 characters, one uppercase letter, lowercase letter, number, special character"
      : "";
  } else if (name === "email") {
    newFormErrors.emailError = !emailRegex.test(formData.email)
      ? "Invalid email"
      : "";
  }
  setFormErrors(newFormErrors);
};
