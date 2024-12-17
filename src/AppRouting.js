import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import NotFound from "./components/NotFound";
import './App.css';


export function App() {
  return (
    <div className="app-container">
      <h1>React Routing</h1>
      <BrowserRouter>
      <Link to="/about">Go to About</Link>
      <Link to="/home">Go to Home</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}