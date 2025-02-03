import React from "react";
import { NavLink } from "react-router-dom";
import { User, Briefcase, Code, Mail } from "lucide-react";
import { Button } from "@mui/material"; // Material UI Button

const Navbar = () => {
  const handleResumeClick = () => {
    window.open("/assets/resume.pdf", "_blank");
  };

  return (
    <nav className="h-screen w-[245] bg-gradient-to-b from-[#2C3E50] to-[#1a2632] text-white flex flex-col justify-between p-4 shadow-xl fixed top-[0px] left-0 border-r border-[#3d566b]">
      {/* Profile Section */}
      <div className="flex flex-col items-center mt-[-12px] mb-6">
        {/* Profile Picture with Animation */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#16A085] to-[#F39C12] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
          <img
            src="/assets/Me5.jpg"
            alt="Neeraj Subramani"
            className="relative w-24 h-24 rounded-full object-cover shadow-lg border-4 border-[#16A085] transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        {/* Name and Tagline */}
        <h2 className="mt-4 text-xl font-bold text-[#F39C12] tracking-wide">Neeraj Subramani</h2>
        <p className="mt-2 text-xs text-[#BDC3C7] text-center font-medium leading-relaxed">
          Transforming ideas into interactive websites
        </p>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col items-start flex-grow justify-start space-y-3">
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
              `flex items-center p-3 w-full justify-start rounded-xl text-lg font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-[#16A085] to-[#1abc9c] text-white shadow-lg"
                  : "hover:bg-[#1ABC9C]/20 text-[#ECF0F1]"
              }`
            }
          >
            {React.cloneElement(icon, { className: "w-5 h-5", strokeWidth: 2.5 })}
            <span className="ml-4">{label}</span>
          </NavLink>
        ))}
      </div>

      {/* Resume Button */}
      <div className="mt-auto mb-4"> 
        <button
          onClick={handleResumeClick}
          className="flex items-center p-2 w-full justify-start rounded-xl text-lg font-semibold transition-all duration-300 bg-gradient-to-r from-[#5b79d9] to-[#1abc9c] text-white shadow-lg hover:bg-[#1ABC9C]/70"
        >
          <span className="ml-3">Download Resume</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
