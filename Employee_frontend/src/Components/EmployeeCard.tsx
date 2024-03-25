import React from "react";
import "../Styles/EmployeeCardStyles.scss";

const EmployeeCard = (employeeDetails) => {
  return (
    <div className="employee-card">
      <hr className="employee-card__h-rule" />
      <div className="employee-card__container">
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
    </div>
  );
};

export default EmployeeCard;
