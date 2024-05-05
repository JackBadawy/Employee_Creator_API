export const getAllUsers = async () => {
  const response = await fetch("http://localhost:8080/users");
  if (!response.ok) {
    throw new Error("Failed to get users");
  }
  const data = await response.json();
  return data;
};

export const addUser = async (userData) => {
  const response = await fetch("http://localhost:8080/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Failed to add new user");
  }

  const data = await response.json();
  return data;
};

export const fetchPendingApprovalUsers = async () => {
  const response = await fetch("http://localhost:8080/users?approvedBy=null");
  if (!response.ok) throw new Error("Failed to fetch users");
  return await response.json();
};

export const approveUser = async (userId: any, approverUsername: any) => {
  try {
    const response = await fetch(`http://localhost:8080/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ approvedBy: approverUsername }),
    });

    if (!response.ok) {
      throw new Error("Failed to approve user");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error approving user:", error.message);
    throw error;
  }
};
