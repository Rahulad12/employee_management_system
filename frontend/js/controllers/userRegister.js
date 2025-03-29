import { registerUser } from "../apiService/userApi.js";
import { showToast } from "../component/toastMessage.js";
import { authForm, errorMessage, isLoggedIn } from "../utils/helper.js";
import checkEmailPassword from "../utils/validator.js";
// Redirect if already logged in
if (isLoggedIn()) {
  window.location.href = "../screen/employeeDashboard.html";
}

export const userRegister = () => {
  const { userAuthForm, emailInput, passwordInput, submitButton } = authForm();

  userAuthForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Clear previous general error message
    const validationError = checkEmailPassword(password, email); // Check email and password and return the error message here
    if (validationError) {
      return;
    }

    submitButton.disabled = true;
    submitButton.innerText = "Registering...";

    try {
      const response = await registerUser(email, password);
      if (response.success) {
        showToast(response?.message, response.status);
        userAuthForm.reset(); // Reset form after successful registration
      } else {
        showToast(response, "error")
      }
    } catch (error) {
      console.error("Error registering:", error);
      showToast("Error Registering", "error")
    } finally {
      submitButton.disabled = false;
      submitButton.innerText = "Register";
    }
  });
};

userRegister();
