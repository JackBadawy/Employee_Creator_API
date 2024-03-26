import React, { useState } from "react";

const AddNewEmployeePage = () => {
  const [newEmployeeFormData, newEmployeeFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    employmentType: "",
    contractLength: "",
    currentEmployee: true,
  });

  return (
    <div>
      <form action="">
        <label htmlFor="firstName"></label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default AddNewEmployeePage;
