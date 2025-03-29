import { ADMIN_URL } from "../constant";

/**
 * @function getAllUser
 * @description Gets all users from the server.
 * @returns {Promise<object>} - A promise that resolves to an object with a success message and a users array or an error message.
 * @Access admin
 */

export const getAllUser = async () => {


  try {
    const response = await fetch(`${ADMIN_URL}/alluser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return response.ok ? result : `${result.message}`;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
/**
 * @function getAllEmployee
 * @description Fetches all employees from the server.
 * @returns {Promise<object>} - A promise that resolves to an object with a success message and an employees array or an error message.
 * @Access admin
 */

export const getAllEmployee = async () => {
  try {
    const response = await fetch(`${ADMIN_URL}/allemployee`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return response.ok ? result : `${result.message}`;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
/**
 * @function updateUser
 * @description Updates a user's information on the server.
 * @param {string} id - The ID of the user to update.
 * @param {object} updateData - An object containing the user's updated data.
 * @returns {Promise<object|string>} - A promise that resolves to the updated user data if successful, or an error message.
 * @Access superadmin
 */

export const updateUser = async (id, updateData) => {
  try {
    const response = await fetch(`${ADMIN_URL}/userupdate/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
    const result = await response.json();
    return response.ok ? result : `${result.message}`;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
