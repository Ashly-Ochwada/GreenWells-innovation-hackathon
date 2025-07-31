'use client';

import React from 'react';
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Container,
  Divider,
} from '@mui/material';
import { LinkedIn, Twitter, Instagram, YouTube } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <Box
  sx={{
    bgcolor: '#004B87',
    color: 'white',
    py: 3, // reduced from 6 to tighten height
    mt: 0,
  }}
>
  <Container maxWidth="lg">
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      justifyContent="space-between"
      alignItems={{ xs: 'flex-start', md: 'center' }}
      spacing={2} // reduced from 4
    >
      {/* Branding */}
      <Stack direction="row" spacing={2} alignItems="center">
        <Box sx={{ width: { xs: 100, md: 120 }, height: 'auto' }}>
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
        <Typography variant="body2" sx={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
          Powering a greener future through innovation.
        </Typography>
      </Stack>

      {/* Navigation */}
      <Stack direction="row" spacing={3} flexWrap="wrap">
        {['About', 'Timeline', 'Prizes', 'FAQ'].map((item) => (
          <Typography
            key={item}
            component="a"
            href={`#${item.toLowerCase()}`}
            sx={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '0.85rem',
              '&:hover': {
                textDecoration: 'underline',
                color: '#7CD338',
              },
            }}
          >
            {item}
          </Typography>
        ))}
      </Stack>

      {/* Contact Info */}
      <Stack spacing={0.5}>
        <Stack direction="row" spacing={1} alignItems="center">
          <EmailIcon sx={{ fontSize: 18, color: '#00AEEF' }} />
          <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
            greenwellsinnovation@gmail.com
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <PhoneIcon sx={{ fontSize: 18, color: '#00AEEF' }} />
          <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
            +254706527126 || +254114660199 
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <LocationOnIcon sx={{ fontSize: 18, color: '#00AEEF' }} />
          <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
            Nairobi, Kenya
          </Typography>
        </Stack>
      </Stack>
    </Stack>

    {/* Social Icons */}
    <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
      <IconButton component="a" href="https://linkedin.com" target="_blank" rel="noopener" sx={{ color: 'white', '&:hover': { color: '#00AEEF' } }}>
        <LinkedIn />
      </IconButton>
      <IconButton component="a" href="https://twitter.com" target="_blank" rel="noopener" sx={{ color: 'white', '&:hover': { color: '#00AEEF' } }}>
        <Twitter />
      </IconButton>
      <IconButton component="a" href="https://instagram.com" target="_blank" rel="noopener" sx={{ color: 'white', '&:hover': { color: '#7CD338' } }}>
        <Instagram />
      </IconButton>
      <IconButton component="a" href="https://youtube.com" target="_blank" rel="noopener" sx={{ color: 'white', '&:hover': { color: '#EF4444' } }}>
        <YouTube />
      </IconButton>
    </Stack>

    <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.2)' }} />

    <Typography
      variant="body2"
      align="center"
      sx={{ color: '#cbd5e1', fontSize: '0.75rem' }}
    >
      © {new Date().getFullYear()} GreenWells Innovation Hackathon. All rights reserved.
    </Typography>
  </Container>
</Box>

  );
}
