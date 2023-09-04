import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "@pages/home/home";
import Dashboard from "@pages/dashboard/dashboard";

function App() {
  return (
    <div className="main-wrapper">
      <div className="main-header">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
