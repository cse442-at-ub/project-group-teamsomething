import { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { Link } from "react-router-dom";

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
  return (
    <Stack p={5} maxWidth={800} spacing={2}>
      <Stack direction="row" component={Link} to="/profile">
        <WestOutlinedIcon sx={{ fontSize: 30 }} />
      </Stack>
      <Typography variant="h4" fontWeight="bold">
        Security
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <Stack spacing={1}>
            <Typography component={"label"} htmlFor="password" fontWeight="600">
              Current Password
            </Typography>
            <TextField
              variant="outlined"
              type="password"
              fullWidth
              id="password"
              size="small"
              required
              value={password}
              onChange={(e) => handlePasswordChange(e, "password")}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography
              component={"label"}
              htmlFor="new-password"
              fontWeight="600"
            >
              New Password
            </Typography>
            <TextField
              variant="outlined"
              type="password"
              id="new-password"
              fullWidth
              size="small"
              required
              value={newPassword}
              onChange={(e) => handlePasswordChange(e, "newPassword")}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography
              component={"label"}
              htmlFor="confirm-new-password"
              fontWeight="600"
            >
              Confirm New Password
            </Typography>
            <TextField
              variant="outlined"
              type="password"
              id="confirm-new-password"
              fullWidth
              size="small"
              required
              value={confirmNewPassword}
              onChange={(e) => handlePasswordChange(e, "confirmNewPassword")}
            />
          </Stack>
          <Button
            variant="contained"
            type="submit"
            sx={{ alignSelf: "flex-end" }}
          >
            Submit
          </Button>
          {error && (
            <Typography color="error" sx={{ alignSelf: "flex-end" }}>
              {error}
            </Typography>
          )}
        </Stack>
      </form>
    </Stack>
  );
}
