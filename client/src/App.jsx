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
import Profile from "./pages/Profile/Profile";

// var cheshire = "/CSE442-542/2023-Fall/cse-442x/build";
var cheshire = ''

function App() {
  return (
    <Router>
      <Routes>
        <Route path= {cheshire + "/"} element={<Public />} />
        <Route path= {cheshire + "/home"} element={<Home />} />
        <Route path= {cheshire + "/login"} element={<Login />} />
        <Route path= {cheshire + "/check-in"} element={<CheckIn />} />
        <Route path= {cheshire + "/changepassword"} element={<ChangePassword />} />
        <Route path= {cheshire + "/profilepic"} element={<ProfilePic />} />
        <Route path= {cheshire + "/message"} element={<Message />} />
        <Route path= {cheshire + "/partners"} element={<Partners />} />
        <Route path= {cheshire + "/sign-up"} element={<SignUp />} />
        <Route path= {cheshire + "/matches"} element={<Matches />} />    
      </Routes>
    </Router>
  );
}

export default App;
