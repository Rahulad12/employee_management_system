import { loginUser } from "../apiService/userApi.js";
import { showToast } from "../component/toastMessage.js";
import {
  authForm,
  emailErrorMessage,
  isLoggedIn,
  passwordErrorMessage,
} from "../utils/helper.js";
// Redirect if already logged in
if (isLoggedIn()) {
  window.location.href = "../screen/employeeDashboard.html";
}

export const userLogin = () => {
  const { userAuthForm, emailInput, passwordInput, submitButton } = authForm();

  userAuthForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Clear previous error messages
    emailErrorMessage("");
    passwordErrorMessage("");

    let hasError = false;

    if (!email) {
      emailErrorMessage("Email is required.");
      hasError = true;
    }

    if (!password) {
      passwordErrorMessage("Password is required.");
      hasError = true;
    }

    if (hasError) return; // Stop execution if there are validation errors

    submitButton.disabled = true;
    submitButton.innerText = "Logging in...";

    try {
      const response = await loginUser(email, password);

      if (response.success) {
        localStorage.setItem("token", response?.user?.token);
        showToast(response?.message, response.status)
        // Redirect after successful login
        setTimeout(() => {
          window.location.href = "../screen/employeeDashboard.html";
        }, 1000);
      } else {
        showToast("Login failed,please try again", "error")
      }
    } catch (error) {
      console.error("Error logging in:", error);
      showToast("An error occurred. please try agian later", "error")
    } finally {
      submitButton.disabled = false;
      submitButton.innerText = "Login";
    }
  });
};

userLogin();
