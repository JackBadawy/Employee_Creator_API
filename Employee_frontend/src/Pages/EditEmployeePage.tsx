import { useState, useEffect, ChangeEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  getEmployeeById,
  updateEmployeeItem,
} from "../Services/Employee_Crud_services";
import "../Styles/MiscStyles.scss";

const EditEmployeePage = () => {
  const navigate = useNavigate();
  const { employeeId } = useParams<{ employeeId?: string }>();
  const [loading, setLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const [editEmployeeFormData, setEditEmployeeFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    employmentType: "",
    contractLength: "",
    currentEmployee: true,
    startDate: [1, 1, 1] as [number, number, number],
    endDate: [1, 1, 1] as [number, number, number],
    fullTime: true,
    salary: 0,
    weeklyHours: 0,
  });

  useEffect(() => {
    console.log("Start Date", editEmployeeFormData.startDate);
  }, [editEmployeeFormData.startDate]);

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

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: 40 },
    (_, index) => currentYear - 30 + index
  );
  const months = Array.from({ length: 12 }, (_, index) => index + 1);
  const days = Array.from({ length: 31 }, (_, index) => index + 1);

  const handleDateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setStartDate((prev) => ({
      ...prev,
      [name]: parseInt(value, 10),
    }));
  };

  const handleEndDateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEndDate((prev) => ({
      ...prev,
      [name]: parseInt(value, 10),
    }));
  };

  useEffect(() => {
    if (!employeeId) {
      console.error("Employee ID is undefined.");
      navigate("/directory");
      return;
    }

    const fetchEmployeeData = async () => {
      setLoading(true);
      try {
        const data = await getEmployeeById(employeeId);
        setEditEmployeeFormData(data);
        if (data.startDate && data.startDate.length === 3) {
          setStartDate({
            year: data.startDate[2],
            month: data.startDate[1],
            day: data.startDate[0],
          });
        }
        if (data.endDate && data.endDate.length === 3) {
          setEndDate({
            year: data.endDate[2],
            month: data.endDate[1],
            day: data.endDate[0],
          });
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployeeData();
  }, [employeeId, navigate]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type, value } = e.target;
    setEditEmployeeFormData((prevState) => ({
      ...prevState,
      [name]: type === "radio" ? value === "true" : value,
    }));
  };

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setButtonClicked(true);
    const updatedFormData = {
      ...editEmployeeFormData,
      startDate: [startDate.day, startDate.month, startDate.year] as [
        number,
        number,
        number
      ],
      endDate: [endDate.day, endDate.month, endDate.year] as [
        number,
        number,
        number
      ],
    };

    console.log("edited form", updatedFormData);

    const formValues = Object.values(updatedFormData);
    if (formValues.some((value) => value === "")) {
      alert("Please fill out all fields before submitting.");
      setButtonClicked(false);
      return;
    }

    if (!employeeId) {
      console.error("Employee ID is undefined.");
      alert("An error occurred. Please try again.");
      setButtonClicked(false);
      return;
    }

    try {
      await updateEmployeeItem(employeeId, updatedFormData);
      navigate("/directory");
    } catch (error) {
      console.error("Failed to update Employee details", error);
      alert("An error occurred. Please try again.");
    } finally {
      setButtonClicked(false);
    }
  };

  return (
    <div>
      <header className="directory__header">
        <h1 className="directory__header__title">Edit Employee</h1>
      </header>
      <Link to={"/directory"} className="form__btn">
        <p>Home</p>
      </Link>
      <form onSubmit={handleUpdate} className="employee-form">
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
                value={loading ? "Loading..." : editEmployeeFormData.firstName}
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
                value={loading ? "Loading..." : editEmployeeFormData.lastName}
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
                value={loading ? "Loading..." : editEmployeeFormData.email}
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
                value={loading ? "Loading..." : editEmployeeFormData.address}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="employee-form__status form__division">
            <h3>Employee status</h3>
            <div className="employee-form__item">
              <label htmlFor="employementType" className="form__label">
                Employment Type:{" "}
              </label>
              <select
                name="employmentType"
                id="employmentType"
                value={editEmployeeFormData.employmentType}
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
                checked={editEmployeeFormData.currentEmployee === true}
              />
              <label htmlFor="noCurrent">No</label>
              <input
                type="radio"
                id="noCurrent"
                name="currentEmployee"
                value="false"
                onChange={handleChange}
                checked={editEmployeeFormData.currentEmployee === false}
              />
            </div>
            <div className="employee-form__item">
              <label htmlFor="contractLength" className="form__label">
                Contract Length:{" "}
              </label>
              <select
                name="contractLength"
                id="contractLength"
                value={editEmployeeFormData.contractLength}
                onChange={handleChange}
              >
                <option value="1 yr">1 Year</option>
                <option value="2 yr">2 Years</option>
                <option value="5 yr">5 Years</option>
                <option value="10 yr">10 Years</option>
              </select>
            </div>
            <div className="employee-form__item" id="start-date__container">
              <label htmlFor="start-date__container" className="form__label">
                Start Date:
              </label>
              <div className="employee-form__date-box__container">
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
            </div>
            <div className="employee-form__item" id="end-date__container">
              <label htmlFor="end-date__container" className="form__label">
                End Date:
              </label>
              <div className="employee-form__date-box__container">
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
          </div>
          <button type="submit" className="form__save" disabled={buttonClicked}>
            {buttonClicked ? "Please wait..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployeePage;
