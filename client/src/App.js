import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import Public from "./pages/public/Public";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

import Home from "./pages/Home/Home";
import Partner from "./pages/Partners/Partner"
import Matches from "./pages/Matches/Matches";
import Message from "./pages/Message/Message";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Public />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/Matches" element={<Matches />} />
        <Route path="/Message" element={<Message />} />
      </Routes>
    </Router>
  );
}

export default App;
