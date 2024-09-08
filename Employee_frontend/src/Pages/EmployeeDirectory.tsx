import { useEffect, useState } from "react";
import { useEmployeeContext } from "../Contexts/UseEmployeeContext";
import EmployeeCard from "../Components/EmployeeCard";
import "../Styles/EmployeeDirectoryStyles.scss";
import DirectoryUtilities from "../Components/DirectoryUtilities";
import { usePersistedLoginContext } from "../Contexts/UsePersistedLoginContext";
import TopBar from "../Components/TopBar";
import { useNavigate } from "react-router-dom";
import { getAllEmployeeItems } from "../Services/Employee_Crud_services";
import EmployeeDemoBtns from "../Components/Buttons/EmployeeDemoBtns";

const EmployeeDirectory = () => {
  const { employeeList, setEmployeeList } = useEmployeeContext();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { persistedLogin } = usePersistedLoginContext();

  useEffect(() => {
    const fetchEmployeeList = async () => {
      setLoading(true);
      try {
        const data = await getAllEmployeeItems();
        setEmployeeList(data);
      } catch (error) {
        console.error("Failed to fetch Employee list", error);
      }
      setLoading(false);
    };

    if (persistedLogin && persistedLogin.username) {
      fetchEmployeeList();
    }
  }, [persistedLogin, setEmployeeList]);

  useEffect(() => {
    if (!persistedLogin || !persistedLogin.username) {
      navigate("/");
    }
  }, [persistedLogin, navigate]);

  if (!persistedLogin || !persistedLogin.username) {
    return (
      <div>
        <TopBar />
        <header className="directory__header">
          <h1 className="directory__header__title">Employee Directory</h1>
        </header>
        <div className="directory__login-required">
          Must be logged in to view employee directory!!!
        </div>
      </div>
    );
  }

  return (
    <div>
      <TopBar />
      <header className="directory__header">
        <h1 className="directory__header__title">Employee Directory</h1>
      </header>
      <DirectoryUtilities />
      <EmployeeDemoBtns />
      {loading ? (
        <div className="loading-middle">Loading...</div>
      ) : (
        <div className="directory__card-container">
          {employeeList.map((employeeCard) => (
            <EmployeeCard {...employeeCard} key={employeeCard.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EmployeeDirectory;
