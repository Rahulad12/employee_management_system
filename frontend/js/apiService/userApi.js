import { AUTH_URL } from "../constant.js";

/**
 * @function loginUser
 * @description Authenticates a user with the provided email and password.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Promise<object|string>} - A promise that resolves to the user's data if login is successful, or an error message if not.
 */

export const loginUser = async (email, password) => {
  const loginData = { email, password };
  console.log(email, password);

  try {
    const response = await fetch(`${AUTH_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    console.log(response)
    const result = await response.json();
    console.log(result)
    return response.ok ? result : `${result.message}`;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};

/**
 * @function registerUser
 * @description Registers a user with the provided email and password.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Promise<object|string>} - A promise that resolves to the user's data if registration is successful, or an error message if not.
 */
export const registerUser = async (email, password) => {
  const userData = {
    email,
    password,
  };
  try {
    const response = await fetch(`${AUTH_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await response.json();
    return response.ok ? result : `${result.message}`;
  } catch (error) {
    return `Error: ${error.message}`;
  }
};
