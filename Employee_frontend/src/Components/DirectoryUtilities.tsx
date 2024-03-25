import React from "react";
import "../Styles/EmployeeDirectoryStyles.scss";

const DirectoryUtilities = () => {
  return (
    <div className="directory__utilities__container">
      <p className="directory__utilities__para">
        Please click on 'Edit' to find more details of each employee.
      </p>
      <button className="directory__utilities__add-emp-btn">
        Add employee
      </button>
    </div>
  );
};

export default DirectoryUtilities;
