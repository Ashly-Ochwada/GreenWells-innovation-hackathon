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

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const sections = ['about', 'timeline', 'prizes', 'faq'];
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const countdown = () => {
      const deadline = new Date("2025-09-31T23:59:59").getTime();
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
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #004B87, #000000)",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* Navbar */}
      <AppBar position="fixed" sx={{ backgroundColor: "rgba(0, 75, 135, 0.9)", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between", px: 4 }}>
          <Box display="flex" alignItems="center" gap={1}>
            <img src={logo} alt="Green Wells Logo" style={{ height: 36 }} />
            <Typography
              variant="h6"
              fontWeight="bold"
              color="white"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Green Wells Energies
            </Typography>
          </Box>
          <Stack direction="row" spacing={4} sx={{ display: { xs: "none", md: "flex" } }}>
            {sections.map((item) => (
              <Typography
                key={item}
                component="a"
                href={`#${item}`}
                sx={{
                  color: activeSection === item ? "#7CD338" : "white",
                  fontWeight: activeSection === item ? 700 : 400,
                  borderBottom: activeSection === item ? "2px solid #7CD338" : "none",
                  textDecoration: "none",
                  "&:hover": { opacity: 0.8 },
                  transition: "all 0.3s ease",
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Typography>
            ))}
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
                bgcolor: "#7CD338",
                color: "white",
                fontWeight: "bold",
                borderRadius: "999px",
              }}
            >
              Register Now
            </Button>
          </a>
        </Toolbar>
      </AppBar>

      {/* Hero Content */}
      <Box id="about">
        <Container sx={{ pt: 24, pb: 10, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              sx={{
                display: "inline-block",
                px: 2,
                py: 0.5,
                bgcolor: "#7CD338",
                color: "#004B87",
                borderRadius: "999px",
                fontSize: "0.875rem",
                mb: 2,
              }}
            >
              🌱 July – November 2025
            </Box>

            <Typography variant="h2" fontWeight="bold" >
              GreenWells{" "}
              <Box component="span" sx={{ color: "#00AEEF" }}>
                Innovation
              </Box>{" "}
              Hackathon 2025
            </Typography>

            <Typography variant="h6"sx={{ mt: 2, color: "#cbd5e1" }}>
              48hrs. Real challenges. Green future. 🌍✨
            </Typography>

            <Typography
              variant="body1"
              sx={{ mt: 2, color: "#f0fdf4", maxWidth: 720, mx: "auto", lineHeight: 1.7 }}
            >
              The GreenWells Innovation Hackathon is a nationwide sustainability-focused challenge that empowers university students to create scalable, eco-friendly tech solutions for real-world problems in the LPG and energy sector. Backed by Greenwell Energies and key partners, the hackathon blends hands-on innovation, mentorship, and opportunity — providing a launchpad for Kenya’s next generation of green tech leaders.
            </Typography>

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
                    bgcolor: "#7CD338",
                    color: "black",
                    fontWeight: 500,
                    borderRadius: "999px",
                    px: 4,
                    py: 1.5,
                    "&:hover": { bgcolor: "#A5D76E" },
                  }}
                >
                  Join GreenHack
                </Button>
              </a>
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  borderRadius: "999px",
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    bgcolor: "white",
                    color: "#004B87",
                  },
                }}
              >
                ▶️ Watch Video
              </Button>
            </Stack>

            {/* Countdown */}
            <Box mt={6} textAlign="center">
              <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                <AccessTimeIcon fontSize="small" />
                <Typography variant="body2">
                  Registration closes in:
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2} mt={2} justifyContent="center">
                <Box sx={{ px: 2, py: 2, borderRadius: 5, bgcolor: "#ffffff", color: "#004B87" }}>
                  {timeLeft.days} Days
                </Box>
                <Box sx={{ px: 2, py: 2, borderRadius: 5, bgcolor: "#ffffff", color: "#004B87" }}>
                  {timeLeft.hours} Hours
                </Box>
                <Box sx={{ px: 2, py: 2, borderRadius: 5, bgcolor: "#ffffff", color: "#004B87" }}>
                  {timeLeft.minutes} Mins
                </Box>
                <Box sx={{ px: 2, py: 2, borderRadius: 5, bgcolor: "#ffffff", color: "#004B87"
               }}>
                  {timeLeft.seconds} Secs
                </Box>
              </Stack>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}