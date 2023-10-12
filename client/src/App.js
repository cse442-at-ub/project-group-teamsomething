import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Public from "./pages/public/Public";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Messages from "./pages/Messages/Messages";
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
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/profilepic" element={<ProfilePic />} />
        <Route path="/Messages" element={<Messages />} />
      </Routes>
    </Router>
  );
}

export default App;
