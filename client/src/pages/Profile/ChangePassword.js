import { useState } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (password === newPassword) {
      setError("New password cannot be the same as old password");
    } else if (newPassword !== confirmNewPassword) {
      setError("New password and confirm new password must match");
    } else {
      setError("");
      setPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
      alert("Password changed successfully");
    }
  };

  const handlePasswordChange = (e, name) => {
    const value = e.target.value;
    if (name === "password") {
      setPassword(value);
    } else if (name === "newPassword") {
      setNewPassword(value);
    } else {
      setConfirmNewPassword(value);
    }
  };

  const navigate = useNavigate();
  return (
    <div className="main">
      
      <div className="form-container">
        <div className="security" style={{ marginBottom: 20 }}>
          {" "}
          Security
        </div>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            width: "inherit",
            justifySelf: "stretch",
            flexDirection: "column",
            alignItems: "flex-start",
            height: "100%",
          }}
        >
          <label className="label">
            <div className="password">Current Password</div>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => handlePasswordChange(e, "password")}
              placeholder="current password"
            />
          </label>
          <label className="label">
            <div className="password">New Password</div>
            <input
              required
              type="password"
              value={newPassword}
              onChange={(e) => handlePasswordChange(e, "newPassword")}
              placeholder="New password"
            />
          </label>
          <label className="label">
            <div className="password">Confirm New Password</div>
            <input
              required
              type="password"
              onChange={(e) => handlePasswordChange(e, "confirmNewPassword")}
              value={confirmNewPassword}
              placeholder="Confirm New Password"
            />
          </label>
          <br />
          <button
            style={{
              alignSelf: "flex-end",
            }}
            className="savechanges"
          >
            Save changes
          </button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
}
