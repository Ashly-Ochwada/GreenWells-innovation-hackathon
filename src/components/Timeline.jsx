'use client';

import { Box, Typography, Stack, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const timelineItems = [
  {
    date: 'July 2025',
    title: 'Launch & Recruitment',
    description:
      'Website setup, campaign launch, proposal submissions. Outreach to universities. Proposal deadline: Aug 13.',
    color: '#00AEEF',
  },
  {
    date: 'August 2025',
    title: 'Selection & Onboarding',
    description:
      'Proposal review, finalist selection, orientation webinar, team documentation and welcome kits.',
    color: '#7CD338',
  },
  {
    date: 'September 2025',
    title: 'Capacity Building',
    description:
      'Training on LPG, business modeling, innovation, pitching. Mentor assignment and weekly tracking.',
    color: '#004B87',
  },
  {
    date: 'October 2025',
    title: 'Project Development',
    description:
      'Teams develop MVPs, test usability, prepare pitches, and submit mid-review video + validation summary.',
    color: '#FACC15',
  },
  {
    date: 'November 2025',
    title: 'Final Pitch & Awards',
    description:
      'National showcase, judges scoring, top 3 prizes awarded. Media rollout and partnership exploration.',
    color: '#EF4444',
  },
  {
    date: 'December 2025',
    title: 'Post-Event Wrap-Up',
    description:
      'Incubation offers to winners. Internal debriefs, case study reports, and scale planning for 2026.',
    color: '#00AEEF',
  },
];

export default function TimelineSection() {
  return (
    <Box
      id="timeline"
      sx={{
        py: 12,
        background: '#F0FDF4',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h4" fontWeight={700} color="#004B87">
          GreenWells Innovation Hackathon 2025 Timeline
        </Typography>
        <Box
          sx={{
            width: '60px',
            height: '4px',
            backgroundColor: '#00AEEF',
            margin: '12px auto 0',
            borderRadius: 4,
          }}
        />
      </Box>

      <Box
        sx={{
          position: 'relative',
          maxWidth: 900,
          mx: 'auto',
          px: 2,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '4px',
            height: '100%',
            backgroundColor: '#00AEEF',
            zIndex: 0,
          },
        }}
      >
        <Stack spacing={6}>
          {timelineItems.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{
                  display: 'flex',
                  justifyContent: isLeft ? 'flex-start' : 'flex-end',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: 420,
                    px: 1,
                  }}
                >
                  {/* Circle number */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '10px',
                      [isLeft ? 'right' : 'left']: '-38px',
                      zIndex: 2,
                      backgroundColor: item.color,
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '3px solid white',
                      boxShadow: '0 0 0 4px #F0FDF4',
                    }}
                  >
                    {index + 1}
                  </Box>

                  {/* Card with hover */}
                  <Paper
                    elevation={4}
                    sx={{
                      p: 3,
                      borderLeft: isLeft ? '6px solid #004B87' : 'none',
                      borderRight: !isLeft ? '6px solid #004B87' : 'none',
                      backgroundColor: '#ffffff',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: `0 0 12px ${item.color}80`,
                      },
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ color: item.color, fontWeight: 600, mb: 0.5 }}
                    >
                      {item.date}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: '#004B87', fontWeight: 700, mb: 1 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: '#374151', lineHeight: 1.6 }}
                    >
                      {item.description}
                    </Typography>
                  </Paper>
                </Box>
              </motion.div>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}
