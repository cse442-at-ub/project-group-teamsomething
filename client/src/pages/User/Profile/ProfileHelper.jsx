import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ProfileHelper() {
  const navigate = useNavigate();
  const [profilepic, setProfilepic] = useState(null);
  const [email, setEmail] = useState("");
  const [changeEmail, setChangeEmail] = useState("");
  const [name, setName] = useState("");

  const handleProfilepic = (e) => {
    setProfilepic(e.target.files[0]);
  };

  const handleEditEmail = (e) => {
    e.preventDefault();
    console.log(changeEmail);
  };

  const handleEditName = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <Box p={5} maxWidth={800}>
      <Stack spacing={3}>
        <Typography variant="h4" fontWeight="bold">
          Account Info
        </Typography>
        <Stack spacing={2} width={250}>
          <Box
            height={50}
            width={50}
            className="overflow-hidden rounded-[30px] relative border-2"
          >
            <img
              src={profilepic ? URL.createObjectURL(profilepic) : null}
              className="w-full h-full object-cover object-top"
            />
          </Box>
          <Button variant="contained" fullWidth>
            Edit Profile Picture
            <input
              type="file"
              className="opacity-0 absolute inset-0"
              onChange={handleProfilepic}
            />
          </Button>
        </Stack>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <Stack flex={3}>
              <Typography
                variant="h6"
                fontWeight="600"
                component="label"
                htmlFor="email"
              >
                Email
              </Typography>
              <TextField
                variant="outlined"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="small"
                type="email"
              />
            </Stack>
            <Box flex={1} />
          </Stack>
          <Stack
            direction="row"
            alignItems="flex-end"
            spacing={2}
            component="form"
            onSubmit={handleEditEmail}
          >
            <Stack flex={3}>
              <Typography
                variant="h6"
                fontWeight="600"
                component="label"
                htmlFor="change-email"
              >
                Change Email
              </Typography>
              <TextField
                variant="outlined"
                id="change-email"
                value={changeEmail}
                onChange={(e) => setChangeEmail(e.target.value)}
                size="small"
                type="email"
                required
              />
            </Stack>
            <Box flex={1}>
              <Button variant="contained" fullWidth type="submit">
                Submit
              </Button>
            </Box>
          </Stack>
          <Stack
            direction="row"
            alignItems="flex-end"
            spacing={2}
            component="form"
            onSubmit={handleEditName}
          >
            <Stack flex={3}>
              <Typography
                variant="h6"
                fontWeight="600"
                component="label"
                htmlFor="name"
              >
                Name
              </Typography>
              <TextField
                variant="outlined"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                size="small"
                type="text"
                required
              />
            </Stack>
            <Box flex={1}>
              <Button variant="contained" fullWidth type="submit">
                Edit Name
              </Button>
            </Box>
          </Stack>
          <Stack alignItems="flex-start" width={200} spacing={2}>
            <Button
              variant="contained"
              fullWidth
              LinkComponent={Link}
              to="/change-password"
            >
              Change Password
            </Button>
            <Button
              onClick={() => {
                navigate("/");
              }}
              variant="contained"
              fullWidth
            >
              Log Out
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
