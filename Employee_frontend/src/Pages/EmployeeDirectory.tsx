import { useEffect } from "react";
import { useEmployeeContext } from "../Contexts/UseEmployeeContext";
import EmployeeCard from "../Components/EmployeeCard";
import "../Styles/EmployeeDirectoryStyles.scss";
import DirectoryUtilities from "../Components/DirectoryUtilities";
import { usePersistedLoginContext } from "../Contexts/UsePersistedLoginContext";
import TopBar from "../Components/TopBar";
import { useNavigate } from "react-router-dom";

const EmployeeDirectory = () => {
  const {
    employeeList,
    setEmployeeList,
    deleteEmployeeItem,
    updateEmployeeItem,
  } = useEmployeeContext();

  const navigate = useNavigate();

  const { persistedLogin } = usePersistedLoginContext();

  useEffect(() => {
    const fetchEmployeeList = async () => {
      try {
        const response = await fetch("http://localhost:8080/items");
        if (!response.ok) {
          throw new Error("Failed to fetch Employee List");
        }
        const data = await response.json();
        setEmployeeList(data);
      } catch (error) {
        console.error("Failed to fetch Employee list", error);
      }
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

  useEffect(() => {
    console.log("employeeList", employeeList);
  }, [employeeList]);

  useEffect(() => {
    console.log("persisted login", persistedLogin);
  }, [persistedLogin]);

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
      <div className="directory__card-container">
        {employeeList.map((employeeCard) => (
          <EmployeeCard {...employeeCard} key={employeeCard.id} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeDirectory;
