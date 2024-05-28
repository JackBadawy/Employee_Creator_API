const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllEmployeeItems = async () => {
  const response = await fetch(`${BASE_URL}/items`);
  if (!response.ok) {
    throw new Error("Failed to get Employees");
  }
  const data = await response.json();
  return data;
};

export const getEmployeeById = async (employeeId: string) => {
  const response = await fetch(`${BASE_URL}/items/${employeeId}`);
  if (!response.ok) {
    throw new Error("Failed to get Employee");
  }
  const data = await response.json();
  return data;
};

export const postEmployeeItem = async (employeeData: any) => {
  try {
    const response = await fetch(`${BASE_URL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeData),
    });

    if (!response.ok) {
      throw new Error("Failed to create Employee");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating Employee:", error.message);
    throw error;
  }
};

export const deleteEmployeeItem = async (employeeId: any) => {
  try {
    const response = await fetch(`${BASE_URL}/items/${employeeId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete Employee");
    }
  } catch (error) {
    console.error("Error deleting Employee:", error.message);
    throw error;
  }
};

export const updateEmployeeItem = async (
  employeeId: any,
  employeeData: any
) => {
  try {
    const response = await fetch(`${BASE_URL}/items/${employeeId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeData),
    });

    if (!response.ok) {
      throw new Error("Failed to update Employee");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating Employee:", error.message);
    throw error;
  }
};
