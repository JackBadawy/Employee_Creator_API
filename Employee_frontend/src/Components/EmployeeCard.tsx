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
      // Optionally, trigger a state update or refetch the employee list after deletion
    }
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
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
