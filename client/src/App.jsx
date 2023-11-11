import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Public from "./pages/public/Public";

import { ThemeProvider, createTheme } from "@mui/material";
import Home from "./pages/Home/Home";
import Matches from "./pages/Matches/Matches";
import Message_Blocked from "./pages/Message/Message_Blocked";
import Partners from "./pages/Partners/Partners";
import Profile from "./pages/User/Profile/Profile";
import Description from "./pages/User/Description/Description";
import PastContract from "./pages/User/PastContract/PastContract.jsx";
import PartnerReview from "./pages/User/PartnerReview/PartnerReview.jsx";
import Payment from "./pages/User/Payment/Payment.jsx";
import ChangePassword from "./pages/User/ChangePassword/ChangePassword";
import Message from "./pages/Message/Message.jsx";

import { useContext, useEffect } from "react";

import { useAuth } from "./hooks/auth-hook";
import { AuthContext } from "./context/auth-context";
import ContractPage from "./components/Contract/ContractPage.jsx";
import Partner_Blocked from "./pages/Partners/Partner_Blocked.jsx";

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
          outlined: {
            borderRadius: "10px",
            borderColor: "black",
            color: "black",
            "&:hover": {
              backgroundColor: "#EA4335",
              color: "white",
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
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            borderRadius: "20px",
            backgroundColor: "#E8E9F4",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#EA4335",
              borderRadius: "20px",
            },
            height: "12px",
          },
        },
      },
    },
  });

  const { username, fname, lname, partner, login, logout, settingPartner } =
    useAuth();

  const auth = useContext(AuthContext);

  let protectedRoutes;
  if (username) {
    protectedRoutes = (
      <>
        <Route path={"/home"} element={<Home />}></Route>
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/description"} element={<Description />} />
        <Route path={"/past-contracts"} element={<PastContract />}>
          <Route path={"/past-contracts/:id"} element={<ContractPage />} />
        </Route>
        <Route path={"/change-password"} element={<ChangePassword />} />
        <Route path={"/partner-reviews"} element={<PartnerReview />} />
        <Route path={"/payment"} element={<Payment />} />
        <Route path={"/message"} element={<Message />} />
        <Route path={"/message-blocked"} element={<Message_Blocked />} />
        <Route path={"/partners"} element={<Partners />} />
        <Route path={"/partners-blocked"} element={<Partner_Blocked />} />
        <Route path={"/matches"} element={<Matches />} />
      </>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider
        value={{
          username: username,
          login: login,
          logout: logout,
          fname: fname,
          lname: lname,
          partner: partner,
          settingPartner: settingPartner,
        }}
      >
        <Router basename="/CSE442-542/2023-Fall/cse-442x/dist">
          <Routes>
            <Route path={"/"} element={<Public />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/sign-up"} element={<SignUp />} />
            {/* protected routes below */}
            {protectedRoutes}
          </Routes>
        </Router>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
