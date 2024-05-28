import { useEffect } from "react";
import { usePersistedLoginContext } from "../Contexts/UsePersistedLoginContext";
import "../Styles/TopBarStyles.scss";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const { persistedLogin, setPersistedLogin } = usePersistedLoginContext();
  const navigate = useNavigate();

  const handleApprovalClick = () => {
    navigate("/approvals");
  };

  const handleLogout = () => {
    setPersistedLogin({ username: "", password: "" });
    navigate("/");
  };

  return (
    <div className="top">
      <div className="top__btn-container">
        <p className="top__user">{persistedLogin.username}:</p>
        <button className="top__logout-btn" onClick={handleLogout}>
          Logout
        </button>
        <button className="top__approval-btn" onClick={handleApprovalClick}>
          Approval Requests
        </button>
      </div>
    </div>
  );
};

export default TopBar;
