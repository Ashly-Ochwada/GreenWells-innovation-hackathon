'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// FAQ Data
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
  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 8, md: 10 },
        px: 2,
        backgroundColor: '#f0f9ff',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 6,
            fontWeight: 700,
            color: '#0284C8',
            position: 'relative',
            '&::after': {
              content: '""',
              display: 'block',
              width: '60px',
              height: '4px',
              background: '#58C747',
              borderRadius: '2px',
              margin: '0.5rem auto 0',
            },
          }}
        >
          ❓ Frequently Asked Questions
        </Typography>

        {faqItems.map((item, index) => (
          <Accordion
            key={index}
            sx={{
              mb: 2,
              borderRadius: 2,
              backgroundColor: 'white',
              boxShadow: '0 2px 12px rgba(2,132,200,0.08)',
              transition: 'box-shadow 0.3s',
              '&.Mui-expanded': {
                boxShadow: '0 6px 20px rgba(88,199,71,0.2)',
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
      </Container>
    </Box>
  );
}
