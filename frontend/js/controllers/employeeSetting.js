import { updateUserEmail, updateUserPassword } from "../apiService/settingApi.js";
import { protectedRoute } from "../component/protectedRoute.js";
import { sideBarComponent } from "../component/sideBar.js";
import { showToast } from "../component/toastMessage.js";
import { changeEmailElement, changePasswordElement, resetForm } from "../utils/helper.js";
import { passwordChangeValidator, EmailChangeValidator } from "../utils/validator.js";

export const employeeSetting = () => {
    sideBarComponent();
    const { changePasswordForm,
        oldPasswordInput,
        newPasswordInput,
        confirmPasswordInput,
        changePasswordButton } = changePasswordElement();
    const { changeEmailForm, newEmailInput, changeEmailButton } = changeEmailElement();

    const passwordChange = async (e) => {
        e.preventDefault();
        const oldPassword = oldPasswordInput.value.trim();
        const newPassword = newPasswordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        const validateError = passwordChangeValidator(
            oldPassword, newPassword, confirmPassword
        )
        if (validateError) {
            return;
        }
        changePasswordButton.disable = true
        changePasswordButton.innerText = "Changing..."
        try {

            const response = await updateUserPassword({
                password: newPassword
            });
            console.log(response) //sending bodydata
            if (response.success) {
                showToast(response?.message, response.status)
                resetForm(oldPasswordInput,
                    newPasswordInput,
                    confirmPasswordInput)
            }
            else {
                showToast(response, "error")
                resetForm(oldPasswordInput,
                    newPasswordInput,
                    confirmPasswordInput)
            }
        } catch (error) {
            console.log(error)
            showToast(error.message, "error")
            resetForm(oldPasswordInput,
                newPasswordInput,
                confirmPasswordInput)
        }
        finally {
            changePasswordButton.disable = false;
            changePasswordButton.innerText = "Change Password"
        }

    }
    const emailChange = async (e) => {
        e.preventDefault();
        const newEmail = newEmailInput.value.trim();

        const validationError = EmailChangeValidator(
            newEmail
        )
        if (validationError) {
            return;
        }
        changeEmailButton.disable = true
        changeEmailButton.innerText = "Changing..."
        try {
            const response = await updateUserEmail({
                email: newEmail
            })
            if (response.success) {
                showToast(response.message, response.status);
                resetForm(newEmailInput)
            }
            else {
                showToast(response, "error");
                resetForm(newEmailInput);
            }
        } catch (error) {
            console.log(error);
            showToast(error.message, "error")
            resetForm(newEmailInput)
        }
        finally {
            changeEmailButton.disable = false;
            changeEmailButton.innerText = "Change Email"
        }
    }

    changePasswordForm.addEventListener("submit", passwordChange);
    changeEmailForm.addEventListener("submit", emailChange)
}
protectedRoute(employeeSetting)
