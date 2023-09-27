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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Public />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/check-in" element={<CheckIn />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/profilepic" element={<ProfilePic />} />
      </Routes>
    </Router>
  );
}

export default App;