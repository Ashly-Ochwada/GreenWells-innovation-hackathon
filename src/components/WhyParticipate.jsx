'use client';

import React from 'react';
import {
  Box,
  Typography,
  Container,
  Stack,
  Paper
} from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SchoolIcon from '@mui/icons-material/School';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { motion } from 'framer-motion';
import { keyframes } from '@mui/system';

const features = [
  {
    title: 'Challenge',
    description:
      'Test your creativity and problem-solving skills by addressing real-world sustainability issues in the LPG sector.',
    icon: <EmojiObjectsIcon fontSize="large" />,
    color: '#00AEEF',
    bg: '#001F3F',
  },
  {
    title: 'Mentorship',
    description:
      'Learn from experienced mentors and industry leaders who will guide you throughout your innovation journey.',
    icon: <SchoolIcon fontSize="large" />,
    color: '#7CD338',
    bg: '#001A33',
  },
  {
    title: 'Community',
    description:
      'Be part of a vibrant, eco-conscious student community and build long-lasting relationships.',
    icon: <Diversity3Icon fontSize="large" />,
    color: '#004B87',
    bg: '#001326',
  },
];

/* ===== Futuristic animations (MUI keyframes) ===== */
const panGrid = keyframes`
  0% { background-position: 0 0, 0 0; }
  100% { background-position: 120px 120px, 120px 120px; }
`;
const float = keyframes`
  0% { transform: translateY(0px) }
  50% { transform: translateY(-12px) }
  100% { transform: translateY(0px) }
`;
const orbit = keyframes`
  0% { transform: rotate(0deg) translateX(18px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(18px) rotate(-360deg); }
`;
const glowPulse = keyframes`
  0% { box-shadow: 0 0 0 rgba(0,174,239,0), 0 0 0 rgba(124,211,56,0) }
  50% { box-shadow: 0 0 24px rgba(0,174,239,0.25), 0 0 36px rgba(124,211,56,0.18) }
  100% { box-shadow: 0 0 0 rgba(0,174,239,0), 0 0 0 rgba(124,211,56,0) }
`;

export default function WhyParticipate() {
  return (
    <Box
      id="participate"
      sx={{
        py: 14,
        position: 'relative',
        overflow: 'hidden',
        color: '#FFFFFF',
        // Layered neon background + subtle vignette
        background:
          `radial-gradient(1200px 700px at -10% -10%, rgba(0,174,239,0.18), transparent 60%),
           radial-gradient(1000px 650px at 110% 20%, rgba(124,211,56,0.16), transparent 60%),
           radial-gradient(circle at 50% 10%, #0f172a 0%, #000000 100%)`,
        // Neon grid overlay with pan animation
        '&:before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage:
            `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
             linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: '30px 30px, 30px 30px',
          opacity: 0.25,
          pointerEvents: 'none',
          animation: `${panGrid} 18s linear infinite`,
        },
      }}
    >
      {/* Floating blobs */}
      <Box sx={{
        position: 'absolute', top: 0, left: '8%',
        width: 200, height: 200, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,211,56,0.45), transparent 60%)',
        filter: 'blur(22px)', animation: `${float} 8s ease-in-out infinite`, zIndex: 0
      }}/>
      <Box sx={{
        position: 'absolute', bottom: 0, right: '12%',
        width: 260, height: 260, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,174,239,0.35), transparent 60%)',
        filter: 'blur(24px)', animation: `${float} 9s ease-in-out infinite`, animationDelay: '0.6s', zIndex: 0
      }}/>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Heading */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 6,
            fontWeight: 800,
            color: '#FFFFFF',
            textShadow: '0 6px 24px rgba(0,0,0,0.35)',
          }}
        >
          Why You Should{' '}
          <Box
            component="span"
            sx={{
              background: 'linear-gradient(90deg, #00AEEF, #7CD338)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 900,
            }}
          >
            Participate
          </Box>{' '}
          in GreenHack
        </Typography>
        <Box
          sx={{
            width: 64, height: 4, mx: 'auto', mb: 4,
            borderRadius: 4,
            background: 'linear-gradient(90deg, #00AEEF, #7CD338)',
            animation: `${glowPulse} 6s ease-in-out infinite`,
          }}
        />

        {/* Feature Cards */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.18 }}
              style={{ flex: 1 }}
            >
              <Paper
                elevation={8}
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                  border: `1px solid ${item.color}55`,
                  boxShadow: `0 10px 30px ${item.color}26`,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  backdropFilter: 'blur(6px)',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: `0 16px 40px ${item.color}66`,
                  },
                  // soft conic glow
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    inset: -2,
                    background: `conic-gradient(from 0deg, ${item.color}, transparent 40%, ${item.color})`,
                    opacity: 0.08,
                    pointerEvents: 'none',
                  },
                }}
              >
                {/* Icon badge with orbiting particle */}
                <Box sx={{ position: 'relative', display: 'inline-flex', mb: 2 }}>
                  <Box
                    sx={{
                      bgcolor: item.color,
                      color: 'white',
                      p: 1.5,
                      borderRadius: '50%',
                      display: 'inline-flex',
                      boxShadow: '0 8px 22px rgba(0,0,0,0.25)',
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box
                    aria-hidden
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#fff',
                      filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.65))',
                      transformOrigin: 'center -18px',
                      animation: `${orbit} 6s linear infinite`,
                    }}
                  />
                </Box>

                <Typography
                  variant="h6"
                  sx={{ fontWeight: 800, color: '#FFFFFF', mb: 1 }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: '#CBD5E1',
                    fontSize: '0.98rem',
                    lineHeight: 1.65,
                    textAlign: 'center',
                  }}
                >
                  {item.description}
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
