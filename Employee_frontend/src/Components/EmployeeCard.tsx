import React from "react";

const EmployeeCard = (employeeDetails) => {
  return (
    <div className="employee-card">
      <div className="employee-card__info">
        <h5>
          {employeeDetails.firstName} {employeeDetails.lastName}
        </h5>
        <p>Contract -{employeeDetails.contractLength}</p>
        <p>{employeeDetails.email}</p>
      </div>
      <div className="employee-card__buttons">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default EmployeeCard;
