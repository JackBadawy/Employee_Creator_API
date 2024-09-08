import Add20EmployeesBtn from "./Add20EmployeesBtn";
import Delete20EmployeesButton from "./Delete20EmployeesBtn";
import "../../Styles/DemoBtnStyles.scss";

const EmployeeDemoBtns = () => {
  return (
    <div className="demo__cont">
      <Add20EmployeesBtn />
      <Delete20EmployeesButton />
    </div>
  );
};

export default EmployeeDemoBtns;
