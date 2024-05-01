import React, { useEffect } from "react";
import { useEmployeeContext } from "../Contexts/UseEmployeeContext";
import EmployeeCard from "../Components/EmployeeCard";
import "../Styles/EmployeeDirectoryStyles.scss";
import DirectoryUtilities from "../Components/DirectoryUtilities";
import { usePersistedLoginContext } from "../Contexts/UsePersistedLoginContext";
import TopBar from "../Components/TopBar";

const EmployeeDirectory = () => {
  const {
    employeeList,
    setEmployeeList,
    deleteEmployeeItem,
    updateEmployeeItem,
  } = useEmployeeContext();

  const { persistedLogin, setPersistedLogin } = usePersistedLoginContext();

  useEffect(() => {
    const fetchEmployeeList = async () => {
      try {
        const response = await fetch("http://localhost:8080/items");
        if (!response.ok) {
          throw new Error("Failed to fetch Employee List");
        }
        const data = await response.json();
        //console.log("employeeListData", data);
        setEmployeeList(data);
      } catch (error) {
        console.error("Failed to fetch Employee list");
      }
    };

    fetchEmployeeList();
  }, []);

  useEffect(() => {
    console.log("employeeList", employeeList);
  }, [employeeList]);

  useEffect(() => {
    console.log("persisted login", persistedLogin);
  }, []);

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
