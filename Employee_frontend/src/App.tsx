import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EmployeeDirectory from "./Pages/EmployeeDirectory";
import { EmployeeProvider } from "./Contexts/EmployeeContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <EmployeeProvider>
        <EmployeeDirectory />
      </EmployeeProvider>
    </>
  );
}

export default App;
