import { SETTING_URL } from "../constant.js";


const updateUserEmail = async (data) => {
    try {
        const response = await fetch(`${SETTING_URL}/user/updateemail`, {
            method: "PUT",
            headers: {
                "content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(data)
        })

        const result = await response.json();
        return response.ok ? result : `${result.message}`;
    } catch (error) {
        return `Error:${error.message}`;
    }

}

const updateUserPassword = async (data) => {
    console.log(data)
    try {
        const response = await fetch(`${SETTING_URL}/user/updatepassword`, {
            method: "PUT",
            headers: {
                "content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(data)
        })

        const result = await response.json();
        return response.ok ? result : `${result.message}`;
    } catch (error) {
        console.log(error)
        return `Error: ${error.message}`;
    }
}
export { updateUserPassword, updateUserEmail };