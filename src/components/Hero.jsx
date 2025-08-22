'use client';

import React, { useEffect, useState } from "react";
import logo from '../assets/logo2.png';
import {
  Button,
  Box,
  Typography,
  AppBar,
  Toolbar,
  Stack,
  Container
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { motion } from "framer-motion";
import { keyframes } from "@mui/system";

const sections = ['about', 'timeline', 'prizes', 'faq'];

/* ====== Futuristic Animations ====== */
const float = keyframes`
  0% { transform: translateY(0px) }
  50% { transform: translateY(-12px) }
  100% { transform: translateY(0px) }
`;
const scan = keyframes`
  0% { transform: translateX(-100%) }
  100% { transform: translateX(100%) }
`;
const sheen = keyframes`
  0% { transform: translateX(-150%) }
  100% { transform: translateX(150%) }
`;
const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 rgba(124,211,56,0.0), 0 0 0 rgba(0,174,239,0.0) }
  50% { box-shadow: 0 0 30px rgba(124,211,56,0.22), 0 0 50px rgba(0,174,239,0.18) }
  100% { box-shadow: 0 0 0 rgba(124,211,56,0.0), 0 0 0 rgba(0,174,239,0.0) }
`;

/* rotating buzzwords under the title (no extra libs) */
const keywords = ["AI", "Sustainability", "Data", "Impact"];

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [activeSection, setActiveSection] = useState('about');
  const [kwIndex, setKwIndex] = useState(0);

  useEffect(() => {
    // ✅ Fix: Sept has 30 days
    const deadline = new Date("2025-10-31T23:59:59").getTime();

    const countdown = () => {
      const now = new Date().getTime();
      const diff = deadline - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    countdown();
    const timer = setInterval(countdown, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => entry.isIntersecting && setActiveSection(entry.target.id)),
      { threshold: 0.6 }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const rot = setInterval(() => {
      setKwIndex((i) => (i + 1) % keywords.length);
    }, 2000);
    return () => clearInterval(rot);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        color: "white",
        overflow: "hidden",
        // Layered neon gradient + subtle grid
        background:
          `radial-gradient(1200px 700px at -10% -20%, rgba(0,174,239,0.18), transparent 60%),
           radial-gradient(1100px 650px at 120% 10%, rgba(124,211,56,0.16), transparent 60%),
           linear-gradient(135deg, #00121E 0%, #004B87 55%, #000000 100%)`,
        // Grid overlay
        "&:before": {
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
      {/* Floating orbs */}
      <Box sx={{
        position: 'absolute', top: 120, left: -40, width: 160, height: 160,
        borderRadius: '50%', filter: 'blur(22px)',
        background: 'radial-gradient(circle, rgba(0,174,239,0.65), rgba(0,174,239,0.05))',
        animation: `${float} 8s ease-in-out infinite`,
        zIndex: 0
      }}/>
      <Box sx={{
        position: 'absolute', bottom: 90, right: -50, width: 220, height: 220,
        borderRadius: '50%', filter: 'blur(28px)',
        background: 'radial-gradient(circle, rgba(124,211,56,0.55), rgba(124,211,56,0.05))',
        animation: `${float} 10s ease-in-out infinite`,
        animationDelay: '0.6s',
        zIndex: 0
      }}/>

      {/* scanning accent */}
      <Box sx={{ position: 'absolute', top: 140, left: 0, width: '100%', height: 2, overflow: 'hidden', opacity: 0.45 }}>
        <Box sx={{
          height: '100%', width: '28%',
          background: 'linear-gradient(90deg, transparent, #00AEEF, transparent)',
          animation: `${scan} 6s linear infinite`,
        }}/>
      </Box>

      {/* Navbar */}
      <AppBar
        position="fixed"
        sx={{
          background: "rgba(0, 20, 35, 0.65)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "none",
          zIndex: 10
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
          <Box display="flex" alignItems="center" gap={1}>
            <img src={logo} alt="Green Wells Logo" style={{ height: 36 }} />
            <Typography
              variant="h6"
              fontWeight="bold"
              color="white"
              sx={{ display: { xs: 'none', sm: 'block' }, letterSpacing: 0.4 }}
            >
              GreenWells Energies
            </Typography>
          </Box>

          <Stack direction="row" spacing={4} sx={{ display: { xs: "none", md: "flex" } }}>
            {sections.map((item) => {
              const active = activeSection === item;
              return (
                <Box key={item} sx={{ position: 'relative' }}>
                  <Typography
                    component="a"
                    href={`#${item}`}
                    sx={{
                      color: active ? "#7CD338" : "white",
                      fontWeight: active ? 700 : 400,
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      "&:hover": { opacity: 0.85 },
                    }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Typography>
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: -8,
                      height: 2,
                      background: active
                        ? "linear-gradient(90deg, #00AEEF, #7CD338)"
                        : "transparent",
                      borderRadius: 2,
                      transition: "all .3s",
                    }}
                  />
                </Box>
              );
            })}
          </Stack>

          <a
            href="https://bit.ly/4kZYyu2"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              sx={{
                position: 'relative',
                overflow: 'hidden',
                bgcolor: "#7CD338",
                color: "#031B2D",
                fontWeight: 700,
                borderRadius: "999px",
                px: 2.8,
                py: 1.1,
                boxShadow: '0 10px 24px rgba(124,211,56,0.25)',
                "&:hover": { bgcolor: "#94D65E" },
                // sheen
                "&:after": {
                  content: '""',
                  position: 'absolute',
                  top: 0, left: 0,
                  width: '40%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)',
                  transform: 'skewX(-20deg)',
                  animation: `${sheen} 2.6s ease-in-out infinite`,
                }
              }}
            >
              Register Now
            </Button>
          </a>
        </Toolbar>
      </AppBar>

      {/* Hero Content */}
      <Box id="about" sx={{ position: 'relative', zIndex: 1 }}>
        <Container sx={{ pt: 24, pb: 16, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* pill date */}
            <Box
              sx={{
                display: "inline-block",
                px: 2,
                py: 0.5,
                background:
                  "linear-gradient(90deg, rgba(124,211,56,0.25), rgba(0,174,239,0.25))",
                color: "#E8FDF0",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "999px",
                fontSize: "0.875rem",
                mb: 2,
                backdropFilter: 'blur(6px)',
              }}
            >
              🌱 July – November 2025
            </Box>

            {/* Title with neon gradient word */}
            <Typography variant="h2" fontWeight="bold" sx={{ textShadow: '0 4px 24px rgba(0,0,0,0.35)' }}>
              GreenWells{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg, #00AEEF, #7CD338)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Innovation
              </Box>{" "}
              Hackathon 2025
            </Typography>

            {/* rotating keywords */}
            <Typography
              variant="h6"
              sx={{ mt: 1.5, color: "#cbe8ff", opacity: 0.95 }}
            >
              3 months. Real challenges. Green future. —{" "}
              <Box component="span" sx={{ color: "#7CD338", fontWeight: 700 }}>
                {keywords[kwIndex]}
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mt: 2,
                color: "#E9FFF4",
                maxWidth: 780,
                mx: "auto",
                lineHeight: 1.75,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 2,
                p: 2,
                boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
              }}
            >
              The GreenWells Innovation Hackathon is a nationwide sustainability-focused challenge that
              empowers university students to create scalable, eco-friendly tech solutions for real-world
              problems in the Oil and Gas sector. Backed by GreenWells Energies and partners, the hackathon blends
              hands-on innovation, mentorship, and opportunity—launching Kenya’s next generation of green tech leaders.
            </Typography>

            {/* CTAs */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" mt={4}>
              <a
                href="https://bit.ly/4kZYyu2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    bgcolor: "#7CD338",
                    color: "#031B2D",
                    fontWeight: 600,
                    borderRadius: "999px",
                    px: 4,
                    py: 1.5,
                    "&:hover": { bgcolor: "#9CDE64" },
                    animation: `${pulseGlow} 7s ease-in-out infinite`,
                    "&:after": {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      borderRadius: "999px",
                      border: '1px solid rgba(255,255,255,0.35)',
                      pointerEvents: 'none'
                    }
                  }}
                >
                  Join GreenHack
                </Button>
              </a>

              <a
                href="https://vm.tiktok.com/ZMALcuqTo/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "rgba(255,255,255,0.7)",
                    borderRadius: "999px",
                    px: 4,
                    py: 1.5,
                    "&:hover": { bgcolor: "white", color: "#004B87" },
                  }}
                >
                  ▶️ Watch Video
                </Button>
              </a>
            </Stack>

            {/* Countdown */}
            <Box mt={6} textAlign="center">
              <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                <AccessTimeIcon fontSize="small" />
                <Typography variant="body2">Registration closes in:</Typography>
              </Stack>

              <Stack direction="row" spacing={2} mt={2} justifyContent="center">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Mins', value: timeLeft.minutes },
                  { label: 'Secs', value: timeLeft.seconds }
                ].map(({ label, value }) => (
                  <Box
                    key={label}
                    component={motion.div}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    sx={{
                      position: 'relative',
                      minWidth: 96,
                      px: 2,
                      py: 2,
                      borderRadius: 5,
                      bgcolor: "rgba(255,255,255,0.95)",
                      color: "#004B87",
                      fontWeight: 800,
                      letterSpacing: 0.5,
                      textAlign: 'center',
                      overflow: 'hidden',
                      "&:before": {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 5,
                        background: 'linear-gradient(90deg, rgba(0,174,239,0.15), rgba(124,211,56,0.15))',
                        zIndex: 0
                      },
                      "&:after": {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 5,
                        border: '1px solid rgba(0,0,0,0.08)',
                        boxShadow: 'inset 0 0 30px rgba(0,174,239,0.12)',
                        pointerEvents: 'none'
                      }
                    }}
                  >
                    <Typography variant="h5" sx={{ position: 'relative', zIndex: 1 }}>
                      {value}
                    </Typography>
                    <Typography variant="caption" sx={{ position: 'relative', zIndex: 1, color: '#0f172a' }}>
                      {label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </motion.div>
        </Container>
      </Box>

    </Box>
  );
}
