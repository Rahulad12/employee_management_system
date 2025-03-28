import { EMP_URL } from "../constant.js";

/**
 * @function getUserEmployeeByUserId
 * @description Fetches an employee by user ID from the server.
 * @returns {Promise<object>} - A promise that resolves to an object with a success message and an employee object or an error message.
 * @Access user
 * userid is send from the requested login user
 */
export const getUserEmployeeByUserId = async () => {
  const token = localStorage.getItem("token");
  const storedEmployee = JSON.parse(localStorage.getItem("employee"));
  const storedToken = localStorage.getItem("employeeToken");

  if (storedEmployee && storedToken === token) {
    console.log("Using cached employee data...");
    return storedEmployee;
  }
  try {
    const response = await fetch(`${EMP_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const result = await response.json();
    localStorage.setItem("employee", JSON.stringify(result));
    localStorage.setItem("employeeToken", token);
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
