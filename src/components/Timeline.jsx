'use client';

import { Box, Typography, Stack, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const timelineItems = [
  {
    date: 'August 1, 2025',
    title: 'Registration Opens',
    description: 'Early bird perks available',
  },
  {
    date: 'September 23, 2025',
    title: 'Hackathon Kickoff',
    description: '48-hour innovation sprint begins',
  },
  {
    date: 'November 29, 2025',
    title: 'Demo Day & Winners',
    description: 'Final presentations and award ceremony',
  },
];

export default function TimelineSection() {
  return (
    <Box id="timeline" sx={{ py: 12, background: 'linear-gradient(to right, #F0FDF4, #E0F7FA)' }}>
      <Box sx={{ px: { xs: 2, md: 4 }, maxWidth: '1400px', mx: 'auto' }}>
      <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 6,
            color: '#065f46',
            fontWeight: 700,
            '&::after': {
              content: '""',
              display: 'block',
              width: '5%',
              height: '4px',
              background: '#38bdf8',
              margin: '0 auto',
              borderRadius: 2,
              position: 'relative',
              top: '0.5rem',
            },
          }}
        >
          Timeline
        </Typography>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {timelineItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              style={{ flex: 1 }}
            >
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  backgroundColor: '#FFFFFF',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    backgroundColor: '#00AEEF',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    boxShadow: '0 4px 12px rgba(0, 174, 239, 0.4)',
                  }}
                >
                  {i + 1}
                </Box>

                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    color: '#7CD338',
                    mb: 0.5,
                    fontSize: '0.95rem',
                  }}
                >
                  {item.date}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: '#004B87',
                    mb: 1,
                    fontSize: '1.1rem',
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: '#374151',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                  }}
                >
                  {item.description}
                </Typography>
              </Paper>
            </motion.div>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
