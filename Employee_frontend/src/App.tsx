import { useState } from "react";
import "./App.css";
import EmployeeDirectory from "./Pages/EmployeeDirectory";
import { EmployeeProvider } from "./Contexts/EmployeeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNewEmployeePage from "./Pages/AddNewEmployeePage";
import EditEmployeePage from "./Pages/EditEmployeePage";
import LoginPage from "./Pages/LoginPage";
import { PersistedLoginProvider } from "./Contexts/PersistedLoginContext";
import NewUserPage from "./Pages/NewUserPage";
import ApprovalRequests from "./Pages/ApprovalRequests";
import ApprovalRequestPage from "./Pages/ApprovalRequestPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PersistedLoginProvider>
        <EmployeeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/directory" element={<EmployeeDirectory />} />
              <Route path="/new" element={<AddNewEmployeePage />} />
              <Route path="/edit/:employeeId" element={<EditEmployeePage />} />
              <Route path="/new-user" element={<NewUserPage />} />
              <Route path="/approvals" element={<ApprovalRequestPage />} />
            </Routes>
          </BrowserRouter>
        </EmployeeProvider>
      </PersistedLoginProvider>
    </>
  );
}

export default App;
