import { loginUser } from "../apiService/userApi.js";
import {
  authForm,
  emailErrorMessage,
  errorMessage,
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
    errorMessage({ message: "", success: true });
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
        errorMessage({
          success: true,
          message: response.message || "Login Successful",
        });

        // Redirect after successful login
        setTimeout(() => {
          window.location.href = "../screen/employeeDashboard.html";
        }, 1000);
      } else {
        errorMessage({
          success: false,
          message: response || "Login failed. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error logging in:", error);
      errorMessage({
        success: false,
        message: "An error occurred. Please try again later.",
      });
    } finally {
      submitButton.disabled = false;
      submitButton.innerText = "Login";
    }
  });
};

userLogin();
