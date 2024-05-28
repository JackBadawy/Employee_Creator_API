import "../Styles/EmployeeCardStyles.scss";
import { useNavigate } from "react-router-dom";
import { useEmployeeContext } from "../Contexts/UseEmployeeContext";

const EmployeeCard = (employeeDetails) => {
  const navigate = useNavigate();
  const { deleteEmployeeItem } = useEmployeeContext();

  const handleEdit = () => {
    navigate(`/edit/${employeeDetails.id}`);
  };

  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if (isConfirmed) {
      await deleteEmployeeItem(employeeDetails.id);
    }
  };

  return (
    <div className="employee-card">
      <hr className="employee-card__h-rule" />
      <div className="employee-card__container">
        <div className="employee-card__info">
          <p className="employee-card__full-name">
            {employeeDetails.firstName} {employeeDetails.lastName}
          </p>
          <p>Contract -{employeeDetails.contractLength}</p>
          <p>{employeeDetails.email}</p>
        </div>
        <div className="employee-card__buttons">
          <button className="btn" onClick={handleEdit}>
            Edit
          </button>
          <p>|</p>
          <button className="btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
