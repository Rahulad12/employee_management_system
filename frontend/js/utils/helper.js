export const resetForm = (...data) => {
  data.forEach((element) => {
    element.value = "";
  });
  return data;
};
export const authForm = () => {
  const userAuthForm = document.getElementById("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const submitButton = document.getElementById("submit-button");
  return { userAuthForm, emailInput, passwordInput, submitButton };
};

export const employeeDashboardElement = () => {
  const dashboardBody = document.getElementById("dashboard-body");
  const dashboard_title = document.getElementById("dashboard-title");
  return { dashboardBody, dashboard_title };
};

export const employeeProfileElement = () => {
  const employeeName = document.getElementById("employee-name");
  const employeeEmail = document.getElementById("employee-email");
  const employeeJoinDate = document.getElementById("employee-join-date");
  const employeePhone = document.getElementById("employee-phone");
  const employeePosition = document.getElementById("employee-position");
  const employeeDepartment = document.getElementById("employee-department");

  return {
    employeeName,
    employeeEmail,
    employeeJoinDate,
    employeePhone,
    employeePosition,
    employeeDepartment,
  };
};

export const employeeLeaveElement = () => {
  const leaveForm = document.getElementById("leave-form");
  const leaveType = document.getElementById("employee-leave-type");
  const leaveStartDate = document.getElementById("employee-leave-start-date");
  const leaveEndDate = document.getElementById("employee-leave-end-date");
  const leaveReason = document.getElementById("employee-leave-reason");
  const leaveStatus = document.getElementById("employee-leave-status");
  const totalLeave = document.getElementById("employee-total-leave");

  return {
    leaveForm,
    leaveType,
    leaveStartDate,
    leaveEndDate,
    leaveReason,
    leaveStatus,
    totalLeave
  }
}
export const employeeAttendaceElement = () => {
  const attendnaceContainer = document.getElementById("attendance-container")
  const searchAttendanceInput = document.getElementById("search-attendance");
  return { attendnaceContainer, searchAttendanceInput };
}
export const changePasswordElement = () => {
  const changePasswordForm = document.getElementById("change-password-form");
  const oldPasswordInput = document.getElementById("old-password");
  const newPasswordInput = document.getElementById("new-password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  const changePasswordButton = document.getElementById("change-password-btn");

  return {
    changePasswordForm,
    oldPasswordInput,
    newPasswordInput,
    confirmPasswordInput,
    changePasswordButton,
  };
};

export const changeEmailElement = () => {
  const changeEmailForm = document.getElementById("change-email-form");
  const newEmailInput = document.getElementById("email");
  const changeEmailButton = document.getElementById("change-email-btn");

  return { changeEmailForm, newEmailInput, changeEmailButton };
};
export const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};

export const passwordErrorMessage = (message) => {
  const errorElement = document.getElementById("password-error-message");
  errorElement.textContent = message;
  errorElement.style.color = "red";
  errorElement.style.display = message ? "block" : "none";
};
export const emailErrorMessage = (message) => {
  const errorElement = document.getElementById("email-error-message");
  errorElement.textContent = message;
  errorElement.style.color = "red";
  errorElement.style.display = message ? "block" : "none";
};
export const errorMessage = (message) => {
  const errorElement = document.getElementById("error-message");
  errorElement.textContent = message.message;
  errorElement.style.color = message.success ? "green" : "red";
  errorElement.style.display = message.message ? "block" : "none";
};
export const oldPasswordErrorMessage = (message) => {
  const oldPasswordInput = document.getElementById(
    "old-password-error-message"
  );
  oldPasswordInput.textContent = message;
  oldPasswordInput.style.color = "red";
  oldPasswordInput.style.display = message ? "block" : "none";
};

export const newPasswordErrorMessage = (message) => {
  const newPasswordInput = document.getElementById(
    "new-password-error-message"
  );
  newPasswordInput.textContent = message;
  newPasswordInput.style.color = "red";
  newPasswordInput.style.display = message ? "block" : "none";
};

export const confirmPasswordErrorMessage = (message) => {
  const confirmPasswordInput = document.getElementById(
    "confirm-password-error-message"
  );
  confirmPasswordInput.textContent = message;
  confirmPasswordInput.style.color = "red";
  confirmPasswordInput.style.display = message ? "block" : "none";
};

export const changeEmailErrorMessage = (message) => {
  const changeEmailInput = document.getElementById(
    "change-email-error-message"
  );
  changeEmailInput.textContent = message;
  changeEmailInput.style.color =
    message == "Email changed successfully" ? "green" : "red";
  changeEmailInput.style.display = message ? "block" : "none";
};

