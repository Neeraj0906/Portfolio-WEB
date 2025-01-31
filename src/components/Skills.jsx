import React from 'react';
import { Box, Typography, LinearProgress, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Build, Storage, People } from '@mui/icons-material';

const skillsData = [
  {
    category: 'Frontend Development',
    icon: <Code fontSize="large" color="primary" />, 
    skills: [
      { name: 'JavaScript', level: 90, percentage: '90%' },
      { name: 'React.js', level: 85, percentage: '85%' },
      { name: 'HTML & CSS', level: 95, percentage: '95%' },
      { name: 'Tailwind CSS', level: 80, percentage: '80%' },
    ],
  },
  {
    category: 'Backend Development',
    icon: <Build fontSize="large" color="secondary" />, 
    skills: [
      { name: 'Node.js', level: 80, percentage: '80%' },
      { name: 'Express.js', level: 75, percentage: '75%' },
      { name: 'MongoDB', level: 70, percentage: '70%' },
      { name: 'MySQL', level: 75, percentage: '75%' },
    ],
  },
  {
    category: 'Development Tools',
    icon: <Storage fontSize="large" color="success" />, 
    skills: [
      { name: 'Git & GitHub', level: 85, percentage: '85%' },
      { name: 'Vercel', level: 80, percentage: '80%' },
      { name: 'Render', level: 78, percentage: '78%' },
      { name: 'Postman', level: 75, percentage: '75%' },
    ],
  },
  {
    category: 'Soft Skills',
    icon: <People fontSize="large" color="error" />, 
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
    <Box sx={{ backgroundColor: '#121212', color: '#ffffff', minHeight: '100vh', py: 4, px: 4, ml: 15 }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#00e676' }}>
          My Skills
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center">
        {skillsData.map((category, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              <Card sx={{ backgroundColor: '#1e1e1e', color: '#ffffff', borderRadius: 2, boxShadow: 5 }}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    {category.icon}
                    <Typography variant="h5" sx={{ ml: 2, fontWeight: 'bold', color: '#64b5f6' }}>
                      {category.category}
                    </Typography>
                  </Box>
                  {category.skills.map((skill, i) => (
                    <Box key={i} mb={2}>
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                          {skill.name}
                        </Typography>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#00e676' }}>
                          {skill.percentage}
                        </Typography>
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={skill.level} 
                        sx={{ 
                          height: 8, 
                          borderRadius: 1, 
                          backgroundColor: '#424242', 
                          '& .MuiLinearProgress-bar': { backgroundColor: '#00e676' } 
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
