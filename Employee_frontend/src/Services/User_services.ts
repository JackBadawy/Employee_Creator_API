/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to get users");
  }
  const data = await response.json();
  return data;
};

export interface UserData {
  username: string;
  password: string;
  approvedBy: string | null;
}

export const addUser = async (userData: UserData) => {
  const response = await fetch(`${BASE_URL}/users`, {
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
  const response = await fetch(`${BASE_URL}/users?approvedBy=null`);
  if (!response.ok) throw new Error("Failed to fetch users");
  return await response.json();
};

export const approveUser = async (userId: string, approverUsername: string) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`, {
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.error("Error approving user:", (error as Error).message);
    throw error;
  }
};

export const generate20Employees = async () => {
  const response = await fetch(`${BASE_URL}/generate`, {
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("Failed to generate employees");
  }
  return await response.json();
};

export const deleteLast20Employees = async () => {
  const response = await fetch(`${BASE_URL}/deleteLast20`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete employees");
  }
};
