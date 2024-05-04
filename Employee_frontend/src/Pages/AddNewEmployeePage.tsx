import React, { useContext, useEffect, useState } from "react";
import "../Styles/EmployeeForm.scss";
import "../Styles/MiscStyles.scss";
import { useNavigate } from "react-router-dom";
import { useEmployeeContext } from "../Contexts/UseEmployeeContext";
import { Link } from "react-router-dom";

const AddNewEmployeePage = () => {
  const [newEmployeeFormData, setNewEmployeeFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    employmentType: "Permanent",
    contractLength: "1 yr",
    currentEmployee: true,
    startDate: [1, 1, 1],
    endDate: [1, 1, 1],
    fullTime: true,
    salary: 0,
    weeklyHours: 0,
  });

  const [startDate, setStartDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });

  const [endDate, setEndDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });

  const years = Array.from(
    { length: 30 },
    (_, index) => new Date().getFullYear() - index
  );
  const months = Array.from({ length: 12 }, (_, index) => index + 1);
  const days = Array.from({ length: 31 }, (_, index) => index + 1);

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setStartDate((prev) => ({
      ...prev,
      [name]: parseInt(value, 10),
    }));
  };

  const handleEndDateChange = (e) => {
    const { name, value } = e.target;
    setEndDate((prev) => ({
      ...prev,
      [name]: parseInt(value, 10),
    }));
  };

  const navigate = useNavigate();
  const employeeContext = useEmployeeContext();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const updatedFormData = {
      ...newEmployeeFormData,
      startDate: [startDate.year, startDate.month, startDate.day],
      endDate: [endDate.year, endDate.month, endDate.day],
    };

    const formValues = Object.values(updatedFormData);
    if (
      formValues.some(
        (value) => value === "" || (Array.isArray(value) && value.length === 0)
      )
    ) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    try {
      await employeeContext.addEmployeeItem(updatedFormData);
      navigate("/");
    } catch (error) {
      console.error("Failed to add new employee:", error);
      alert("Failed to add new employee. Please try again.");
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
        <h1 className="directory__header__title">Add New Employee</h1>
      </header>
      <Link to={"/directory"} className="directory__utilities__btn form__btn">
        <p>Home</p>
      </Link>
      <form onSubmit={handleSubmit} className="employee-form">
        <div className="form__container">
          <div className="employee-form__personal form__division">
            <h3>Personal information</h3>
            <div className="employee-form__item">
              <label htmlFor="firstName" className="form__label">
                First Name:{" "}
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                onChange={handleChange}
              />
            </div>
            <div className="employee-form__item">
              <label htmlFor="lastName" className="form__label">
                Last Name:{" "}
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="employee-form__contact form__division">
            <h3>Contact details</h3>
            <div className="employee-form__item">
              <label htmlFor="email" className="form__label">
                Email:{" "}
              </label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="employee-form__item">
              <label htmlFor="address" className="form__label">
                Address:{" "}
              </label>
              <input
                type="text"
                name="address"
                id="address"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="employee-form__status form__division">
            <h3>Employee status</h3>
            <div className="employee-form__item">
              <label htmlFor="contractLength" className="form__label">
                Contract Length:{" "}
              </label>
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

              <div className="employee-form__item">
                <label htmlFor="startYear" className="form__label">
                  Start Year:
                </label>
                <select
                  name="year"
                  id="startYear"
                  value={startDate.year}
                  onChange={handleDateChange}
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div className="employee-form__item">
                <label htmlFor="startMonth" className="form__label">
                  Start Month:
                </label>
                <select
                  name="month"
                  id="startMonth"
                  value={startDate.month}
                  onChange={handleDateChange}
                >
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div className="employee-form__item">
                <label htmlFor="startDay" className="form__label">
                  Start Day:
                </label>
                <select
                  name="day"
                  id="startDay"
                  value={startDate.day}
                  onChange={handleDateChange}
                >
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
              <div className="employee-form__item">
                <label htmlFor="endYear" className="form__label">
                  End Year:
                </label>
                <select
                  name="year"
                  id="endYear"
                  value={endDate.year}
                  onChange={handleEndDateChange}
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div className="employee-form__item">
                <label htmlFor="endMonth" className="form__label">
                  End Month:
                </label>
                <select
                  name="month"
                  id="endMonth"
                  value={endDate.month}
                  onChange={handleEndDateChange}
                >
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
              <div className="employee-form__item">
                <label htmlFor="endDay" className="form__label">
                  End Day:
                </label>
                <select
                  name="day"
                  id="endDay"
                  value={endDate.day}
                  onChange={handleEndDateChange}
                >
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="employee-form__item">
              <label htmlFor="employementType" className="form__label">
                Employment Type:{" "}
              </label>
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
          </div>
          <button type="submit" className="form__save">
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewEmployeePage;
