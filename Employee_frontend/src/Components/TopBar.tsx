import { useEffect } from "react";
import { usePersistedLoginContext } from "../Contexts/UsePersistedLoginContext";
import "../Styles/TopBarStyles.scss";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const { persistedLogin } = usePersistedLoginContext();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/approvals");
  };

  return (
    <div className="top">
      <div className="top__btn-container">
        <p className="top__user">{persistedLogin.username}:</p>
        <button className="top__approval-btn" onClick={handleClick}>
          Approval Requests
        </button>
      </div>
    </div>
  );
};

export default TopBar;
