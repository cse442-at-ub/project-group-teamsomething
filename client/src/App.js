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
import Register from "./pages/Register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Public />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/check-in" element={<CheckIn />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/profilepic" element={<ProfilePic />} />
        <Route path="/Messages" element={<Messages />} />
        <Route path="/Partners" element={<Partners />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
