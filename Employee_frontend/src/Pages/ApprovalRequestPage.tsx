import { useEffect, useState } from "react";
import {
  approveUser,
  fetchPendingApprovalUsers,
} from "../Services/User_services";
import { usePersistedLoginContext } from "../Contexts/UsePersistedLoginContext";
import "../Styles/ApprovalPageStyles.scss";
import "../Styles/MiscStyles.scss";
import { useNavigate } from "react-router-dom";

const ApprovalRequestPage = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [approvingUserId, setApprovingUserId] = useState<number | null>(null);

  const { persistedLogin } = usePersistedLoginContext();

  const navigate = useNavigate();

  interface User {
    id: number;
    username: string;
    approvedBy: string | null;
  }

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      try {
        const fetchedUsers = await fetchPendingApprovalUsers();
        setUserList(fetchedUsers);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
      setLoading(false);
    };

    loadUsers();
  }, []);

  const handleApprove = async (userId: number) => {
    setApprovingUserId(userId);
    try {
      await approveUser(userId.toString(), persistedLogin.username);
      setUserList((currentUsers) =>
        currentUsers.map((user) =>
          user.id === userId
            ? { ...user, approvedBy: persistedLogin.username }
            : user
        )
      );
    } catch (error) {
      console.error("Failed to approve user", error);
    }
    setApprovingUserId(null);
  };

  const returnToDirectory = () => {
    navigate("/directory");
  };

  return (
    <div>
      <header className="approvals__header">
        <h1 className="approvals__header__title">Approval Requests</h1>
      </header>
      <button onClick={returnToDirectory} className="approvals__btn">
        Home
      </button>
      {loading ? (
        <div className="loading-left">Loading...</div>
      ) : userList.filter((user) => !user.approvedBy).length > 0 ? (
        <ul className="approvals__list">
          {userList
            .filter((user) => !user.approvedBy)
            .map((user) => (
              <li key={user.id} className="approvals__list-item">
                {user.username}
                <button
                  className="approvals__btn"
                  onClick={() => handleApprove(user.id)}
                  disabled={approvingUserId === user.id}
                >
                  {approvingUserId === user.id ? "Please wait..." : "Approve"}
                </button>
              </li>
            ))}
        </ul>
      ) : (
        <p className="approvals__para">No pending approvals.</p>
      )}
    </div>
  );
};

export default ApprovalRequestPage;
