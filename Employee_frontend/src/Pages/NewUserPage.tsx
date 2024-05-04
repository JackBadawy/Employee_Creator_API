import { useState } from "react";
import { addUser } from "../Services/User_services";
import { useNavigate } from "react-router-dom";
import "../Styles/NewUserStyles.scss";

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
      <div className="new-user__container">
        <header className="new-user__header">
          <h1 className="new-user__header-Title">New User Form</h1>
        </header>
        <button onClick={returnHome} className="new-user__btn">
          Home
        </button>
        <aside>
          <p>
            Note: Once you submit your new user form, an approved user will need
            to approve your user before you can access the repository
          </p>
        </aside>
        <form onSubmit={handleSubmit}>
          <div className="new-user__fields-cont">
            <div className="new-user__field">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div className="new-user__field">
              <label htmlFor="passsword">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
              />
            </div>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button
            type="submit"
            disabled={isSubmitting}
            className="new-user__btn new-user__submit"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewUserPage;
