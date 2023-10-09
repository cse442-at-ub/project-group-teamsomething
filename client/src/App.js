import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Public from "./pages/public/Public";

import CheckIn from "./pages/CheckIn/CheckIn";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Messages from "./pages/Messages/Messages";
import Partners from "./pages/Partners/Partners";
import ChangePassword from "./pages/Profile/ChangePassword";
import ProfilePic from "./pages/Profile/ProfilePic";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Public />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        
        <Route path="/check-in" element={<CheckIn />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/profilepic" element={<ProfilePic />} />
        <Route path="/Messages" element={<Messages />} />
        <Route path="/Partners" element={<Partners />} />
      </Routes>
    </Router>
  );
}

export default App;
