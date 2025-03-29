import { createLeave, getLeaves } from "../apiService/leaveApi.js";
import { sideBarComponent } from "../component/sideBar.js";
import { showToast } from "../component/toastMessage.js";

import {
  employeeLeaveElement
} from "../utils/helper.js";

export const employeeLeave = async () => {
  sideBarComponent();
  const {
    leaveForm,
    leaveType,
    leaveStartDate,
    leaveEndDate,
    leaveReason,
    leaveStatus,
    totalLeave
  } = employeeLeaveElement();

  //get leaves data
  const totalTakenLeaves = await getLeaves();

  const leaveHandler = async (e) => {
    e.preventDefault();
    const leaveData = {
      leave_type: leaveType.value,
      start_date: leaveStartDate.value,
      end_date: leaveEndDate.value,
      notes: leaveReason.value
    };
    console.log(leaveData);
    if (leaveData.start_date > leaveData.end_date) {
      showToast("Start date cannot be greater than end date", "error");
      return;
    }
    if (leaveData.leave_type === "" || leaveData.start_date === "" || leaveData.end_date === "" || leaveData.notes === "") {
      showToast("All fields are required  ", "error");
      return;
    }
    const empId = localStorage.getItem("empId");
    const response = await createLeave(leaveData, empId);

    if (response.success) {
      showToast(response.message, response.status);
      leaveForm.reset();
    }
    else {
      showToast(response, "error");
      leaveForm.reset();
    }
  };

  // Modal for total leave
  const totalLeaveModal = () => {
    const modal = document.getElementById("total-leave-modal");
    modal.innerHTML = `
    <div class="modal-content">
      <span class="close" id="closeModal">&times;</span>
      <table>
      <thead>
        <tr>
          <th>Leave Type</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Note</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        ${totalTakenLeaves?.leaves?.map((leave) => {
      return `
          <tr>
            <td>${leave.leave_type}</td>
            <td>${new Date(leave.start_date).toLocaleDateString()}</td>
            <td>${new Date(leave.end_date).toLocaleDateString()}</td>
            <td>${leave.notes}</td>
            <td>${leave.status}</td>
          </tr>
        `;

    }

    ).join("")}
      </tbody>
      </table>
    </div>
    `;
    modal.style.display = "block";
    const close = document.getElementById("closeModal");
    close.addEventListener("click", () => {
      modal.style.display = "none";
    });
  };
  totalLeave.addEventListener("click", totalLeaveModal);
  leaveForm.addEventListener("submit", leaveHandler);
};


employeeLeave();
