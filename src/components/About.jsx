'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import people from '../assets/hackathon.png'; // Make sure this path is correct

export default function About() {
  return (
    <Box id="about" sx={{ position: 'relative', pt: { xs: 10, md: 16 }, background: 'linear-gradient(135deg, #E6F9FF 0%, #F3FFE6 100%)', color: '#0F172A' }}>
      
      {/* Top Wave Divider */}
      {/* <Box
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
      </Box> */}

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
              GreenWells Innovation Hackathon 2025: Innovation for a Cleaner Tomorrow. Fueling Innovation
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                lineHeight: 1.75,
                color: '#0F172A',
              }}
            >
              GreenHack is a bold 5-month national innovation challenge powered by Green Wells Energies, crafted to unlock the ingenuity of Kenyan university students. 
              Our mission is to spark innovative thinking, nurture practical skills, and drive scalable solutions that address real-world challenges in the Oil and Gas sector, with a focus on sustainability, efficiency, and customer impact.
              <br /><br />
              Rooted in Green Wells Energies’ commitment to delivering quality, innovative energy solutions, this challenge empowers student innovators to reimagine how energy can be produced, distributed, and experienced in a cleaner and smarter way.
              Participants will engage with more than five key innovation themes, guided by industry mentors and supported through workshops, bootcamps, and project sprints.
              <br /><br />
              From streamlining logistics and enhancing consumer experiences to creating youth-centric platforms and automating workflows, GreenHack invites the next generation of changemakers to take the lead in shaping a resilient and future-ready energy ecosystem.
              More than a competition, this is a launchpad for tech-driven, sustainable impact and a movement toward Africa’s energy transformation.
            </Typography>

          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
