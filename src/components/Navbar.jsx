import React from "react";
import { NavLink } from "react-router-dom";
import { User, Briefcase, Code, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="h-screen w-64 bg-[#2C3E50] text-white flex flex-col justify-between p-6 shadow-lg fixed top-0 left-0">
      {/* Profile Section */}
      <div className="flex flex-col items-center mt-10 mb-10">
        {/* Profile Picture */}
        <img
          src="/assets/Me5.jpg"  // Ensure the correct path for your profile image
          alt="Neeraj Subramani"
          className="w-28 h-28 rounded-full object-cover shadow-md border-4 border-[#16A085]"
        />
        {/* Name and Tagline */}
        <h2 className="mt-4 text-2xl font-semibold text-[#F39C12]">Neeraj Subramani</h2>
        <p className="text-sm text-[#BDC3C7] text-center">Transforming ideas into interactive websites</p>
      </div>

      {/* Navigation Links */}
      <div style={{marginTop:"-70px"}} className="flex flex-col items-start mt-8 flex-grow justify-center">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex items-center p-4 mb-4 w-full justify-start rounded-lg text-xl font-semibold ${
              isActive
                ? "bg-[#16A085] text-white"
                : "hover:bg-[#1ABC9C] hover:text-white transition-all"
            }`
          } style={{fontSize: "25px"}}
        >
          <User className="mr-3" />
          <b style={{marginLeft:"10px"}}>About</b>
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `flex items-center p-4 mb-4 w-full justify-start rounded-lg text-lg font-semibold ${
              isActive
                ? "bg-[#16A085] text-white"
                : "hover:bg-[#1ABC9C] hover:text-white transition-all"
            }`
          } style={{fontSize: "25px"}}
        >
          <Briefcase className="mr-3" />
          <b style={{marginLeft:"10px"}}>Projects</b>
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) =>
            `flex items-center p-4 mb-4 w-full justify-start rounded-lg text-lg font-semibold ${
              isActive
                ? "bg-[#16A085] text-white"
                : "hover:bg-[#1ABC9C] hover:text-white transition-all"
            }`
          } style={{fontSize: "25px"}}
        >
          <Code className="mr-3" />
          <b style={{marginLeft:"10px"}}>Skills</b>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex items-center p-4 mb-4 w-full justify-start rounded-lg text-lg font-semibold ${
              isActive
                ? "bg-[#16A085] text-white"
                : "hover:bg-[#1ABC9C] hover:text-white transition-all"
            }`
          } style={{fontSize: "25px"}}
        >
          <Mail className="mr-3" />
          <b style={{marginLeft:"10px"}}>Contact</b>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
