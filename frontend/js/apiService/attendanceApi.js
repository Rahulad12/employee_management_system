import { ATTENDANCE_URL } from "../constant.js";

const getEmployeeAttendance = async (empId) => {
    try {
        const response = await fetch(`${ATTENDANCE_URL}/${empId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        const result = await response.json();
        return response.ok ? result : `${result?.message}`
    } catch (error) {
        console.log(error)
        return `Error: ${error}`
    }
}
export { getEmployeeAttendance };