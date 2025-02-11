import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  CircularProgress,
  Alert,
  Box, // Ensure this is imported
} from '@mui/material';
import { Mail, Phone, GitHub, LinkedIn, Send } from '@mui/icons-material';
import { sendContactForm } from '../api'; // Import the function to send form data

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null); // For handling error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null); // Clear previous errors if any
    try {
      // Sending form data to the backend API
      await sendContactForm(formData);
      setFormData({ name: '', email: '', message: '' }); // Reset form fields
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000); // Hide success message after 3 seconds
    } catch (error) {
      setError('Failed to send the message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail />,
      label: 'Email',
      value: 'eng20cs0301.neeraj@gmail.com',
      link: 'mailto:eng20cs0301.neeraj@gmail.com',
    },
    {
      icon: <Phone />,
      label: 'Phone',
      value: '+91 6382561931',
      link: 'tel:+916382561931',
    },
    {
      icon: <LinkedIn />,
      label: 'LinkedIn',
      value: 'Neeraj Subramani',
      link: 'https://www.linkedin.com/in/neeraj-s-a06151203',
    },
    {
      icon: <GitHub />,
      label: 'GitHub',
      value: 'Neeraj0906',
      link: 'https://github.com/Neeraj0906',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] py-16 px-[40px]"
      style={{ marginLeft: '250px' }} // Adjust margin-left to avoid sidebar overlap
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
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #ff7e5f, #feb47b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Get in Touch
          </Typography>
          <Box className="h-1 w-24 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] rounded-full mx-auto mt-2"></Box>
        </motion.div>

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card elevation={6} sx={{ p: 4, backgroundColor: '#ffffff', borderRadius: 4 }}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#673ab7', mb: 3 }}>
                    Send Me a Message
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      margin="normal"
                      required
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      margin="normal"
                      required
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      margin="normal"
                      required
                      sx={{ mb: 3 }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      disabled={isSubmitting}
                      sx={{
                        backgroundColor: '#673ab7',
                        '&:hover': { backgroundColor: '#512da8' },
                        fontWeight: 'bold',
                        height: '50px',
                      }}
                    >
                      {isSubmitting ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        <>
                          <Send sx={{ mr: 1 }} />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                  {/* Success or Error Messages */}
                  {submitted && (
                    <Alert severity="success" sx={{ mt: 2 }}>
                      Your message has been sent successfully!
                    </Alert>
                  )}
                  {error && (
                    <Alert severity="error" sx={{ mt: 2 }}>
                      {error}
                    </Alert>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card elevation={6} sx={{ p: 4, backgroundColor: '#ffffff', borderRadius: 4 }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 'bold', color: '#673ab7', mb: 3 }}
                  >
                    Contact Information
                  </Typography>
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: '#555',
                        mb: 2,
                      }}
                    >
                      <IconButton
                        sx={{
                          backgroundColor: '#f0f8ff',
                          color: '#673ab7',
                          '&:hover': { backgroundColor: '#e0e0e0' },
                        }}
                      >
                        {info.icon}
                      </IconButton>
                      <Box sx={{ ml: 2 }}>
                        <Typography variant="body2" sx={{ color: '#aaa' }}>
                          {info.label}
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>
                          {info.value}
                        </Typography>
                      </Box>
                    </motion.a>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Contact;