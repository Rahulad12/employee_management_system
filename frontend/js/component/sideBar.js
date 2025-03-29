const sideBar = document.getElementById("side-bar");
const logOut = () => {
  localStorage.removeItem("token");
  window.location.href = "../screen/userLogin.html";
};
export const sideBarComponent = () => {
  sideBar.innerHTML = `
                          <ul>
                              <li><a href="../screen/employeeDashboard.html">Dashboard</a></li>
                              <li><a href="../screen/employeeProfile.html">Profile</a></li>
                              <li><a href="../screen/employeeLeave.html">Leave</a></li>
                              <li><a href="../screen/employeeAttendance.html">Attendance</a></li>
                              <li><a href="../screen/employeeSetting.html">Settings</a></li>
                              <li><a id="logout" href="#">Logout</a></li>
                          </ul>
  `;

  const logOUtButton = document.getElementById("logout");
  logOUtButton.addEventListener("click", () => {
    logOut();
  });
};
