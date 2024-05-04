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
