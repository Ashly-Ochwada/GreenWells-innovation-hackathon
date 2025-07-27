'use client';

import { Box, Typography, Stack, Paper, Divider } from '@mui/material';
import { motion } from 'framer-motion';

const prizeData = [
  {
    tier: '1st Place',
    amount: 'KSh 300,000',
    emoji: '🏆',
    perks: ['💼 Incubation Support', '🚀 Investor Connections', '🌱 Greenwell Mentorship'],
    highlightColor: '#7CD338', // Green Wells Green
    bubbleBg: '#ecfccb',
  },
  {
    tier: '2nd Place',
    amount: 'KSh 100,000',
    emoji: '🥈',
    perks: ['👨‍🏫 Mentorship Program', '🔄 Product Development', '🌐 Industry Exposure'],
    highlightColor: '#00AEEF', // Ocean Blue
    bubbleBg: '#cffafe',
  },
  {
    tier: '3rd Place',
    amount: 'KSh 50,000',
    emoji: '🥉',
    perks: ['💻 Career Opportunities', '🎓 Advanced Training', '🤝 Networking Events'],
    highlightColor: '#eab308',
    bubbleBg: '#fef9c3',
  },
];

export default function Prizes() {
  return (
    <Box id="prizes" sx={{ py: 12, background: 'linear-gradient(to right, #f0fdf4, #ecfdf5)' }}>
      <Box sx={{ px: { xs: 2, md: 4 }, maxWidth: '1400px', mx: 'auto' }}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 6,
            color: '#004B87', // Navy Blue
            fontWeight: 700,
            position: 'relative',
            '&::after': {
              content: '""',
              display: 'block',
              width: '60px',
              height: '4px',
              backgroundColor: '#00AEEF',
              margin: '0 auto',
              mt: 1,
              borderRadius: 2,
            },
          }}
        >
          Prizes
        </Typography>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          justifyContent="space-between"
          alignItems="stretch"
        >
          {prizeData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ flex: 1 }}
            >
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  backgroundColor: '#FFFFFF',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: `0 10px 24px rgba(0, 0, 0, 0.15)`,
                  },
                }}
              >
                {/* Emoji Bubble */}
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    backgroundColor: item.bubbleBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  {item.emoji}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: '#004B87',
                  }}
                >
                  {item.tier}
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{
                    color: item.highlightColor,
                    fontWeight: 600,
                    mb: 2,
                    fontSize: '1.1rem',
                  }}
                >
                  {item.amount}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Stack spacing={1} alignItems="center">
                  {item.perks.map((perk, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      sx={{
                        color: '#374151',
                        fontSize: '0.95rem',
                      }}
                    >
                      {perk}
                    </Typography>
                  ))}
                </Stack>
              </Paper>
            </motion.div>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
