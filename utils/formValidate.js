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
export const signUpHandleBlur = (formData, name, formErrors, setFormErrors) => {
  let newFormErrors = { ...formErrors };
  if (name === "firstName") {
    newFormErrors.firstNameError = !nameRegex.test(formData.firstName)
      ? "First name must be at least 4 characters"
      : "";
  } else if (name === "lastName") {
    newFormErrors.lastNameError = !nameRegex.test(formData.lastName)
      ? "Last name must be at least 4 characters"
      : "";
  } else if (name === "password") {
    newFormErrors.passwordError = !passwordRegex.test(formData.password)
      ? "min. 8 characters, one uppercase letter, lowercase letter, number, special character"
      : "";
  } else if (name === "email") {
    newFormErrors.emailError = !emailRegex.test(formData.email)
      ? "Invalid email"
      : "";
  }
  newFormErrors.roleError =
    formData.roleId === "" ? "Role must be selected" : "";
  setFormErrors(newFormErrors);
};

export const signUpValidateForm = (
  formData,
  setFormErrors,
  dispatch,
  register
) => {
  // event.preventDefault();
  const { firstName, lastName, password, email, roleId } = formData;
  const errors = {};
  if (!firstName) {
    errors.firstNameError = "Enter a first name";
  } else if (!nameRegex.test(firstName)) {
    errors.firstNameError = "First name must be at least 4 characters";
  }
  if (!lastName) {
    errors.lastNameError = "Enter a last name";
  } else if (!nameRegex.test(lastName)) {
    errors.lastNameError = "Last name must be at least 4 characters";
  }
  if (!password) {
    errors.passwordError = "Enter a password";
  } else if (!passwordRegex.test(password)) {
    errors.passwordError =
      "min. 8 characters, one uppercase letter, lowercase letter, number, special character";
  }
  if (!email) {
    errors.emailError = "Enter an email";
  } else if (!emailRegex.test(email)) {
    errors.emailError = "Invalid email";
  }
  if (!roleId) {
    errors.roleError = "Role must be selected";
  }
  setFormErrors(errors);
  if (Object.keys(errors).length === 0) {
    dispatch(register(formData));
  }
};
