import { useState } from "react";
import { addUser } from "../Services/User_services";
import { useNavigate } from "react-router-dom";

const NewUserPage = () => {
  const [newUserFormData, setNewUserFormData] = useState({
    username: "",
    password: "",
    approvedBy: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUserFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const response = await addUser(newUserFormData);
      console.log("User added:", response);

      setNewUserFormData({ username: "", password: "" });

      alert("User successfully added!");

      returnHome();
    } catch (error) {
      setError("Failed to add user: " + error.message);
      console.error("Error adding user:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const returnHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>New User Form</h1>
      <aside>
        <p>
          Note: Once you submit your new user form, an approved user will need
          to approve your user before you can access the repository
        </p>
      </aside>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
        />
        <label htmlFor="passsword">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default NewUserPage;
