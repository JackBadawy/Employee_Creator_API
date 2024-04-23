import { useState } from "react";
import "./App.css";
import EmployeeDirectory from "./Pages/EmployeeDirectory";
import { EmployeeProvider } from "./Contexts/EmployeeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNewEmployeePage from "./Pages/AddNewEmployeePage";
import EditEmployeePage from "./Pages/EditEmployeePage";
import LoginPage from "./Pages/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <EmployeeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/directory" element={<EmployeeDirectory />} />
            <Route path="/new" element={<AddNewEmployeePage />} />
            <Route path="/edit/:employeeId" element={<EditEmployeePage />} />
          </Routes>
        </BrowserRouter>
      </EmployeeProvider>
    </>
  );
}

export default App;
