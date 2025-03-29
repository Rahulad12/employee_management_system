import { getUserEmployeeByUserId } from "../apiService/employeeApi.js";
import { protectedRoute } from "../component/protectedRoute.js";
import { sideBarComponent } from "../component/sideBar.js";
import { stats } from "../utils/data.js";
import { employeeDashboardElement } from "../utils/helper.js";

export const employeeDashboard = async () => {
  sideBarComponent();
  //destruct the elements of employee dashboard
  const { dashboardBody, dashboard_title } = employeeDashboardElement();
  //fetch the employee data
  const employee = await getUserEmployeeByUserId();
  //save the  fetched data to local storage
  dashboard_title.innerHTML = `
    <h3>Welcome ${employee?.emp[0]?.name || "User Name"}</h3>
  `;
  //dashbord content
  dashboardBody.innerHTML = `
      ${stats
      .map(
        (item) => `
          <div class="stats-box">
            <h3>${item.title}</h3>
            <p>${item.value}</p>
          </div>
        `
      )
      .join("")}
  `;
};
protectedRoute(employeeDashboard);
