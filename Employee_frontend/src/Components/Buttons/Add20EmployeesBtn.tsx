import { useEmployeeContext } from "../../Contexts/UseEmployeeContext";
import {
  getAllEmployeeItems,
  generate20Employees,
} from "../../Services/Employee_Crud_services";

const Add20EmployeesBtn: React.FC = () => {
  const { setEmployeeList } = useEmployeeContext();

  const handleGenerateEmployees = async () => {
    try {
      await generate20Employees();
      const updatedList = await getAllEmployeeItems();
      setEmployeeList(updatedList);
    } catch (error) {
      console.error("Failed to generate employees:", error);
    }
  };

  return (
    <button className="demo__btn" onClick={handleGenerateEmployees}>
      Generate 20 Employees
    </button>
  );
};

export default Add20EmployeesBtn;
