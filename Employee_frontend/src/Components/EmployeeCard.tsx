import React from "react";

const EmployeeCard = (employeeDetails) => {
  return (
    <div>
      <div>
        <h5>
          {employeeDetails.firstName} {employeeDetails.lastName}
        </h5>
      </div>
    </div>
  );
};

export default EmployeeCard;
