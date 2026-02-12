import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Encyclopedia", path: "/encyclopedia" },
    { name: "Marine Prediction", path: "/prediction" },
    { name: "AI Assistant", path: "/assistant" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Hazard Detection", path: "/hazard-detection" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="bg-white border-b border-primary/20 sticky top-0 z-50 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Brand */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 bg-primary text-white flex items-center justify-center rounded-xl font-bold shadow-md">
            V
          </div>
          <div>
            <h1 className="text-lg font-bold text-primary">
              V-Forge
            </h1>
            <p className="text-xs text-accent">
              AI Marine Intelligence Platform
            </p>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">

          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition duration-200 whitespace-nowrap
                ${isActive ? "text-primary" : "text-primary/70 hover:text-primary"}`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] w-full transition-all duration-300 
                    ${isActive ? "bg-primary scale-x-100" : "bg-primary scale-x-0 group-hover:scale-x-100"}`}
                  />
                </>
              )}
            </NavLink>
          ))}

          {/* Premium CTA */}
          <NavLink
            to="/prediction"
            className="bg-warning text-white px-4 xl:px-5 py-2 rounded-xl font-semibold shadow-md hover:opacity-90 transition whitespace-nowrap text-sm"
          >
            Run Simulation
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-primary/20 px-6 py-6 space-y-4 shadow-lg animate-slideDown">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block text-base font-medium py-2 transition-colors ${
                  isActive ? "text-primary" : "text-primary/70 hover:text-primary"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/prediction"
            onClick={() => setMobileOpen(false)}
            className="block bg-warning text-white py-3 mt-4 rounded-xl text-center font-semibold hover:opacity-90 transition"
          >
            Run Simulation
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
