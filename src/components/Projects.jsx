import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronDown } from 'lucide-react';
import {
  Typography,
  Button,
  Box,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const Projects = () => {
  const projects = [
    // Full-Stack Projects
    {
      id: 1,
      name: "Flights.com",
      image: "/assets/Flight.com.png",
      summary:
        "A full-stack flight booking website with search engine, payment integration, and booking management.",
      details:
        "The Flights.com project is a comprehensive web application that allows users to search for flights using the Amadeus API, book flights, view booking details, and make payments using the Stripe API.",
      vercelLink: "https://flight-frontend-zeta.vercel.app/",
      renderLink: "https://flight-backend-twe1.onrender.com/",
      githubFrontendLink: "https://github.com/Neeraj0906/FLIGHT-frontend",
      githubBackendLink: "https://github.com/Neeraj0906/FLIGHT-backend",
      type: "Full Stack",
    },
    {
      id: 4, // Swapped with Habit Tracker
      name: "Habit Tracker",
      image: "/assets/Habit-tracker.png", // Placeholder image
      summary:
        "A visually appealing habit tracker app that helps users set goals and track progress.",
      details:
        "This app allows users to create habits, track their daily progress, and earn points for consistency. The interface is designed to be engaging and motivating.",
      vercelLink: "https://habit-tracker-frontend-opal.vercel.app/",
      renderLink: "https://habit-tracker-backend-b8nl.onrender.com/",
      githubFrontendLink: "https://github.com/Neeraj0906/Habit-Tracker-frontend",
      githubBackendLink: "https://github.com/Neeraj0906/Habit-Tracker-Backend",
      type: "Full Stack",
    },
    {
      id: 3,
      name: "AI Recipe Generator",
      image: "/assets/Ai-Recipe-Generator.png", // Placeholder image
      summary:
        "An AI-powered recipe generator that suggests recipes based on ingredients provided.",
      details:
        "This project uses the TogetherAI API to generate recipes dynamically. Users can input ingredients, and the app provides step-by-step instructions for preparing a dish.",
      vercelLink: "https://ai-recipe-generator-delta.vercel.app/",
      renderLink: "https://recipe-backend-fsd.onrender.com/",
      githubFrontendLink: "https://github.com/Neeraj0906/Ai-Recipe-Generator",
      githubBackendLink: "https://github.com/Neeraj0906/Recipe-Backend-FSD",
      type: "Full Stack",
    },
    {
      id: 2, // Swapped with Movie Search App
      name: "Movie Search App",
      image: "/assets/Movie-search.png", // Placeholder image
      summary:
        "User can search for movies, view details, and watch its ratings.",
      details:
        "This movie-search website is built using modern technologies like React, Node.js, and Tailwind CSS. It includes animations, Material UI components, and a responsive design.",
      vercelLink: "https://movie-search-app-react-ten.vercel.app/search",
      renderLink: "https://movie-search-backend-okgv.onrender.com/",
      githubFrontendLink: "https://github.com/Neeraj0906/Movie-Search-App-React",
      githubBackendLink: "https://github.com/Neeraj0906/Movie-Search-backend",
      type: "Full Stack",
    },
    // Frontend-Only Projects
    {
      id: 5,
      name: "FakeStoreApi E-commerce",
      image: "/assets/FakeStoreApi.png",
      summary:
        "Feature-rich e-commerce platform with product management, cart functionality, and checkout process.",
      details:
        "A React-based e-commerce site that fetches product data from a public API. Features include product browsing, cart management, and checkout flow.",
      vercelLink: "https://my-react-cart-app-fxnc.vercel.app/",
      githubLink: "https://github.com/Neeraj0906/React-Assignment-Done",
      type: "Frontend",
    },
    {
      id: 6,
      name: "Memory Game",
      image: "/assets/Memory Game.png",
      summary:
        "Interactive memory matching game with score tracking and animations.",
      details:
        "A browser-based memory game where users match pairs of identical emojis on a grid. Features include card flipping animations and attempt tracking.",
      vercelLink: "https://assignment3-card-game.vercel.app/",
      githubLink: "https://github.com/Neeraj0906/Assignment3-Card-Game",
      type: "Frontend",
    },
    {
      id: 7,
      name: "Course Landing Page",
      image: "/assets/Landing Page.png",
      summary:
        "Responsive landing page for an educational platform with modern design principles.",
      details:
        "A marketing page for an online course platform featuring course details, testimonials, and call-to-action sections.",
      vercelLink: "https://assignment-2-green-sigma.vercel.app/",
      githubLink: "https://github.com/Neeraj0906/Assignment-2",
      type: "Frontend",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#0d47a1", // Base background color
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff", // Particle color
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          py: 8,
          px: 4,
          ml: "20%", // Adjusted for the fixed navbar
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 4,
            }}
          >
            Featured Projects
          </Typography>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card
                sx={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                  },
                  backgroundColor: "#ffffff", // White card background
                  height: "100%", // Ensure all cards have equal height
                  position: "relative",
                }}
              >
                {/* Project Image */}
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.name}
                  sx={{
                    objectFit: "cover",
                  }}
                />

                {/* Full Stack or Frontend Label (Top-Right Corner) */}
                {project.type === "Full Stack" || project.type === "Frontend" ? (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      backgroundColor: project.type === "Full Stack" ? "#673ab7" : "#ff9800",
                      color: "#fff",
                      px: 2,
                      py: 0.5,
                      borderRadius: "4px",
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                    }}
                  >
                    {project.type}
                  </Box>
                ) : null}

                {/* Project Name */}
                <CardContent sx={{ textAlign: "center", py: 2 }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                        background: "linear-gradient(90deg, #6a11cb, #2575fc)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {project.name}
                    </Typography>
                  </motion.div>
                </CardContent>

                {/* Expandable Details Section */}
                <Accordion
                  sx={{
                    borderTop: "1px solid #ddd",
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                    boxShadow: "none",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ChevronDown />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      "& .MuiAccordionSummary-expandIconWrapper": {
                        color: "#673ab7",
                      },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "bold",
                        color: "#673ab7",
                      }}
                    >
                      View Details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* Summary */}
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                        mb: 2,
                      }}
                    >
                      {project.summary}
                    </Typography>

                    {/* Buttons Section */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                      {/* First Line: Frontend Demo and Backend Demo */}
                      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}>
                        {/* Left Side: Frontend Demo */}
                        <Button
                          variant="contained"
                          color="primary"
                          href={
                            project.type === "Full Stack"
                              ? project.vercelLink
                              : project.vercelLink
                          }
                          target="_blank"
                          startIcon={<ExternalLink size={16} />}
                          sx={{
                            textTransform: "none",
                            fontSize: "0.875rem",
                            whiteSpace: "nowrap",
                            backgroundColor: "#673ab7", // Purple color
                            "&:hover": {
                              backgroundColor: "#512da8", // Darker purple on hover
                            },
                            flexGrow: 1,
                          }}
                        >
                          Frontend Demo
                        </Button>

                        {/* Right Side: Backend Demo */}
                        {project.type === "Full Stack" && (
                          <Button
                            variant="contained"
                            color="secondary"
                            href={project.renderLink}
                            target="_blank"
                            startIcon={<ExternalLink size={16} />}
                            sx={{
                              textTransform: "none",
                              fontSize: "0.875rem",
                              whiteSpace: "nowrap",
                              backgroundColor: "#ff9800", // Orange color
                              "&:hover": {
                                backgroundColor: "#e68a00", // Darker orange on hover
                              },
                              flexGrow: 1,
                            }}
                          >
                            Backend Demo
                          </Button>
                        )}
                      </Box>

                      {/* Second Line: Frontend Code and Backend Code */}
                      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 1 }}>
                        {/* Left Side: Frontend Code */}
                        <Button
                          variant="outlined"
                          color="primary"
                          href={
                            project.type === "Full Stack"
                              ? project.githubFrontendLink
                              : project.githubLink
                          }
                          target="_blank"
                          startIcon={<Github size={16} />}
                          sx={{
                            textTransform: "none",
                            fontSize: "0.875rem",
                            whiteSpace: "nowrap",
                            borderColor: "#673ab7", // Purple border
                            color: "#673ab7", // Purple text
                            "&:hover": {
                              borderColor: "#512da8", // Darker purple border on hover
                              color: "#512da8", // Darker purple text on hover
                            },
                            flexGrow: 1,
                          }}
                        >
                          Frontend Code
                        </Button>

                        {/* Right Side: Backend Code */}
                        {project.type === "Full Stack" && (
                          <Button
                            variant="outlined"
                            color="secondary"
                            href={project.githubBackendLink}
                            target="_blank"
                            startIcon={<Github size={16} />}
                            sx={{
                              textTransform: "none",
                              fontSize: "0.875rem",
                              whiteSpace: "nowrap",
                              borderColor: "#ff9800", // Orange border
                              color: "#ff9800", // Orange text
                              "&:hover": {
                                borderColor: "#e68a00", // Darker orange border on hover
                                color: "#e68a00", // Darker orange text on hover
                              },
                              flexGrow: 1,
                            }}
                          >
                            Backend Code
                          </Button>
                        )}
                      </Box>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};

export default Projects;