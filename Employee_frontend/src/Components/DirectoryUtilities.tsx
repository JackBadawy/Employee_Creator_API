import React from "react";
import "../Styles/EmployeeDirectoryStyles.scss";
import { Link } from "react-router-dom";

const DirectoryUtilities = () => {
  return (
    <div className="directory__utilities__container">
      <p className="directory__utilities__para">
        Please click on 'Edit' to find more details of each employee.
      </p>
      <Link to={"/new"} className="directory__utilities__add-emp-btn">
        Add employee
      </Link>
    </div>
  );
};

export default DirectoryUtilities;
