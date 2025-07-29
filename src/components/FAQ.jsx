'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
  Stack,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import faqImage from '../assets/faq-illustration.png'; // make sure you have this

const faqItems = [
  {
    question: 'Who can participate in GreenHack 2025?',
    answer:
      'The GreenHack Innovation Challenge is open to all university students in Kenya. Teams of 2–5 members are encouraged, and cross-disciplinary collaboration is highly recommended.',
  },
  {
    question: 'Is it free to participate?',
    answer:
      'Yes! Participation is completely free. Green Wells Energy and our partners are covering the costs to ensure accessibility and inclusiveness for all qualifying student teams.',
  },
  {
    question: 'Do I need a technical background?',
    answer:
      'No. We welcome students from all backgrounds – whether you study business, engineering, design, or environmental science. Passion and creativity matter most!',
  },
  {
    question: 'What kind of projects are expected?',
    answer:
      'Innovations that promote sustainability in the LPG sector – such as clean energy distribution, emission tracking, smart cooking solutions, energy efficiency, and safety innovations.',
  },
  {
    question: 'What happens after the hackathon?',
    answer:
      'Winning teams receive incubation support, mentorship, and potential pilot funding from Green Wells and our partners to bring their solutions to market.',
  },
];

export default function FAQ() {
  const theme = useTheme();
  const [search, setSearch] = useState('');

  const filteredFaqs = faqItems.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 10, md: 12 },
        backgroundColor: '#F0F9FF',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 700,
            color: '#004B87',
            mb: 4,
            position: 'relative',
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
          ❓ Frequently Asked Questions
        </Typography>

        {/* Search Field */}
        <Box sx={{ maxWidth: 700, mx: 'auto', mb: 6 }}>
          <TextField
            fullWidth
            placeholder="Search your question..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#00AEEF' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: '#fff',
              borderRadius: 14,
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              '& fieldset': { border: 'none' },
            }}
          />
        </Box>

        {/* FAQ Content */}
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
          {/* Left Side Image */}
        <Box
          sx={{
            flex: 1.2,
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={faqImage}
            alt="FAQ illustration"
            style={{
              // width: '170%',
              maxWidth: '500px',
              height: 'auto',
              objectFit: 'contain',
              transition: 'transform 0.3s ease',
              transform: 'scale(1)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            
          />
        </Box>


          {/* Right Side Accordion */}
          <Box sx={{ flex: 2 }}>
            {filteredFaqs.map((item, index) => (
              <Accordion
                key={index}
                sx={{
                  mb: 2,
                  borderRadius: 2,
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  transition: '0.3s',
                  '&.Mui-expanded': {
                    boxShadow: '0 6px 20px rgba(124,211,56,0.2)',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#0284C8' }} />}
                  sx={{
                    fontWeight: 600,
                    color: '#0284C8',
                  }}
                >
                  {item.question}
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: '#475569',
                  }}
                >
                  {item.answer}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
