import { useEffect } from "react";
import { usePersistedLoginContext } from "../Contexts/UsePersistedLoginContext";
import "../Styles/TopBarStyles.scss";

const TopBar = () => {
  const { persistedLogin } = usePersistedLoginContext();

  useEffect(() => {
    console.log("top comp", persistedLogin);
  }, [persistedLogin]);

  return (
    <div className="top">
      <div className="top__btn-container">
        <p className="top__user">{persistedLogin.username}:</p>
        <button className="top__approval-btn">Approval Requests</button>
      </div>
    </div>
  );
};

export default TopBar;
