import React from "react";
import { NavLink } from "react-router-dom";
import { User, Briefcase, Code, Mail } from "lucide-react";
import { Button } from "@mui/material";

const Navbar = () => {
  const handleResumeClick = () => {
    window.open("/assets/resume.pdf", "_blank");
  };

  return (
    <nav>
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        {/* Profile Picture */}
        <div className="relative group">
          <img
            src="/assets/Me5.jpg"
            alt="Neeraj Subramani"
            className="w-16 h-16 rounded-full object-cover shadow-lg border-2 border-[#16A085] transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        {/* Name and Tagline */}
        <h2 className="mt-4 text-sm font-bold text-[#F39C12] tracking-wide">Neeraj Subramani</h2>
        <h2 className="text-xs text-[#BDC3C7] text-center font-medium leading-relaxed">
          {/* Transforming ideas into interactive websites */}
        </h2>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col items-start space-y-2">
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
      <div className="mt-[20px]">
        <button
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