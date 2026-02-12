import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/home";
import About from "./pages/About";
import MarinePrediction from "./pages/MarinePrediction";
import Assistant from "./pages/Assistant";
import { Encyclopedia } from "./pages/Encylopedia";
import Dashboard from "./pages/Dashboard";
import CaseStudy from "./pages/CaseStudy";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background font-[Poppins]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prediction" element={<MarinePrediction />} />
          <Route path="/about" element={<About />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/encyclopedia" element={<Encyclopedia />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/case-studies" element={<CaseStudy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
