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

export default function WhyParticipate() {
  return (
    <Box
      id="participate"
      sx={{
        py: 14,
        background: 'radial-gradient(circle at 50% 10%, #0f172a, #000000)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Floating Stars/Shapes Animation */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          backgroundImage: `radial-gradient(#7CD33822 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
          animation: 'float 10s infinite linear',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 6,
            fontWeight: 700,
            color: '#FFFFFF',
            fontFamily: 'cursive',
            '&::after': {
              content: '""',
              display: 'block',
              width: '60px',
              height: '4px',
              backgroundColor: '#7CD338',
              margin: '0.5rem auto 0',
              borderRadius: 2,
            },
          }}
        >
          Why You Should{' '}
          <Box component="span" sx={{ color: '#7CD338' }}>
            Participate
          </Box>{' '}
          in GreenHack
        </Typography>

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
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ flex: 1 }}
            >
              <Paper
                elevation={8}
                sx={{
                  p: 4,
                  height: '100%',
                  backgroundColor: item.bg,
                  border: `2px solid ${item.color}`,
                  borderRadius: 6,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: `0 12px 32px ${item.color}55`,
                  },
                }}
              >
                <Stack spacing={2} alignItems="center">
                  <Box
                    sx={{
                      bgcolor: item.color,
                      color: 'white',
                      p: 1.5,
                      borderRadius: '50%',
                      display: 'inline-flex',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#FFFFFF',
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#CBD5E1',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      textAlign: 'center'
                    }}
                  >
                    {item.description}
                  </Typography>
                </Stack>
              </Paper>
            </motion.div>
          ))}
        </Stack>
      </Container>

      <style jsx global>{`
        @keyframes float {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }
      `}</style>
    </Box>
  );
}