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
import Message_Blocked from "./pages/Message/Message_Blocked";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Public />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/message" element={<Message_Blocked />} />
        <Route path="/message/blocked" element={<Message_Blocked />} />
        <Route path="/partners"element={<Partners />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/profile" element={<Profile />} />        
      </Routes>
    </Router>
  );
}

export default App;
