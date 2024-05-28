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
      <div className="login__container">
        <div className="login__head-note">
          <p className="login__head-note__para">
            Please enter username & password
          </p>
        </div>
        <div className="login__login-box">
          <form onSubmit={handleSubmit} className="login__form">
            <div className="login__input-container">
              <label htmlFor="username" className="login__form__label">
                Username:
              </label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={handleChange}
                className="login__form__input"
              />
            </div>
            <div className="login__input-container">
              <label htmlFor="password" className="login__form__label">
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                className="login__form__input"
              />
            </div>
            <div className="login__btn-cont">
              <button type="submit" className="login__submit">
                Login
              </button>
              <button onClick={goToNewUser} className="login__create-user">
                Create User
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="login__demo-note">
        <p className="login__note-title">Demo-note</p>
        <p className="login__note-txt">
          If you don't have access to an approved account please use the below
          login details, this account can be used to approve any users you
          create
        </p>
        <p className="login__note-details">Username: Root</p>
        <p className="login__note-details">Password: 8uwodrEhl</p>
      </div>
    </div>
  );
};

export default LoginPage;
