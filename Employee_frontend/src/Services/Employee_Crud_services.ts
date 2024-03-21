export const getAllEmployeeItems = async () => {
  const response = await fetch("http://localhost:8080/items");
  if (!response.ok) {
    throw new Error("Failed to get Employees");
  }
  const data = await response.json();
  return data;
};

export const postEmployeeItem = async (employeeData: any) => {
  try {
    const response = await fetch("http://localhost:8080/items", {
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
    const response = await fetch(`http://localhost:8080/items/${employeeId}`, {
      method: "Delete",
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
    const response = await fetch(`http://localhost:8080/items/${employeeId}`, {
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
