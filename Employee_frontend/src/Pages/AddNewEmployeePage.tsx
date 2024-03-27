import React, { useContext, useEffect, useState } from "react";
import "../Styles/EmployeeForm.scss";
import { useNavigate } from "react-router-dom";
import { useEmployeeContext } from "../Contexts/UseEmployeeContext";

const AddNewEmployeePage = () => {
  const [newEmployeeFormData, setNewEmployeeFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    employmentType: "permanent",
    contractLength: "1 yr",
    currentEmployee: true,
  });

  const navigate = useNavigate();
  const employeeContext = useEmployeeContext();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (employeeContext) {
      await employeeContext.addEmployeeItem(newEmployeeFormData);
      navigate("/");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type, value } = e.target;
    if (type === "radio") {
      setNewEmployeeFormData({
        ...newEmployeeFormData,
        [name]: value === "true",
      });
    } else {
      setNewEmployeeFormData({
        ...newEmployeeFormData,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    console.log(newEmployeeFormData);
  }, [newEmployeeFormData]);

  return (
    <div>
      <header className="directory__header">
        <h2 className="directory__header__title">Add New Employee</h2>
      </header>
      <form onSubmit={handleSubmit} className="employee-form">
        <div className="employee-form__item">
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="employee-form__item">
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="employee-form__item">
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" id="email" onChange={handleChange} />
        </div>
        <div className="employee-form__item">
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            name="address"
            id="address"
            onChange={handleChange}
          />
        </div>
        <div className="employee-form__item">
          <label htmlFor="contractLength">Contract Length: </label>
          <select
            name="contractLength"
            id="contractLength"
            onChange={handleChange}
          >
            <option value="1 yr">1 Year</option>
            <option value="2 yr">2 Years</option>
            <option value="5 yr">5 Years</option>
            <option value="10 yr">10 Years</option>
          </select>
        </div>
        <div className="employee-form__item">
          <label htmlFor="employementType">Employment Type: </label>
          <select
            name="employmentType"
            id="employmentType"
            onChange={handleChange}
          >
            <option value="permanent">Permanent</option>
            <option value="contract">Contract</option>
          </select>
        </div>
        <div className="employee-form__item employee-form__current-employee">
          <p>Current employee:</p>
          <label htmlFor="yesCurrent">Yes</label>
          <input
            type="radio"
            id="yesCurrent"
            name="currentEmployee"
            value="true"
            onChange={handleChange}
            checked={newEmployeeFormData.currentEmployee === true}
          />
          <label htmlFor="noCurrent">No</label>
          <input
            type="radio"
            id="noCurrent"
            name="currentEmployee"
            value="false"
            onChange={handleChange}
            checked={newEmployeeFormData.currentEmployee === false}
          />
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddNewEmployeePage;
