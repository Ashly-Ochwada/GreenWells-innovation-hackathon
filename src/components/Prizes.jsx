'use client';

import { Box, Typography, Stack, Paper } from '@mui/material';
import { motion } from 'framer-motion';

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
    perks: ['🚀 Investor Connections', '💼 Incubation Support', '🌱 Greenwell Mentorship'],
    highlightColor: '#7CD338',
    height: 340,
  },
  {
    tier: '3rd Place',
    amount: 'KSh 50,000',
    emoji: '🥉',
    perks: ['💻 Career Opportunities', '🎓 Advanced Training', '🤝 Networking Events'],
    highlightColor: '#eab308',
    height: 240,
  },
];

export default function Prizes() {
  return (
    <Box
      id="prizes"
      sx={{
        py: 12,
        position: 'relative',
        background: 'radial-gradient(circle at center, #0f172a 0%, #000000 100%)',
        color: '#fff',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Floating Lights */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '10%',
          width: 200,
          height: 200,
          background: 'radial-gradient(circle, rgba(124, 211, 56, 0.4), transparent)',
          borderRadius: '50%',
          animation: 'float1 6s ease-in-out infinite',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: '15%',
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(0, 174, 239, 0.3), transparent)',
          borderRadius: '50%',
          animation: 'float2 7s ease-in-out infinite',
          zIndex: 0,
        }}
      />

      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: '#38bdf8',
          mb: 2,
        }}
      >
        Prizes & Recognition
      </Typography>

      <Typography variant="subtitle1" sx={{ color: '#cbd5e1', maxWidth: 700, mx: 'auto', mb: 6 }}>
        In addition to cash rewards, winners will receive trophies, certificates, and exclusive opportunities to collaborate with Green Wells Energy.
      </Typography>

      {/* Cards */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="end"
        spacing={4}
        sx={{ position: 'relative', zIndex: 1 }}
      >
        {prizeData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Paper
              elevation={6}
              sx={{
                width: 260,
                height: item.height,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 4,
                p: 3,
                background: 'linear-gradient(145deg, #1e293b, #111827)',
                boxShadow: `0 0 30px ${item.highlightColor}33`,
                color: '#fff',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: `0 0 40px ${item.highlightColor}AA`,
                },
              }}
            >
              <Box sx={{ fontSize: '2.5rem', mb: 1 }}>{item.emoji}</Box>
              <Typography variant="subtitle1" fontWeight={700}>{item.tier}</Typography>
              <Typography variant="h6" sx={{ color: item.highlightColor, fontWeight: 800, mt: 0.5, mb: 2 }}>{item.amount}</Typography>
              <Stack spacing={0.8} alignItems="center">
                {item.perks.map((perk, i) => (
                  <Typography key={i} variant="body2" sx={{ fontSize: '0.9rem' }}>{perk}</Typography>
                ))}
              </Stack>
            </Paper>
          </motion.div>
        ))}
      </Stack>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
      `}</style>
    </Box>
  );
}
