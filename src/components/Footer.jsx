'use client';

import React from 'react';
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Container,
  Divider
} from '@mui/material';
import { LinkedIn, Twitter, Instagram, YouTube } from '@mui/icons-material';
// import Image from 'next/image';
import logo from '../assets/logo.png'; // ✅ Replace with actual path if needed

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: '#004B87', // Navy Blue (Background)
        color: 'white',
        py: 6,
        mt: 0,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
          spacing={4}
        >
          {/* Branding with Logo */}
          <Stack direction="row" spacing={2} alignItems="center">
          <Box
            sx={{
              width: { xs: 100, md: 120 },
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src={logo}
              alt="GreenWells Logo"
              style={{
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </Box>

            <Box>
           
              <Typography variant="body2" sx={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                Powering a greener future through innovation.
              </Typography>
            </Box>
          </Stack>

          {/* Navigation */}
          <Stack direction="row" spacing={4} flexWrap="wrap">
            {['About', 'Timeline', 'Prizes', 'FAQ'].map((item) => (
              <Typography
                key={item}
                component="a"
                href={`#${item.toLowerCase()}`}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  '&:hover': {
                    textDecoration: 'underline',
                    color: '#7CD338', // Green Wells Green
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>

          {/* Social Icons */}
          <Stack direction="row" spacing={2}>
            <IconButton
              component="a"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener"
              sx={{ color: 'white', '&:hover': { color: '#00AEEF' } }} // Ocean Blue
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              component="a"
              href="https://twitter.com"
              target="_blank"
              rel="noopener"
              sx={{ color: 'white', '&:hover': { color: '#00AEEF' } }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              component="a"
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              sx={{ color: 'white', '&:hover': { color: '#7CD338' } }} // Green Wells Green
            >
              <Instagram />
            </IconButton>
            <IconButton
              component="a"
              href="https://youtube.com"
              target="_blank"
              rel="noopener"
              sx={{ color: 'white', '&:hover': { color: '#EF4444' } }}
            >
              <YouTube />
            </IconButton>
          </Stack>
        </Stack>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />

        <Typography
          variant="body2"
          align="center"
          sx={{ color: '#cbd5e1', fontSize: '0.8rem'}}
        >
          © {new Date().getFullYear()} GreenWells Innovation Hackathon. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
