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
