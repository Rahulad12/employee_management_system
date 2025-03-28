import { getUserEmployeeByUserId } from "../apiService/employeeApi.js";
import { sideBarComponent } from "../component/sideBar.js";
import { protectedRoute } from "../component/protectedRoute.js";
import { employeeProfileElement } from "../utils/helper.js";

export const empProfileDashboard = async () => {
  sideBarComponent();
  try {
    const employee = await getUserEmployeeByUserId();

    if (employee.success) {
      updateUI(employee.emp[0]);
    } else {
      console.error(employee.message);
    }
  } catch (error) {
    console.error("Error fetching employee data:", error);
  }
};

// Function to update the UI
const updateUI = (employeeData) => {
  const {
    employeeName,
    employeeEmail,
    employeeJoinDate,
    employeePhone,
    employeePosition,
    employeeDepartment,
  } = employeeProfileElement();

  employeeName.textContent = employeeData.name;
  employeeEmail.textContent = employeeData.email;
  employeeJoinDate.textContent = employeeData.join_date;
  employeePhone.textContent = employeeData.phone;
  employeePosition.textContent = employeeData.position;
  employeeDepartment.textContent = employeeData.department;
};

protectedRoute(empProfileDashboard);
