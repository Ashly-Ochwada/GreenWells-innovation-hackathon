'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import people from '../assets/hackathon.png'; // Make sure this path is correct

export default function About() {
  return (
    <Box id="about" sx={{ position: 'relative', pt: { xs: 10, md: 16 }, background: 'linear-gradient(135deg, #E6F9FF 0%, #F3FFE6 100%)', color: '#0F172A' }}>
      
      {/* Top Wave Divider */}
      <Box
        component="svg"
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '80px',
          transform: 'translateY(-100%)',
          zIndex: 1,
        }}
      >
        <path fill="#FFFFFF" d="M0,64L1440,0L1440,320L0,320Z"></path>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 6,
          }}
        >
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
          >
            <Box
              sx={{
                borderRadius: '50%',
                overflow: 'hidden',
                width: { xs: 280, md: 400 },
                height: { xs: 280, md: 400 },
                boxShadow: '0 0 60px rgba(0, 174, 239, 0.2)',
                border: '4px solid #7CD338',
                backgroundColor: '#fff',
              }}
            >
              <img
                src={people}
                alt="Team collaboration"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ flex: 1 }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 1,
                color: '#004B87',
                position: 'relative',
              }}
            >
              Who We Are
              <Box
                component="span"
                sx={{
                  display: 'block',
                  width: 60,
                  height: 3,
                  backgroundColor: '#00AEEF',
                  mt: 1,
                }}
              />
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 500,
                mb: 3,
                color: '#00AEEF',
              }}
            >
              GreenHack 2025: Innovation for a Cleaner Tomorrow
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                lineHeight: 1.75,
                color: '#0F172A',
              }}
            >
              GreenHack is a dynamic 5-month national innovation challenge designed to ignite the creative potential of Kenyan university students. 
              Our mission is to inspire, educate, and equip young innovators to tackle real-world challenges in the Liquefied Petroleum Gas (LPG) sector through scalable and eco-conscious solutions.
              <br /><br />
              Hosted by GreenWells Energies, this challenge serves as a platform for forward-thinking individuals to gain hands-on experience in sustainable product development, clean energy innovation, and environmental stewardship. 
              Participants are guided by expert mentors and exposed to industry-driven workshops, ideation bootcamps, and team-based project development sprints.
              <br /><br />
              Through GreenHack, students not only compete for cash prizes and career-defining exposure but also become part of a growing ecosystem of changemakers committed to a greener future.
              This is more than a competition, it’s a movement that nurtures the next generation of tech-driven climate leaders.
            </Typography>

          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
