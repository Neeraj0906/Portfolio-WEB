import React from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Button,
  IconButton,
} from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] py-16 px-[40px]"
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-12"
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, rgb(229, 163, 218), rgb(32, 23, 209))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
            }}
          >
            About <span style={{ color: '#673ab7' }}>Me</span>
          </Typography>
          <Box className="h-1 w-24 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] rounded-full mx-auto"></Box>
        </motion.div>

        {/* Main Content */}
        <Grid container spacing={6}>
          {/* Section 1: Introduction */}
          <Grid item xs={12}>
            <Paper
              elevation={6}
              className="p-8 rounded-lg shadow-lg"
              sx={{
                backgroundColor: '#fffaf0', // Creamy white background
                position: 'relative',
              }}
            >
              {/* Tag for Heading */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '-1rem',
                  left: '1rem',
                  backgroundColor: '#ff7e5f',
                  color: '#fff',
                  px: 2,
                  py: 0.5,
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                }}
              >
                Introduction
              </Box>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontWeight: 'bold',
                    color: '#ff7e5f', // Grand color for the name
                    textAlign: 'center',
                    mb: 4,
                    ml: '-500px',
                    padding:"1px 10px",
                    paddingLeft:"60px"
                  }}
                >
                  Neeraj Subramani
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: '#555', lineHeight: 1.6, textAlign: 'start' ,paddingLeft:"25px"}}
                >
                  I'm a passionate web developer specializing in full-stack development using the MERN stack. I enjoy creating interactive and visually stunning websites that provide excellent user experiences. My goal is to constantly learn and push my skills further, building innovative solutions.
                </Typography>
              </motion.div>
            </Paper>
          </Grid>

          {/* Section 2: Education */}
          <Grid item xs={12}>
            <Paper
              elevation={6}
              className="p-8 rounded-lg shadow-lg"
              sx={{
                backgroundColor: '#f0f8ff', // Light blue background
                position: 'relative',
                padding:"10px 20px",
                    paddingLeft:"20px"
              }}
            >
              {/* Tag for Heading */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '-1rem',
                  left: '1rem',
                  backgroundColor: '#673ab7',
                  color: '#fff',
                  px: 2,
                  py: 0.5,
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                }}
              >
                Education
              </Box>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontWeight: 'bold',
                    color: '#673ab7', // Distinct color for Education heading
                    mb: 2,
                    
                  }}
                >
                  Education
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: '#555', lineHeight: 1.6 }}
                >
                  I earned a{' '}
                  <strong>Bachelor’s degree in Computer Science</strong> from{' '}
                  <strong>Dayananda Sagar University</strong> (2020 - 2024).
                  During my studies, I developed a strong foundation in web development and full-stack technologies through hands-on projects.
                </Typography>
              </motion.div>
            </Paper>
          </Grid>

          {/* Section 3: What I Do */}
          <Grid item xs={12}>
            <Paper
              elevation={6}
              className="p-8 rounded-lg shadow-lg"
              sx={{
                backgroundColor: '#fff3e0', // Light orange background
                position: 'relative',
              }}
            >
              {/* Tag for Heading */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '-1rem',
                  left: '1rem',
                  backgroundColor: '#0077b5',
                  color: '#fff',
                  px: 2,
                  py: 0.5,
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                }}
              >
                Skills
              </Box>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontWeight: 'bold',
                    color: '#0077b5', // Distinct color for What I Do heading
                    mb: 2,
                    padding:"10px 20px",
                    paddingLeft:"20px"
                  }}
                >
                  What I Do
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: '#555', lineHeight: 1.6 ,padding:"10px 20px",
                    paddingLeft:"20px"}}
                >
                  I specialize in building responsive and dynamic web applications using the latest technologies such as React, Node.js, and MongoDB. I love working on projects that solve real-world problems and help businesses grow.
                </Typography>
              </motion.div>
            </Paper>
          </Grid>

          {/* Section 4: Let's Connect */}
          <Grid item xs={12}>
            <Paper
              elevation={6}
              className="p-8 rounded-lg shadow-lg"
              sx={{
                backgroundImage: 'linear-gradient(to bottom right, #673ab7, #512da8)', // Gradient background
                color: '#fff',
                position: 'relative',
              }}
            >
              {/* Tag for Heading */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '-1rem',
                  left: '1rem',
                  backgroundColor: '#ffffff',
                  color: '#673ab7',
                  px: 2,
                  py: 0.5,
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                }}
              >
                Contact
              </Box>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontWeight: 'bold',
                    color: '#ffffff', // White text for contrast
                    mb: 2,padding:"10px 20px",
                    paddingLeft:"20px"
                  }}
                >
                  Let's Connect!
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 4 ,padding:"10px 20px",
                    paddingLeft:"20px"}}>
                  Whether you're looking for collaboration or just want to chat about tech, feel free to reach out!
                </Typography>
                {/* Social Links */}
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 4 }}>
                  <IconButton
                    href="https://www.linkedin.com/in/neeraj-subramani"
                    target="_blank"
                    aria-label="LinkedIn"
                    sx={{
                      backgroundColor: '#fff',
                      color: '#0077b5',
                      '&:hover': { backgroundColor: '#e0e0e0' },
                    }}
                  >
                    <LinkedIn />
                  </IconButton>
                  <IconButton
                    href="https://github.com/Neeraj0906"
                    target="_blank"
                    aria-label="GitHub"
                    sx={{
                      backgroundColor: '#fff',
                      color: '#24292e',
                      '&:hover': { backgroundColor: '#e0e0e0' },
                    }}
                  >
                    <GitHub />
                  </IconButton>
                  <IconButton
                    href="mailto:neeraj.subramani@example.com"
                    aria-label="Email"
                    sx={{
                      backgroundColor: '#fff',
                      color: '#ff9800',
                      '&:hover': { backgroundColor: '#e0e0e0' },
                    }}
                  >
                    <Email />
                  </IconButton>
                </Box>
                {/* Call to Action Button */}
                <Button
                  variant="contained"
                  color="secondary"
                  href="#contact"
                  sx={{
                    backgroundColor: '#ffffff',
                    color: '#673ab7',
                    '&:hover': { backgroundColor: '#e0e0e0' },
                    fontWeight: 'bold',
                    display: 'block',
                    margin: '0 auto',
                    paddingLeft:"360px"
                  }}
                >
                  Contact Me
                </Button>
              </motion.div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </motion.section>
  );
};

export default About;