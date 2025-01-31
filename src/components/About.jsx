import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ marginLeft: '120px' }}
      className="min-h-screen bg-gradient-custom py-16 px-[40px] ml-64"
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10 text-center"
        >
          <Typography variant="h3" component="h1" style={{ color: 'var(--heading-color)' }} gutterBottom>
            About <span style={{ color: 'var(--primary-color)' }}>Me</span>
          </Typography>
          <Box className="h-1 w-24 bg-accent rounded-full mx-auto"></Box>
        </motion.div>

        <Grid container spacing={4}>
          {/* Bio Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={5} className="p-6 bg-white rounded-lg shadow-lg paper">
              <Typography variant="h5" component="h2" style={{ color: 'var(--primary-color)' }} gutterBottom>
                Hello, I'm <span style={{ color: 'var(--accent-color)' }}>Neeraj Subramani</span>!
              </Typography>
              <Typography variant="body1" style={{ color: 'var(--paper-text-color)' }}>
                I'm a passionate web developer with a strong background in full-stack development using the MERN stack.
                I enjoy creating interactive and visually stunning websites that provide excellent user experiences.
                My goal is to constantly learn and push my skills further, building innovative solutions.
              </Typography>
            </Paper>
          </Grid>

         {/* Education Section */}
<Grid item xs={12} md={6}>
  <Paper elevation={5} className="p-6 bg-white rounded-lg shadow-lg paper">
    <Typography variant="h5" component="h3" style={{ color: 'var(--primary-color)' }} gutterBottom>
      Education
    </Typography>
    <Typography variant="body1" style={{ color: 'var(--paper-text-color)' }}>
      I earned a <strong>Bachelor’s degree in Computer Science</strong> from <strong>Dayananda Sagar University</strong> (2020 - 2024).  
      During my studies, I developed a strong foundation in web development and full-stack technologies through hands-on projects.
    </Typography>
  </Paper>
</Grid>


          {/* What I Do Section */}
          <Grid item xs={12}>
            <Paper elevation={5} className="p-6 bg-white rounded-lg shadow-lg paper">
              <Typography variant="h5" component="h3" style={{ color: 'var(--primary-color)' }} gutterBottom>
                What I Do
              </Typography>
              <Typography variant="body1" style={{ color: 'var(--paper-text-color)' }}>
                I specialize in building responsive and dynamic web applications using the latest technologies such as React, Node.js, and MongoDB.
                I love working on projects that solve real-world problems and help businesses grow.
              </Typography>
            </Paper>
          </Grid>

          {/* Floating Box with Animation */}
          <Grid item xs={12}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
              <Paper elevation={5} className="p-6 bg-accent text-black rounded-lg shadow-lg text-center">
                <Typography variant="h5" component="h2" mb={2} style={{ color: 'var(--heading-color)' }}>
                  Let's Connect!
                </Typography>
                <Typography variant="body1" style={{ color: 'var(--paper-text-color)' }}>
                  Whether you're looking for collaboration or just want to chat about tech, feel free to reach out!
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </motion.section>
  );
};

export default About;
