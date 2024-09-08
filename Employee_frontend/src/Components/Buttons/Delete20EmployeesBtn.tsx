import { useEmployeeContext } from "../../Contexts/UseEmployeeContext";
import {
  deleteLast20Employees,
  getAllEmployeeItems,
} from "../../Services/Employee_Crud_services";

const Delete20EmployeesButton: React.FC = () => {
  const { setEmployeeList } = useEmployeeContext();

  const handleDeleteEmployees = async () => {
    try {
      await deleteLast20Employees();
      const updatedList = await getAllEmployeeItems();
      setEmployeeList(updatedList);
    } catch (error) {
      console.error("Failed to delete employees:", error);
    }
  };

  return (
    <button className="demo__btn" onClick={handleDeleteEmployees}>
      Delete Last 20 Employees
    </button>
  );
};

export default Delete20EmployeesButton;
