import { useContext, useState, useEffect } from "react";
import { getAllUsers } from "../Services/User_services";
import { useNavigate } from "react-router-dom";
import "../Styles/LoginPageStyles.scss";
import {
  usePersistedLogin,
  usePersistedLoginContext,
} from "../Contexts/UsePersistedLoginContext";

const LoginPage = () => {
  const [userList, setUserList] = useState([]);

  const [loginAttempt, setLoginAttempt] = useState({
    username: "",
    password: "",
  });

  const { persistedLogin, setPersistedLogin } = usePersistedLoginContext();

  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers()
      .then((users) => {
        setUserList(users);
      })
      .catch((error) => {
        console.error("Failed to load users:", error);
        setUserList([]);
      });
  }, []);

  useEffect(() => {
    console.log("userList", userList);
  }, [userList]);

  useEffect(() => {
    console.log("loginAttempt", loginAttempt);
  }, [loginAttempt]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginAttempt((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const goToNewUser = () => {
    navigate("/new-user");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const user = userList.find(
      (u) =>
        u.username === loginAttempt.username &&
        u.password === loginAttempt.password
    );
    if (user) {
      setPersistedLogin({
        username: loginAttempt.username,
        password: loginAttempt.password,
      });
      navigate("/directory");
    } else {
      console.log("invalid credentials");
    }
  };

  return (
    <div className="login__outer-container">
      <div className="login__head-note">
        <p className="login__head-note__para">
          Please enter username & password
        </p>
      </div>
      <div className="login__login-box">
        <form onSubmit={handleSubmit} className="login__form">
          <div className="login__username-container">
            <label htmlFor="username" className="login__form__username">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div className="login__password-container">
            <label htmlFor="password" className="login__form__password">
              Password
            </label>
            <input
              type="text"
              name="password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <div className="login_btn-container">
            <button onClick={goToNewUser}>Create User</button>
            <button type="submit" className="login__submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
