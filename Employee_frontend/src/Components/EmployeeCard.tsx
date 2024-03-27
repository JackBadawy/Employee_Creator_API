import React from "react";
import "../Styles/EmployeeCardStyles.scss";
import { useNavigate } from "react-router-dom";

const EmployeeCard = (employeeDetails) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${employeeDetails.id}`);
  };

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
          <button onClick={handleEdit}>Edit</button>
          <p>|</p>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
