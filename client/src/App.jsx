import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Public from "./pages/public/Public";

import { ThemeProvider, createTheme } from "@mui/material";
import Home from "./pages/Home/Home";
import Matches from "./pages/Matches/Matches";
import Message_Blocked from "./pages/Message/Message_Blocked";
import Partners from "./pages/Partners/Partners";
import ChangePassword from "./pages/User/Pages/ChangePassword";
import Description from "./pages/User/Pages/Description";
import Profile from "./pages/User/Pages/Profile/index";
import User from "./pages/User/User";

function App() {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            borderRadius: "10px",
            backgroundColor: "#EA4335",
            color: "white",
            "&:hover": {
              backgroundColor: "#f5eeed",
              color: "#EA4335",
            },
            boxShadow: "none",
            cursor: "pointer",
            textTransform: "none",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
              backgroundColor: "#E8E9F4",
              "& fieldset": {
                borderColor: "#E8E9F4",
              },
              "&:hover": {
                borderColor: "#E8E9F4",
              },
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router basename="/CSE442-542/2023-Fall/cse-442x/dist">
        <Routes>
          <Route path={"/"} element={<Public />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/sign-up"} element={<SignUp />} />
          <Route path={"/home"} element={<Home />}>
            <Route path="user" element={<User />}>
              <Route path="profile" element={<Profile />} />
              <Route path="description" element={<Description />} />
              <Route path="change-password" element={<ChangePassword />} />
              <Route
                path="past-contracts"
                element={<div>past-contracts</div>}
              />
              <Route
                path="partner-reviews"
                element={<div>partner-reviews</div>}
              />
              <Route path="payment" element={<div>payment</div>} />
            </Route>
          </Route>
          <Route path={"/message"} element={<Message_Blocked />} />
          <Route path={"/partners"} element={<Partners />} />
          <Route path={"/matches"} element={<Matches />} />
          <Route path={"/profile"} element={<Profile />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;