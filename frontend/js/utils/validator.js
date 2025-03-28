import {
  emailErrorMessage,
  passwordErrorMessage,
  errorMessage,
} from "./helper.js";

const checkEmailPassword = (password, email) => {
  // Clearing previous error messages
  emailErrorMessage("");
  passwordErrorMessage("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;

  let hasError = false;

  if (!email) {
    emailErrorMessage("Email is required.");
    hasError = true;
  }

  if (!password) {
    passwordErrorMessage("Password is required.");
    hasError = true;
  }

  // Stop further checks if email or password is missing
  if (hasError) return "Validation Error";

  if (!emailRegex.test(email)) {
    emailErrorMessage("Please enter a valid email address.");
    hasError = true;
  }

  if (!passwordRegex.test(password)) {
    passwordErrorMessage(
      "Password should be at least 8 characters long and contain at least one uppercase letter, one number, and one special character."
    );
    hasError = true;
  }

  return hasError ? "Validation Error" : null;
};

export default checkEmailPassword;
