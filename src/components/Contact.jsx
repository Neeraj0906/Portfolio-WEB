import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, TextField, Button, Grid, Card, CardContent, Typography, IconButton, CircularProgress } from '@mui/material';
import { Mail, Phone, GitHub, LinkedIn, Send } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: <Mail />, label: 'Email', value: 'eng20cs0301.neeraj@gmail.com', link: 'mailto:eng20cs0301.neeraj@gmail.com' },
    { icon: <Phone />, label: 'Phone', value: '6382561931', link: 'tel:6382561931' },
    { icon: <LinkedIn />, label: 'LinkedIn', value: 'Neeraj Subramani', link: 'https://www.linkedin.com/in/neeraj-s-a06151203' },
    { icon: <GitHub />, label: 'GitHub', value: 'Neeraj0906', link: 'https://github.com/Neeraj0906' },
  ];

  return (
    <Container style={{marginLeft:"120px"}} className="py-3">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-4">
        <Typography variant="h3" className="fw-bold text-primary">Get in Touch</Typography>
      </motion.div>

      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card elevation={5} className="p-4">
              <CardContent>
                <Typography variant="h5" className="mb-3">Send Me a Message</Typography>
                <form onSubmit={handleSubmit}>
                  <TextField fullWidth label="Your Name" name="name" value={formData.name} onChange={handleChange} margin="normal" required />
                  <TextField fullWidth label="Your Email" name="email" type="email" value={formData.email} onChange={handleChange} margin="normal" required />
                  <TextField fullWidth label="Your Message" name="message" multiline rows={4} value={formData.message} onChange={handleChange} margin="normal" required />
                  <Button type="submit" variant="contained" color="primary" fullWidth className="mt-3" disabled={isSubmitting}>
                    {isSubmitting ? <CircularProgress size={24} color="inherit" /> : <><Send /> Send Message</>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={6}>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <Card elevation={5} className="p-4">
              <CardContent>
                <Typography variant="h5" className="mb-3">Contact Information</Typography>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center mb-3 text-decoration-none text-dark"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <IconButton color="primary" className="me-2">{info.icon}</IconButton>
                    <div>
                      <Typography variant="body2" color="textSecondary">{info.label}</Typography>
                      <Typography variant="body1" className="fw-bold">{info.value}</Typography>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
