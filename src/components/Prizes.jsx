'use client';

import React from 'react';
import { Box, Typography, Stack, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { keyframes } from '@mui/system';

const prizeData = [
  {
    tier: '2nd Place',
    amount: 'KSh 100,000',
    emoji: '🥈',
    perks: ['🔄 Product Development', '👨‍🏫 Mentorship Program', '🌐 Industry Exposure'],
    highlightColor: '#00AEEF',
    height: 280,
  },
  {
    tier: '1st Place',
    amount: 'KSh 300,000',
    emoji: '🏆',
    perks: ['🚀 Investor Connections', '💼 Incubation Support', '🌱 GreenWells Mentorship'],
    highlightColor: '#7CD338',
    height: 340,
  },
  {
    tier: '3rd Place',
    amount: 'KSh 50,000',
    emoji: '🥉',
    perks: ['💻 Career Opportunities', '🎓 Advanced Training', '🤝 Networking Events'],
    highlightColor: '#EAB308',
    height: 240,
  },
];

/* ===== Futuristic animations ===== */
const float = keyframes`
  0% { transform: translateY(0px) }
  50% { transform: translateY(-14px) }
  100% { transform: translateY(0px) }
`;
const floatReverse = keyframes`
  0% { transform: translateY(0px) }
  50% { transform: translateY(14px) }
  100% { transform: translateY(0px) }
`;
const glowPulse = keyframes`
  0% { box-shadow: 0 0 0 rgba(0,174,239,0), 0 0 0 rgba(124,211,56,0) }
  50% { box-shadow: 0 0 26px rgba(0,174,239,0.25), 0 0 36px rgba(124,211,56,0.18) }
  100% { box-shadow: 0 0 0 rgba(0,174,239,0), 0 0 0 rgba(124,211,56,0) }
`;
const scanDown = keyframes`
  0% { transform: translateY(-100%) }
  100% { transform: translateY(100%) }
`;

export default function Prizes() {
  return (
    <Box
      id="prizes"
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        color: '#fff',
        overflow: 'hidden',
        textAlign: 'center',
        // Layered neon gradient + vignette
        background:
          `radial-gradient(1200px 700px at -10% -10%, rgba(0,174,239,0.18), transparent 60%),
           radial-gradient(1000px 650px at 110% 20%, rgba(124,211,56,0.14), transparent 60%),
           radial-gradient(circle at center, #0F172A 0%, #000000 100%)`,
        '&:before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage:
            `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
             linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          opacity: 0.25,
          pointerEvents: 'none',
        }
      }}
    >
      {/* Floating neon blobs */}
      <Box sx={{
        position: 'absolute', top: 0, left: '10%',
        width: 220, height: 220, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,211,56,0.45), transparent 60%)',
        filter: 'blur(22px)', animation: `${float} 7.5s ease-in-out infinite`, zIndex: 0
      }}/>
      <Box sx={{
        position: 'absolute', bottom: 0, right: '14%',
        width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,174,239,0.35), transparent 60%)',
        filter: 'blur(26px)', animation: `${floatReverse} 8.5s ease-in-out infinite`, zIndex: 0
      }}/>

      {/* Scanning spotlight columns */}
      <Box sx={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.25
      }}>
        <Box sx={{
          position: 'absolute', top: 0, left: '25%', width: 2, height: '100%',
          background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.5), transparent)',
          filter: 'blur(2px)', animation: `${scanDown} 6s linear infinite`
        }}/>
        <Box sx={{
          position: 'absolute', top: 0, left: '75%', width: 2, height: '100%',
          background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.5), transparent)',
          filter: 'blur(2px)', animation: `${scanDown} 7.5s linear infinite`, animationDelay: '1.2s'
        }}/>
      </Box>

      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          color: '#38BDF8',
          mb: 1,
          textShadow: '0 6px 30px rgba(0,0,0,0.25)'
        }}
      >
        Prizes & Recognition
      </Typography>
      <Box
        sx={{
          width: 64, height: 4, mx: 'auto', mb: 2,
          borderRadius: 4,
          background: 'linear-gradient(90deg, #00AEEF, #7CD338)',
          animation: `${glowPulse} 6s ease-in-out infinite`,
        }}
      />
      <Typography
        variant="subtitle1"
        sx={{ color: '#cbd5e1', maxWidth: 760, mx: 'auto', mb: 6 }}
      >
        Beyond cash rewards, winners receive trophies, certificates, and exclusive opportunities to collaborate with GreenWells Energies.
      </Typography>

      {/* Cards */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="center"
        alignItems={{ xs: 'stretch', md: 'end' }}
        spacing={{ xs: 3, md: 4 }}
        sx={{ position: 'relative', zIndex: 1, px: { xs: 2, md: 0 } }}
      >
        {prizeData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: index * 0.15 }}
          >
            <Paper
              elevation={6}
              component={motion.div}
              whileHover={{ y: -8, rotate: 0.25, boxShadow: '0 18px 40px rgba(0,0,0,0.25)' }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              sx={{
                width: 270,
                height: item.height,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4,
                p: 3,
                position: 'relative',
                overflow: 'hidden',
                color: '#fff',
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(6px)',
                boxShadow: `0 0 30px ${item.highlightColor}33`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: `0 0 44px ${item.highlightColor}AA`,
                },
                // glow accent
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  inset: -2,
                  background: `conic-gradient(from 0deg, ${item.highlightColor}, transparent 40%, ${item.highlightColor})`,
                  opacity: 0.08,
                },
                // soft vignette
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(120px 60px at 50% -10%, rgba(255,255,255,0.18), transparent 60%)',
                  pointerEvents: 'none'
                }
              }}
            >
              {/* Crown/spotlight for 1st */}
              {item.tier.startsWith('1st') && (
                <Box
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    top: -30,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 160,
                    height: 160,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(124,211,56,0.25), transparent 60%)',
                    filter: 'blur(18px)',
                    animation: `${float} 8s ease-in-out infinite`,
                  }}
                />
              )}

              <Box sx={{ fontSize: '2.6rem', mb: 1 }}>{item.emoji}</Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, letterSpacing: 0.3 }}>
                {item.tier}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: item.highlightColor,
                  fontWeight: 900,
                  mt: 0.5,
                  mb: 2,
                  letterSpacing: 0.4,
                  textShadow: `0 6px 24px ${item.highlightColor}55`,
                }}
              >
                {item.amount}
              </Typography>

              <Stack spacing={0.8} alignItems="center">
                {item.perks.map((perk, i) => (
                  <Typography key={i} variant="body2" sx={{ fontSize: '0.92rem', color: '#E5EEF6' }}>
                    {perk}
                  </Typography>
                ))}
              </Stack>
            </Paper>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
}
