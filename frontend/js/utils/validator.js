import {
  emailErrorMessage,
  passwordErrorMessage,
  oldPasswordErrorMessage,
  newPasswordErrorMessage,
  confirmPasswordErrorMessage,
  changeEmailErrorMessage
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
export const passwordChangeValidator = (...data) => {
  const [oldPassword, newPassword, confirmPassword] = data;

  oldPasswordErrorMessage("");
  newPasswordErrorMessage("");
  confirmPasswordErrorMessage("");

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;

  let hasError = false;

  if (!oldPassword) {
    oldPasswordErrorMessage("Old Password is required.");
    hasError = true;
  }

  if (!newPassword) {
    newPasswordErrorMessage("New Password is required.");
    hasError = true;
  }

  if (!confirmPassword) {
    confirmPasswordErrorMessage("Confirm Password is required.");
    hasError = true;
  }

  if (oldPassword === newPassword) {
    newPasswordErrorMessage("New password cannot be same as old password.");
    hasError = true;
  }
  if (newPassword !== confirmPassword) {
    confirmPasswordErrorMessage("Passwords do not match.");
    hasError = true;
  }

  if (!passwordRegex.test(newPassword)) {
    newPasswordErrorMessage(
      "Password should be at least 8 characters long and contain at least one uppercase letter, one number, and one special character."
    );
    hasError = true;
  }

  return hasError ? "Validation Error" : null;
};

export const EmailChangeValidator = (emailInput) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  changeEmailErrorMessage("");

  let hasError = false;
  if (!emailInput) {
    changeEmailErrorMessage("Email is required.");
    hasError = true;
  }
  if (!emailRegex.test(emailInput)) {
    changeEmailErrorMessage("Please enter a valid email address.");
    hasError = true;
  }

  return hasError ? "Validation Error" : null;
};

export default checkEmailPassword;
