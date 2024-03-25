import React, { useEffect } from "react";
import { useEmployeeContext } from "../Contexts/UseEmployeeContext";
import EmployeeCard from "../Components/EmployeeCard";
import "../Styles/EmployeeDirectoryStyles.scss";

const EmployeeDirectory = () => {
  const {
    employeeList,
    setEmployeeList,
    deleteEmployeeItem,
    updateEmployeeItem,
  } = useEmployeeContext();

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

  return (
    <div>
      <header className="directory__header">
        <h2 className="directory__header__title">Employee Directory</h2>
      </header>
      <div className="directory__card-container">
        {employeeList.map((employeeCard) => (
          <EmployeeCard {...employeeCard} key={employeeCard.id} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeDirectory;
