'use client';

import React, { useState } from 'react';
import { Box, Typography, Stack, Paper, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { keyframes } from '@mui/system';

const timelineItems = [
  {
    date: 'July 2025',
    title: 'Launch & Recruitment',
    description:
      'Website setup, campaign launch, proposal submissions. Outreach to universities.',
    color: '#00AEEF',
  },
  {
    date: 'August 2025',
    title: 'Selection & Onboarding',
    description:
      'Proposal review, orientation webinar, team documentation, and welcome kits.',
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

/* ===== Neon/AI animations ===== */
const float = keyframes`
  0% { transform: translateY(0px) }
  50% { transform: translateY(-12px) }
  100% { transform: translateY(0px) }
`;
const pulse = keyframes`
  0% { box-shadow: 0 0 0px rgba(0,174,239,0.0) }
  50% { box-shadow: 0 0 24px rgba(0,174,239,0.35) }
  100% { box-shadow: 0 0 0px rgba(0,174,239,0.0) }
`;
const scan = keyframes`
  0% { transform: translateY(-100%) }
  100% { transform: translateY(100%) }
`;

export default function TimelineSection() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <Box
      id="timeline"
      sx={{
        position: 'relative',
        py: { xs: 10, md: 14 },
        overflow: 'hidden',
        // Futuristic layered background
        background:
          `radial-gradient(1100px 600px at -10% 10%, rgba(0,174,239,0.14), transparent 60%),
           radial-gradient(900px 500px at 110% 80%, rgba(124,211,56,0.12), transparent 60%),
           linear-gradient(135deg, #E6F9FF 0%, #F3FFE6 100%)`,
        // very subtle grid overlay
        '&:before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage:
            `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
             linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          opacity: 0.35,
          pointerEvents: 'none',
        },
      }}
    >
      {/* Floating blobs */}
      <Box sx={{
        position: 'absolute', top: 80, right: -40, width: 160, height: 160,
        borderRadius: '50%', filter: 'blur(24px)',
        background: 'radial-gradient(circle, rgba(124,211,56,0.55), rgba(124,211,56,0.06))',
        animation: `${float} 9s ease-in-out infinite`,
        zIndex: 0
      }}/>
      <Box sx={{
        position: 'absolute', bottom: 40, left: -40, width: 180, height: 180,
        borderRadius: '50%', filter: 'blur(24px)',
        background: 'radial-gradient(circle, rgba(0,174,239,0.55), rgba(0,174,239,0.06))',
        animation: `${float} 10s ease-in-out infinite`,
        animationDelay: '0.6s',
        zIndex: 0
      }}/>

      {/* Heading */}
      <Box sx={{ textAlign: 'center', mb: 8, position: 'relative', zIndex: 1 }}>
        <Typography variant="h4" fontWeight={800} color="#004B87" sx={{ textShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
          GreenWells Innovation Hackathon 2025 Timeline
        </Typography>
        <Box
          sx={{
            width: 64,
            height: 4,
            mx: 'auto',
            mt: 1.25,
            borderRadius: 4,
            background: 'linear-gradient(90deg, #00AEEF, #7CD338)',
            animation: `${pulse} 6s ease-in-out infinite`,
          }}
        />
      </Box>

      {/* Spine + scanning accent */}
      <Box
        sx={{
          position: 'relative',
          maxWidth: 1024,
          mx: 'auto',
          px: { xs: 1.5, md: 2 },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 4,
            height: '100%',
            borderRadius: 6,
            background: 'linear-gradient(180deg, #00AEEF, #7CD338)',
            boxShadow: '0 0 24px rgba(0,174,239,0.25)',
            zIndex: 0,
            overflow: 'hidden',
            // moving scan highlight
            '&:after': {
              content: '""',
              position: 'absolute',
              left: 0,
              right: 0,
              height: 100,
              background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.55), transparent)',
              filter: 'blur(6px)',
              animation: `${scan} 5.5s linear infinite`,
            }
          }}
        />

        <Stack spacing={{ xs: 5, md: 7 }} sx={{ position: 'relative', zIndex: 1 }}>
          {timelineItems.map((item, index) => {
            const isLeft = index % 2 === 0;
            const open = openIdx === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                style={{
                  display: 'flex',
                  justifyContent: isLeft ? 'flex-start' : 'flex-end',
                }}
              >
                <Box sx={{ position: 'relative', width: '100%', maxWidth: 480, px: { xs: 1, md: 2 } }}>
                  {/* Node with ripple glow */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 14,
                      [isLeft ? 'right' : 'left']: { xs: '-24px', md: '-34px' },
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      backgroundColor: item.color,
                      border: '3px solid #fff',
                      boxShadow: `0 0 0 8px rgba(255,255,255,0.65), 0 0 28px ${item.color}88`,
                      zIndex: 2,
                    }}
                  />
                  {/* Subtle connector triangle */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 24,
                      [isLeft ? 'right' : 'left']: { xs: '-10px', md: '-14px' },
                      width: 0,
                      height: 0,
                      borderTop: '8px solid transparent',
                      borderBottom: '8px solid transparent',
                      [isLeft ? 'borderRight' : 'borderLeft']: `12px solid ${'#ffffff'}`,
                      opacity: 0.9,
                      zIndex: 1
                    }}
                  />

                  {/* Card */}
                  <Paper
                    elevation={4}
                    component={motion.div}
                    whileHover={{ y: -6, boxShadow: '0 14px 34px rgba(0,0,0,0.12)' }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      background:
                        'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.82))',
                      border: '1px solid rgba(3,27,45,0.06)',
                      backdropFilter: 'blur(6px)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        background: `radial-gradient(300px 140px at ${isLeft ? '120%' : '-20%'} -40%, ${item.color}22, transparent 60%)`,
                        pointerEvents: 'none',
                      },
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ color: item.color, fontWeight: 700, letterSpacing: 0.3, mb: 0.5 }}>
                      {item.date}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#004B87', fontWeight: 800, mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#334155', lineHeight: 1.7 }}>
                      {item.description}
                    </Typography>

                    {/* Optional expand area for more details later */}
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Box sx={{ mt: 1.25, pt: 1.25, borderTop: '1px dashed rgba(3,27,45,0.12)' }}>
                            <Typography variant="body2" sx={{ color: '#0f172a' }}>
                              {/* Placeholder for deeper details, links, or tasks */}
                              More details, resources, and weekly checkpoints can be listed here.
                            </Typography>
                          </Box>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <Box sx={{ mt: 1.75 }}>
                      <Button
                        size="small"
                        onClick={() => setOpenIdx(open ? null : index)}
                        sx={{
                          textTransform: 'none',
                          fontWeight: 700,
                          color: '#004B87',
                          px: 1.25,
                          borderRadius: 2,
                          '&:hover': { backgroundColor: 'rgba(0,75,135,0.06)' },
                        }}
                      >
                        {/* {open ? 'Hide details' : 'Read more'} */}
                      </Button>
                    </Box>
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
