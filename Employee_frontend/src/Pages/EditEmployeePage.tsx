import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEmployeeContext } from "../Contexts/UseEmployeeContext";
import { Link } from "react-router-dom";
import "../Styles/MiscStyles.scss";

const EditEmployeePage = () => {
  const navigate = useNavigate();
  const { employeeId } = useParams<{ employeeId: string }>();
  const [employeeData, setEmployeeData] = useState(null);
  const {
    employeeList,
    setEmployeeList,
    deleteEmployeeItem,
    updateEmployeeItem,
  } = useEmployeeContext();

  const [editEmployeeFormData, setEditEmployeeFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    employmentType: "",
    contractLength: "",
    currentEmployee: true,
  });

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/items/${employeeId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch employee data");
        }
        const data = await response.json();
        setEditEmployeeFormData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployeeData();
  }, [employeeId]);

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
    const formValues = Object.values(editEmployeeFormData);
    if (
      formValues.some(
        (value) => value === "" || (Array.isArray(value) && value.length === 0)
      )
    ) {
      alert("Please fill out all fields before submitting.");
      return;
    }
    if (!employeeId) {
      console.error("Employee ID is undefined.");
      alert("An error occurred. Please try again.");
      return;
    }

    try {
      await updateEmployeeItem(employeeId!, editEmployeeFormData);
      navigate("/");
    } catch (error) {
      console.error("Failed to update Employee details", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <header className="directory__header">
        <h1 className="directory__header__title">Edit Employee</h1>
      </header>
      <Link to={"/"} className="directory__utilities__btn form__btn">
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
                value={editEmployeeFormData.firstName}
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
                value={editEmployeeFormData.lastName}
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
                value={editEmployeeFormData.email}
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
                value={editEmployeeFormData.address}
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
                value={editEmployeeFormData.contractLength}
                onChange={handleChange}
              >
                <option value="1 yr">1 Year</option>
                <option value="2 yr">2 Years</option>
                <option value="5 yr">5 Years</option>
                <option value="10 yr">10 Years</option>
              </select>
            </div>
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
          </div>
          <button type="submit" className="form__save">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployeePage;
