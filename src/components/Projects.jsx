import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      name: "Flights.com",
      image: "/assets/Flight.com.png",
      summary:
        "A full-stack flight booking website with a search engine, payment integration, and a dashboard for managing bookings.",
      details:
        "The Flights.com project is a comprehensive web application that allows users to search for flights using the Amadeus API, book flights, view booking details, and make payments using the Stripe API. The frontend is built with React and Tailwind CSS, while the backend is powered by Node.js, Express, and MongoDB. This project integrates both a flight search feature and a payment gateway.",
      vercelLink: "https://flight-frontend-zeta.vercel.app/",
      githubLink: "https://github.com/Neeraj0906/FLIGHT-frontend",
    },
    {
      id: 2,
      name: "FakeStoreApi",
      image: "/assets/FakeStoreApi.png",
      summary:
        "An e-commerce website that allows users to view products, add them to a shopping cart, and proceed to checkout.",
      details:
        "The FakeStoreApi project is a React-based e-commerce site that fetches product data from a public API. Users can browse products, add them to a shopping cart, modify the cart's content, and proceed to checkout. The app is designed to be responsive, using Tailwind CSS for styling, and includes features such as product quantity adjustment and removal from the cart.",
      vercelLink: "https://my-react-cart-app-fxnc.vercel.app/",
      githubLink: "https://github.com/Neeraj0906/React-Assignment-Done",
    },
    {
      id: 3,
      name: "Memory Game",
      image: "/assets/Memory Game.png",
      summary:
        "A 4x4 memory matching game built with HTML, CSS, and JavaScript.",
      details:
        "The Memory Game project is a simple browser game where users have to match pairs of identical emojis on a grid. It is built using HTML, CSS, and vanilla JavaScript. The game allows players to flip cards, check for matches, and track the number of attempts needed to complete the game.",
      vercelLink: "https://assignment3-card-game.vercel.app/",
      githubLink: "https://github.com/Neeraj0906/Assignment3-Card-Game",
    },
    {
      id: 4,
      name: "Landing Page",
      image: "/assets/Landing Page.png",
      summary:
        "A landing page designed for a course website, featuring key sections like course details, testimonials, and call-to-action buttons.",
      details:
        "The Landing Page project is a marketing page for an online course platform. It includes sections like featured courses, testimonials, and a call-to-action section encouraging users to sign up. The page is built using HTML and Tailwind CSS for a responsive, clean design.",
      vercelLink: "https://assignment-2-green-sigma.vercel.app/",
      githubLink: "https://github.com/Neeraj0906/Assignment-2",
    },
  ];

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section
      className="p-8 bg-[#ecf0f1] min-h-screen mt-12"
      style={{ marginLeft: "5rem", paddingLeft:"20px" }} // Adjust margin to match the width of Sidebar
    >
      <div className="max-w-4xl mx-auto relative">
        <b><h1 style={{fontSize:"50px",marginBottom:"-8px",marginTop:"10px",backgroundColor:"#F5F5F5 ",borderRadius:"20px"}} className="text-4xl font-semibold text-[#14181c] mb-6">PROJECTS</h1></b>

        {/* Slider Container */}
        <div className="flex items-center space-x-4 relative">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`absolute bg-[#3498db] text-white px-6 py-3 rounded-full shadow-xl ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#2980b9]"
            }`}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-2xl" />
          </button>

          {/* Current Project */}
<div   className="flex-shrink-0 w-full bg-white rounded-lg shadow-lg p-4 max-h-[400px]">
  <img
    src={projects[currentIndex].image}
    alt={projects[currentIndex].name}
    className="w-full h-32 object-cover rounded-lg mb-4" // Reduced image height
  />
  <h2 style={{marginTop:"-8px"}} className="text-xl font-semibold text-[#2C3E50] mb-2">
    {projects[currentIndex].name}
  </h2>
  <p style={{marginTop:"-25px"}} className="text-sm text-[#7f8c8d] mb-4 line-clamp-3">
    {projects[currentIndex].summary}
  </p>

  {/* Vercel and GitHub Links */}
  <div style={{marginTop:"-20px"}} className="flex flex-col mt-4 space-y-2">
    <a
    style={{color:"white",borderRadius:"20px",marginBottom:"3px"}}
      href={projects[currentIndex].vercelLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-[#1b2120] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#1ABC9C] transition duration-300"
    >
      <img
        src="/assets/Vercel icon.png"
        alt="Vercel"
        className="w-[30px] h-[30px] mr-2"
      />
      View on Vercel
    </a>
    <a
    style={{color:"white",borderRadius:"20px"}}
      href={projects[currentIndex].githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-[#0e672a] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#34495E] transition duration-300"
    >
      <FontAwesomeIcon
        icon={faGithub}
        className="text-white w-[30px] h-[30px] mr-2"
      />
      View on GitHub
    </a>
  </div>
</div>


          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentIndex === projects.length - 1}
            className={`absolute right-[-0rem] bg-[#3498db] text-white px-6 py-3 ml-10 rounded-full shadow-xl ${
              currentIndex === projects.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#2980b9]"
            }`}
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
