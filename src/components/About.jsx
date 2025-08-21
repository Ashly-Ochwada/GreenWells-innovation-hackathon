
'use client';

import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { keyframes } from '@mui/system';

// If you're on Next.js and prefer <Image/>, you can switch the <img> tags below.
import dashImg from '../assets/oil-dashboard.jpg';
import energyImg from '../assets/energy-flow.jpg';

/* ===== Animations ===== */
const float = keyframes`
  0% { transform: translateY(0px) }
  50% { transform: translateY(-10px) }
  100% { transform: translateY(0px) }
`;

const scan = keyframes`
  0% { transform: translateY(-100%) }
  100% { transform: translateY(100%) }
`;

// (These were referenced but missing in your new block)
const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const caret = keyframes`
  0%, 100% { border-color: transparent }
  50% { border-color: #00AEEF }
`;

const subtitle = 'GreenHack 2025: AI × Sustainability × Impact';
const steps = subtitle.length; // ~44


export default function About() {
  return (
    <Box
      id="about"
      sx={{
        position: 'relative',
        py: { xs: 10, md: 14 },
        color: 'rgba(255,255,255,0.92)',
        overflow: 'hidden',
        background: `
          radial-gradient(1200px 700px at -10% -10%, rgba(0,174,239,0.18), transparent 60%),
          radial-gradient(1000px 650px at 110% 20%, rgba(124,211,56,0.16), transparent 60%),
          linear-gradient(135deg, #07131E 0%, #0A1422 55%, #050B12 100%)
        `,
        '&:before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
          opacity: 0.25,
          pointerEvents: 'none',
        },
      }}
    >
      {/* subtle scanning column */}
      <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.25 }}>
        <Box
          sx={{
            position: 'absolute',
            left: { xs: '10%', md: '35%' },
            top: 0,
            width: 2,
            height: '100%',
            background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.5), transparent)',
            filter: 'blur(2px)',
            animation: `${scan} 7s linear infinite`,
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 6, md: 10 }}
          alignItems="center"
        >
          {/* LEFT — circular visuals + labels */}
          <Box sx={{ flex: 1, position: 'relative', width: '100%' }}>
            {/* Big circular “dashboard” */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              sx={{
                width: { xs: 260, md: 360 },
                height: { xs: 260, md: 360 },
                borderRadius: '50%',
                overflow: 'hidden',
                mx: { xs: 'auto', md: 0 },
                position: 'relative',
                boxShadow: '0 0 40px rgba(0,174,239,0.25)',
                outline: '3px solid rgba(124,211,56,0.8)',
                outlineOffset: '0px',
                animation: `${float} 8s ease-in-out infinite`,
              }}
            >
              <img
                src={dashImg}
                alt="Instrumentation dashboard"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08)',
                }}
              />
            </Box>

            {/* Label callouts */}
            <Box
              sx={{
                position: 'relative',
                mt: 2,
                width: { xs: '100%', md: 360 },
                mx: { xs: 'auto', md: 0 },
              }}
            >
              {/* INSTRUMENTATION / DASHBOARDS */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -300,
                  left: { xs: '52%', md: '100%' },
                  transform: 'translateX(12px)',
                }}
              >
                <Typography sx={{ fontSize: 12, letterSpacing: 1.6, color: '#D6E9F8' }}>
                  CREATIVITY / INNOVATION
                </Typography>
                <Box sx={{ mt: 0.5, width: 60, height: 1, bgcolor: 'rgba(214,233,248,0.6)' }} />
              </Box>

              {/* DARK MODE (fake toggle) */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -140,
                  left: { xs: '52%', md: '100%' },
                  transform: 'translateX(12px)',
                }}
              >
                <Typography sx={{ fontSize: 12, letterSpacing: 1.6, color: '#D6E9F8', mb: 0.5 }}>
                  Eco-Friendly
                </Typography>
                <Box
                  sx={{
                    width: 40,
                    height: 20,
                    borderRadius: 999,
                    background: 'linear-gradient(90deg, #0B1A28, #0E2336)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 2,
                      right: 2,
                      width: 16,
                      height: 16,
                      borderRadius: '50%',
                      background: '#7CD338',
                      boxShadow: '0 0 10px rgba(124,211,56,0.8)',
                    }}
                  />
                </Box>
              </Box>

              {/* Small energy circle */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                sx={{
                  position: 'absolute',
                  bottom: -40,
                  left: { xs: '10%', md: -40 },
                  width: 130,
                  height: 130,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  outline: '3px solid rgba(0,174,239,0.8)',
                  boxShadow: '0 0 30px rgba(0,174,239,0.25)',
                }}
              >
                <img
                  src={energyImg}
                  alt="Energy flow"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              {/* ENERGY MOVEMENT label */}
              <Box sx={{ position: 'absolute', bottom: -60, left: { xs: '46%', md: 120 } }}>
                <Typography sx={{ fontSize: 12, letterSpacing: 1.6, color: '#D6E9F8' }}>
                  ENERGY MOVEMENT
                </Typography>
                <Box sx={{ mt: 0.5, width: 60, height: 1, bgcolor: 'rgba(214,233,248,0.6)' }} />
              </Box>
            </Box>
          </Box>

          {/* RIGHT — text block (wrapped in motion.div; previously missing) */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            sx={{ flex: 1, width: '100%' }}
          >
            {/* Typewriter subtitle */}

            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 1.5,
                py: 0.5,
                mb: 1.5,
                borderRadius: '999px',
                fontSize: 12,
                letterSpacing: 0.4,
                color: '#EAF9FF', // light text for contrast
                background:
                  'linear-gradient(90deg, rgba(0,174,239,0.12), rgba(124,211,56,0.12))',
                border: '1px solid rgba(255,255,255,0.25)', // softer subtle border
                boxShadow: '0 0 12px rgba(255,255,255,0.15)', // gentle glow
                fontWeight: 500,
              }}
            >
              ◦ AI-Powered Innovation ◦ Future-Ready
            </Box>

            <Box sx={{ position: 'relative', mb: 3, width: 'fit-content' }}>
              <Typography
                component="div"
                sx={{
                  fontWeight: 600,
                  color: '#00AEEF',
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  borderRight: '2px solid #00AEEF',
                  display: 'inline-block',                 // needed for width animation
                  width: `${steps + 1}ch`,                 // small buffer for proportional font
                  animation: `${typing} 3.8s steps(${steps}, end) 0.2s 1 both, ${caret} .8s step-end infinite`,
                }}
              >
                {subtitle}
              </Typography>
            </Box>


            <Typography
              variant="h4"
              sx={{ fontWeight: 700, mb: 1, background: 'linear-gradient(90deg, #00AEEF, #7CD338)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', position: 'relative' }}
            >
              Who We Are
              <Box
                component="span"
                sx={{
                  display: 'block',
                  width: 60,
                  height: 3,
                  backgroundColor: '#00AEEF',
                  mt: 1,
                }}
              />
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.92)',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 2,
                p: 2,
                boxShadow: '0 10px 30px rgba(3,27,45,0.25)',
              }}
            >
              GreenHack is a bold 5-month national innovation challenge powered by Green Wells
              Energies, crafted to unlock the ingenuity of Kenyan university students. Our mission
              is to spark innovative thinking, nurture practical skills, and drive scalable
              solutions that address real-world challenges in the Oil and Gas sector, with a focus
              on sustainability, efficiency, and customer impact.
              <br />
              <br />
              Rooted in Green Wells Energies’ commitment to delivering quality, innovative energy
              solutions, this challenge empowers student innovators to reimagine how energy can be
              produced, distributed, and experienced in a cleaner and smarter way. Participants will
              engage with more than five key innovation themes, guided by industry mentors and
              supported through workshops, bootcamps, and project sprints.
              <br />
              <br />
              From streamlining logistics and enhancing consumer experiences to creating
              youth-centric platforms and automating workflows, GreenHack invites the next
              generation of changemakers to shape a resilient and future-ready energy ecosystem.
              More than a competition, this is a launchpad for tech-driven, sustainable impact—and a
              movement toward Africa’s energy transformation.
            </Typography>
          </Box>
        </Stack>
      </Container>

      {/* Ambient sweep on the right */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: -200,
          width: 400,
          height: '100%',
          background:
            'radial-gradient(220px 400px at 50% 50%, rgba(0,174,239,0.15), transparent 70%)',
          filter: 'blur(20px)',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
}
