'use client';

import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Container,
  Stack
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
    color: '#00AEEF', // Ocean Blue
    bg: '#E0F7FB',
  },
  {
    title: 'Mentorship',
    description:
      'Learn from experienced mentors and industry leaders who will guide you throughout your innovation journey.',
    icon: <SchoolIcon fontSize="large" />,
    color: '#7CD338', // Green Wells Green
    bg: '#F3FFE6',
  },
  {
    title: 'Community',
    description:
      'Be part of a vibrant, eco-conscious student community and build long-lasting relationships.',
    icon: <Diversity3Icon fontSize="large" />,
    color: '#004B87', // Navy Blue
    bg: '#E6F2FB',
  }
];

export default function WhyParticipate() {
  return (
    <Box
      id="participate"
      sx={{
        py: 12,
        background: '#004B87', // Navy Blue
        color: '#FFFFFF',
        clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0% 95%)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 6,
            fontWeight: 700,
            color: '#FFFFFF',
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
                elevation={5}
                sx={{
                  p: 4,
                  height: '100%',
                  backgroundColor: item.bg,
                  borderRadius: 4,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
                  },
                }}
              >
                <Stack spacing={2} alignItems="flex-start">
                  {/* Icon Bubble */}
                  <Box
                    sx={{
                      bgcolor: item.color,
                      color: 'white',
                      p: 1.5,
                      borderRadius: '50%',
                      display: 'inline-flex',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#000000',
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#374151',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
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
    </Box>
  );
}
