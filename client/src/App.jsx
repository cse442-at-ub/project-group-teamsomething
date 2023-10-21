import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import Public from "./pages/public/Public";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

import Home from "./pages/Home/Home";
import Partners from "./pages/Partners/Partners"
import Matches from "./pages/Matches/Matches";
import Message from "./pages/Message/Message";
import Profile from "./pages/User/Pages/Profile/index";
import User from "./pages/User/User";
import { ThemeProvider, createTheme } from "@mui/material";
import Description from "./pages/User/Pages/Description";
import ChangePassword from "./pages/User/Pages/ChangePassword";

var cheshire = "/CSE442-542/2023-Fall/cse-442x/build";
// var cheshire = ''

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
              color: "#EA4335"
            },
            boxShadow: "none",
            cursor: "pointer",
            textTransform: "none",
          },
          }
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
                backgroundColor: "#E8E9F4",
                '& fieldset': {
                  borderColor: '#E8E9F4',
                },
                "&:hover": {
                  borderColor: "#E8E9F4",
                },

              },
            },
          },
        }
    }
  })

  return (

    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path={cheshire + "/"} element={<Public />} />
          <Route path={cheshire + "/login"}  element={<Login />} />
          <Route path={cheshire + "/sign-up"} element={<SignUp />} />
          <Route path={cheshire + "/home"}element={<Home />}>
            <Route path='user' element={<User />}>
              <Route path='profile' element={<Profile />} />
              <Route path='description' element={<Description />} />
              <Route path='change-password' element={<ChangePassword />} />
              <Route path='past-contracts' element={<div>past-contracts</div>} />
              <Route path='partner-reviews' element={<div>partner-reviews</div>} />
              <Route path='payment' element={<div>payment</div>} />
            </Route>
          </Route>
          <Route path={cheshire + "/message"} element={<Message />} />
          <Route path={cheshire + "/partners"} element={<Partners />} />
          <Route path={cheshire + "/matches"} element={<Matches />} />
          // <Route path={cheshire + "/profile"} element={<Profile />} />        
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
