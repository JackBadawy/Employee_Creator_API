import { createContext, useState, ReactNode, FC } from "react";
import {
  postEmployeeItem,
  deleteEmployeeItem,
  updateEmployeeItem,
} from "../Services/Employee_Crud_services";
import { useEmployeeContext } from "./UseEmployeeContext";

export interface EmployeeItem {
  employmentType: string;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  contractLength: string;
  currentEmployee: boolean;
  startDate: number[];
  endDate: number[];
  fullTime: boolean;
  salary: number;
  weeklyHours: number;
}

interface EmployeeContextType {
  employeeList: EmployeeItem[];
  setEmployeeList: React.Dispatch<React.SetStateAction<EmployeeItem[]>>;
  addEmployeeItem: (newItem: Omit<EmployeeItem, "id">) => Promise<void>;
  deleteEmployeeItem: (itemId: string) => Promise<void>;
  updateEmployeeItem: (
    itemId: string,
    employeeData: Partial<EmployeeItem>
  ) => Promise<void>;
}

export const EmployeeContext = createContext<EmployeeContextType | undefined>(
  undefined
);

interface EmployeeProviderProps {
  children: ReactNode;
}

export const EmployeeProvider: FC<EmployeeProviderProps> = ({ children }) => {
  const [employeeList, setEmployeeList] = useState<EmployeeItem[]>([]);
  const addEmployeeItem = async (newItem: any) => {
    try {
      const addedItem = await postEmployeeItem(newItem);
      setEmployeeList((currentList) => [...currentList, addedItem]);
    } catch (error) {
      console.error("Error adding Employee item", error);
    }
  };
  const deleteEmployeeItemContext = async (itemId) => {
    try {
      await deleteEmployeeItem(itemId);
      setEmployeeList((currentList) =>
        currentList.filter((item) => item.id !== itemId)
      );
    } catch (error) {
      console.error("Error deleting item from context:", error);
    }
  };

  const updateEmployeeItemContext = async (
    itemId: string,
    employeeData: Partial<EmployeeItem>
  ): Promise<void> => {
    try {
      const updatedItem = await updateEmployeeItem(itemId, employeeData);
      setEmployeeList((currentList) =>
        currentList.map((item) =>
          item.id === itemId ? { ...item, ...updatedItem } : item
        )
      );
    } catch (error) {
      console.error("Error updating employee item in context:", error);
    }
  };

  return (
    <EmployeeContext.Provider
      value={{
        employeeList,
        setEmployeeList,
        addEmployeeItem,
        deleteEmployeeItem: deleteEmployeeItemContext,
        updateEmployeeItem: updateEmployeeItemContext,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
