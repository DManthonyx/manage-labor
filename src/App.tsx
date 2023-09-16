import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "@pages/home/home";
import Dashboard from "@pages/dashboard/dashboard";
import LogIn from "@pages/log-in/log-in";

function App() {
  return (
    <div className="main-wrapper flex">
      <div className="main-header">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Log In</Link>
      </div>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
