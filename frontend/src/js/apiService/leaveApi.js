import { LEAVE_URL } from "../constant.js";

const createLeave = async (leave, empId) => {
  console.log(leave, empId);

  try {
    const response = await fetch(`${LEAVE_URL}/${empId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(leave),
    });
    console.log(response);
    const result = await response.json();
    return response.ok ? result : `${result.message}`;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};

const getLeaves = async () => {
  try {
    const response = await fetch(`${LEAVE_URL}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const result = await response.json();
    return response.ok ? result : `${result.message}`;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};

export { createLeave, getLeaves };
