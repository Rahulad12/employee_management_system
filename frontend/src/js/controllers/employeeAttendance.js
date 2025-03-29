import { getEmployeeAttendance } from "../apiService/attendanceApi.js";
import { protectedRoute } from "../component/protectedRoute.js";
import { sideBarComponent } from "../component/sideBar.js";
import { employeeAttendaceElement } from "../utils/helper.js";

export const employeeAttendace = async () => {
    const empId = localStorage.getItem("empId");
    sideBarComponent();

    const { attendnaceContainer, searchAttendanceInput } = employeeAttendaceElement();
    // Fetch attendance data
    const response = await getEmployeeAttendance(empId);
    const totalAttendance = response.attendance || [];

    // Function to render attendance table
    const renderAttendanceTable = (data) => {
        if (!data.length) {
            attendnaceContainer.innerHTML = `<p class="no-data">No records found.</p>`;
            return;
        }

        attendnaceContainer.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Clock In</th>
                        <th>Clock Out</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.map(attendance => `
                        <tr>
                            <td>${new Date(attendance.date).toLocaleDateString()}</td>
                            <td>${new Date(attendance.clock_in).toLocaleTimeString()}</td>
                            <td>${new Date(attendance.clock_out).toLocaleTimeString()}</td>
                            <td>${attendance.status}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        `;
    };

    // Initial render
    renderAttendanceTable(totalAttendance);

    // Search function
    searchAttendanceInput.addEventListener("change", (event) => {
        const searchDate = new Date(event.target.value).toLocaleDateString();
        const filteredData = totalAttendance.filter(attendance =>
            new Date(attendance.date).toLocaleDateString() === searchDate
        );
        renderAttendanceTable(filteredData);
    });
};

protectedRoute(employeeAttendace);
