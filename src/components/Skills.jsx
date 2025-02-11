import React from 'react';
import { Box, Typography, LinearProgress, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Build, Storage, People } from '@mui/icons-material';

const skillsData = [
  {
    category: 'Frontend Development',
    icon: <Code fontSize="large" sx={{ color: '#ff9800' }} />, // Orange icon
    skills: [
      { name: 'JavaScript', level: 90, percentage: '90%' },
      { name: 'React.js', level: 85, percentage: '85%' },
      { name: 'HTML & CSS', level: 95, percentage: '95%' },
      { name: 'Tailwind CSS', level: 80, percentage: '80%' },
    ],
  },
  {
    category: 'Backend Development',
    icon: <Build fontSize="large" sx={{ color: '#673ab7' }} />, // Purple icon
    skills: [
      { name: 'Node.js', level: 80, percentage: '80%' },
      { name: 'Express.js', level: 75, percentage: '75%' },
      { name: 'MongoDB', level: 70, percentage: '70%' },
      { name: 'MySQL', level: 75, percentage: '75%' },
    ],
  },
  {
    category: 'Development Tools',
    icon: <Storage fontSize="large" sx={{ color: '#2196f3' }} />, // Blue icon
    skills: [
      { name: 'Git & GitHub', level: 85, percentage: '85%' },
      { name: 'Vercel', level: 80, percentage: '80%' },
      { name: 'Render', level: 78, percentage: '78%' },
      { name: 'Postman', level: 75, percentage: '75%' },
    ],
  },
  {
    category: 'Soft Skills',
    icon: <People fontSize="large" sx={{ color: '#f44336' }} />, // Red icon
    skills: [
      { name: 'Communication', level: 90, percentage: '90%' },
      { name: 'Leadership', level: 85, percentage: '85%' },
      { name: 'Problem-Solving', level: 88, percentage: '88%' },
      { name: 'Time Management', level: 92, percentage: '92%' },
    ],
  },
];

const Skills = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'linear-gradient(135deg,rgb(158, 200, 218),rgb(245, 246, 237))', // Dark gradient background
        color: '#ffffff',
        minHeight: '100vh',
        py: 4,
        px: 4,
        ml: '18vw',
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(90deg,rgb(49, 23, 75),rgb(178, 154, 197))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 4,
          }}
        >
          My Skills
        </Typography>
      </motion.div>

      {/* Skills Grid */}
      <Grid container spacing={4} justifyContent="center">
        {skillsData.map((category, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                sx={{
                  backgroundColor: '#212121', // Dark card background
                  color: '#ffffff',
                  borderRadius: 4,
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                {/* Gradient Overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '100%',
                    background: `linear-gradient(135deg, ${category.icon.props.sx.color}20, transparent)`, // Subtle gradient overlay
                    zIndex: 1,
                  }}
                ></Box>
                <CardContent sx={{ position: 'relative', zIndex: 2 }}>
                  {/* Category Header */}
                  <Box display="flex" alignItems="center" mb={2}>
                    {category.icon}
                    <Typography
                      variant="h5"
                      sx={{
                        ml: 2,
                        fontWeight: 'bold',
                        color: category.icon.props.sx.color, // Match icon color
                      }}
                    >
                      {category.category}
                    </Typography>
                  </Box>

                  {/* Skills List */}
                  {category.skills.map((skill, i) => (
                    <Box key={i} mb={2}>
                      {/* Skill Name and Percentage */}
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 'bold',
                            color: '#ffffff',
                          }}
                        >
                          {skill.name}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 'bold',
                            color: category.icon.props.sx.color, // Match icon color
                          }}
                        >
                          {skill.percentage}
                        </Typography>
                      </Box>

                      {/* Progress Bar */}
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 1,
                          backgroundColor: '#424242', // Dark background
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: category.icon.props.sx.color, // Match icon color
                          },
                        }}
                      />
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;