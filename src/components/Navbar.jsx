import React from "react";
import { NavLink } from "react-router-dom";
import { User, Briefcase, Code, Mail } from "lucide-react";
import { Button, Typography } from "@mui/material";

const Navbar = () => {
  const handleResumeClick = () => {
    window.open("/assets/Neeraj-Resume.pdf", "_blank");
  };

  return (
    <nav style={{ backgroundColor: "#1C2833" }} className="fixed top-0 left-0 w-[20%] h-screen bg-gradient-to-b from-[#273746] to-[#1C2833] text-white p-6 overflow-y-auto">
      {/* Profile Section */}
      <div className="flex flex-col items-center justify-center space-y-4 mb-8">
        {/* Profile Picture */}
        <div className="relative group transition-transform duration-300">
          <img
            src="/assets/Me5.jpg"
            alt="Neeraj Subramani"
            className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-[#16A085] group-hover:scale-105"
          />
        </div>
        {/* Name and Tagline */}
        <div className="text-center">
          <h2 className="text-sm font-bold text-[#F39C12] tracking-wide">Neeraj Subramani</h2>
          <Typography
            variant="body2"
            style={{
              color: "#BDC3C7",
              fontStyle: "italic",
              fontWeight: "medium",
              padding: "0.25rem 0.5rem",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "4px",
              marginTop: "0.5rem",
            }}
          >
            {"“Transforming ideas into interactive websites”"}
          </Typography>
        </div>
      </div>

      {/* Navigation Links */}
      <div style={{marginTop:"20px"}} className="space-y-4">
        {[
          { to: "/about", icon: <User />, label: "About" },
          { to: "/projects", icon: <Briefcase />, label: "Projects" },
          { to: "/skills", icon: <Code />, label: "Skills" },
          { to: "/contact", icon: <Mail />, label: "Contact" },
        ].map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center p-2 w-full justify-start rounded-lg text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-[#16A085] to-[#1abc9c] text-white shadow-lg"
                  : "hover:bg-[#1ABC9C]/20 text-[#ECF0F1]"
              }`
            }
          >
            {React.cloneElement(icon, { className: "w-4 h-4", strokeWidth: 2 })}
            <span className="ml-2">{label}</span>
          </NavLink>
        ))}
      </div>

      {/* Resume Button */}
      <div className="mt-auto pt-8">
        <button
        style={{marginTop:"-7 0px"}}
          onClick={handleResumeClick}
          className="flex items-center p-2 w-full justify-start rounded-lg text-sm font-semibold transition-all duration-300 bg-gradient-to-r from-[#5b79d9] to-[#1abc9c] text-white shadow-lg hover:bg-[#1ABC9C]/70"
        >
          <span className="ml-2">Download Resume</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;