import Public from "./pages/public/Public";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import CheckIn from "./pages/CheckIn/CheckIn";
import ChangePassword from "./pages/Profile/ChangePassword";
import ProfilePic from "./pages/Profile/ProfilePic";
import Messages from "./pages/Messages/Messages"
import Partners from "./pages/Partners/Partners"

var cheshire = "/CSE442-542/2023-Fall/cse-442x/build";
//var cheshire = ''

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
        <Route path= {cheshire + "/Messages"} element={<Messages />} />
        <Route path= {cheshire + "/Partners"} element={<Partners />} />
      </Routes>
    </Router>
  );
}

export default App;
