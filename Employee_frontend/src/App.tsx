import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EmployeeDirectory from "./Pages/EmployeeDirectory";
import { EmployeeProvider } from "./Contexts/EmployeeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNewEmployeePage from "./Pages/AddNewEmployeePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <EmployeeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<EmployeeDirectory />} />
            <Route path="/new" element={<AddNewEmployeePage />} />
          </Routes>
        </BrowserRouter>
      </EmployeeProvider>
    </>
  );
}

export default App;
