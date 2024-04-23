export const getAllUsers = async () => {
  const response = await fetch("http://localhost:8080/users");
  if (!response.ok) {
    throw new Error("Failed to get users");
  }
  const data = await response.json();
  return data;
};
