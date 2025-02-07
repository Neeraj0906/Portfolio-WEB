import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import { Button, Badge, Typography, Box } from '@mui/material';
import { Container } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    // Full-Stack Projects
    {
      id: 1,
      name: "Flights.com",
      image: "/assets/Flight.com.png",
      summary: "A full-stack flight booking website with search engine, payment integration, and booking management.",
      details: "The Flights.com project is a comprehensive web application that allows users to search for flights using the Amadeus API, book flights, view booking details, and make payments using the Stripe API.",
      techStack: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe API",
        "Amadeus API",
        "Tailwind CSS",
        "JWT Auth"
      ],
      vercelLink: "https://flight-frontend-zeta.vercel.app/",
      renderLink: "https://flight-backend-twe1.onrender.com/",
      githubFrontendLink: "https://github.com/Neeraj0906/FLIGHT-frontend",
      githubBackendLink: "https://github.com/Neeraj0906/FLIGHT-backend",
      type: "Full Stack"
    },
    {
      id: 2,
      name: "Portfolio",
      image: "/assets/portfolio.png", // Placeholder image
      summary: "A personal portfolio website showcasing my skills, projects, and contact information.",
      details: "This portfolio website is built using modern technologies like React, Node.js, and Tailwind CSS. It includes animations, Material UI components, and a responsive design.",
      techStack: [
        "MongoDB",
        "React",
        "Node.js",
        "Express",
        "Tailwind CSS",
        "Framer Motion",
        "Material UI"
      ],
      vercelLink: "https://portfolio-web-two-henna.vercel.app/",
      renderLink: "https://portfolio-backend-kfna.onrender.com/",
      githubFrontendLink: "https://github.com/Neeraj0906/Portfolio-WEB",
      githubBackendLink: "https://github.com/Neeraj0906/portfolio-Backend",
      type: "Full Stack"
    },
    {
      id: 3,
      name: "AI Recipe Generator",
      image: "/assets/Ai-Recipe-Generator.png", // Placeholder image
      summary: "An AI-powered recipe generator that suggests recipes based on ingredients provided.",
      details: "This project uses the TogetherAI API to generate recipes dynamically. Users can input ingredients, and the app provides step-by-step instructions for preparing a dish.",
      techStack: [
        "MongoDB",
        "React",
        "Node.js",
        "Express",
        "TogetherAI API",
        "Tailwind CSS",
        "Framer Motion",
        "Material UI"
      ],
      vercelLink: "https://ai-recipe-generator-delta.vercel.app/",
      renderLink: "https://recipe-backend-fsd.onrender.com/",
      githubFrontendLink: "https://github.com/Neeraj0906/Ai-Recipe-Generator",
      githubBackendLink: "https://github.com/Neeraj0906/Recipe-Backend-FSD",
      type: "Full Stack"
    },
    {
      id: 4,
      name: "Habit Tracker",
      image: "/assets/Habit-tracker.png", // Placeholder image
      summary: "A visually appealing habit tracker app that helps users set goals and track progress.",
      details: "This app allows users to create habits, track their daily progress, and earn points for consistency. The interface is designed to be engaging and motivating.",
      techStack: [
        "MongoDB",
        "React",
        "Node.js",
        "Express",
        "Tailwind CSS",
        "Framer Motion",
        "Material UI"
      ],
      vercelLink: "https://habit-tracker-frontend-opal.vercel.app/",
      renderLink: "https://habit-tracker-backend-b8nl.onrender.com/",
      githubFrontendLink: "https://github.com/Neeraj0906/Habit-Tracker-frontend",
      githubBackendLink: "https://github.com/Neeraj0906/Habit-Tracker-Backend",
      type: "Full Stack"
    },

    // Frontend-Only Projects
    {
      id: 5,
      name: "FakeStoreApi E-commerce",
      image: "/assets/FakeStoreApi.png",
      summary: "Feature-rich e-commerce platform with product management, cart functionality, and checkout process.",
      details: "A React-based e-commerce site that fetches product data from a public API. Features include product browsing, cart management, and checkout flow.",
      techStack: [
        "React.js",
        "Redux",
        "Tailwind CSS",
        "RESTful API",
        "Context API",
        "React Router",
        "Local Storage"
      ],
      vercelLink: "https://my-react-cart-app-fxnc.vercel.app/",
      githubLink: "https://github.com/Neeraj0906/React-Assignment-Done",
      type: "Frontend"
    },
    {
      id: 6,
      name: "Memory Game",
      image: "/assets/Memory Game.png",
      summary: "Interactive memory matching game with score tracking and animations.",
      details: "A browser-based memory game where users match pairs of identical emojis on a grid. Features include card flipping animations and attempt tracking.",
      techStack: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Local Storage",
        "CSS Animations",
        "DOM Manipulation"
      ],
      vercelLink: "https://assignment3-card-game.vercel.app/",
      githubLink: "https://github.com/Neeraj0906/Assignment3-Card-Game",
      type: "Frontend"
    },
    {
      id: 7,
      name: "Course Landing Page",
      image: "/assets/Landing Page.png",
      summary: "Responsive landing page for an educational platform with modern design principles.",
      details: "A marketing page for an online course platform featuring course details, testimonials, and call-to-action sections.",
      techStack: [
        "HTML5",
        "Tailwind CSS",
        "Responsive Design",
        "CSS Grid",
        "CSS Flexbox"
      ],
      vercelLink: "https://assignment-2-green-sigma.vercel.app/",
      githubLink: "https://github.com/Neeraj0906/Assignment-2",
      type: "Frontend"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-gray-50 py-[30px] ml-[20%] px-[40px]" style={{ backgroundColor: "#273746" }}>
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold', color: '#fff' }}>
            Featured <span style={{ color: '#4c6ef5' }}>Projects</span>
          </Typography>
          <div className="h-1 w-20 bg-indigo-600 rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="row row-cols-1 row-cols-md-2 g-4"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item} className="col">
              <Box className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
                {/* Project Image */}
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Typography variant="h5" component="h2" style={{ fontWeight: 'bold' }}>
                      {project.name}
                    </Typography>
                    {/* Styled Badge for Full Stack/Frontend */}
                    <Badge
                      color="primary"
                      className="text-white text-sm font-semibold px-3 py-1 rounded-lg shadow-md"
                      style={{
                        backgroundColor: project.type === 'Full Stack' ? '#2b8a3e' : '#006f8e',
                        whiteSpace: 'nowrap',
                        maxWidth: '100%'
                      }}
                    >
                      {project.type}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{project.summary}</p>
                  <div className="mb-4">
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      style={{ fontWeight: 'bold', fontSize: '1.2rem' }}
                      gutterBottom
                    >
                      <Code className="w-4 h-4 mr-2" />
                      Tech Stack
                    </Typography>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="text-gray-800 text-lg font-medium border border-gray-300 px-3 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons Section */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    {/* Buttons for Full-Stack Projects */}
                    {project.type === "Full Stack" ? (
                      <>
                        <Button
                          component="a"
                          href={project.vercelLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="contained"
                          color="primary"
                          className="p-2 rounded-full"
                        >
                          Frontend Demo
                        </Button>
                        <Button
                          component="a"
                          href={project.renderLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="contained"
                          color="secondary"
                          className="p-2 rounded-full"
                        >
                          Backend Demo
                        </Button>
                        <Button
                          component="a"
                          href={project.githubFrontendLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="contained"
                          color="success"
                          className="p-2 rounded-full"
                        >
                          Frontend Code
                        </Button>
                        <Button
                          component="a"
                          href={project.githubBackendLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="contained"
                          color="info"
                          className="p-2 rounded-full"
                        >
                          Backend Code
                        </Button>
                      </>
                    ) : (
                      /* Buttons for Frontend Projects */
                      <>
                        <Button
                          component="a"
                          href={project.vercelLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="contained"
                          color="primary"
                          className="p-2 rounded-full"
                        >
                          Live Demo
                        </Button>
                        <Button
                          component="a"
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="contained"
                          color="secondary"
                          className="p-2 rounded-full"
                        >
                          Source Code
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </Box>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;