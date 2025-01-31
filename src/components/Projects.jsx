import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import { Button, Badge, Typography, Box } from '@mui/material';
import { Container } from 'react-bootstrap';

const Projects = () => {
  const projects = [
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
      githubLink: "https://github.com/Neeraj0906/FLIGHT-frontend",
      type: "Full Stack"
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
    <section className="bg-gray-50 py-20 ml-[120px]" style={{ backgroundColor: "#273746" }}>
      <Container>
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

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="row row-cols-1 row-cols-md-2 g-4"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item} className="col">
              <Box className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        component="a"
                        href={project.vercelLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        color="primary"
                        className="p-2 rounded-full"
                      >
                        <ExternalLink />
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
                        <Github />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Typography variant="h5" component="h2" style={{ fontWeight: 'bold' }}>
                      {project.name}
                    </Typography>
                    <Badge color="primary" badgeContent={project.type} />
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


                  <div className="d-flex justify-content-between">
                    <Button
                      component="a"
                      href={project.vercelLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      color="primary"
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
                    >
                      Source Code
                    </Button>
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
