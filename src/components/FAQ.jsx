'use client';

import React, { useMemo, useState } from 'react';
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
  Badge,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import { keyframes } from '@mui/system';
import faqImage from '../assets/faq-illustration.png';

/* ================== Animations ================== */
const pulse = keyframes`
  0% { box-shadow: 0 0 0 rgba(0,174,239,0.0) }
  50% { box-shadow: 0 0 30px rgba(0,174,239,0.18) }
  100% { box-shadow: 0 0 0 rgba(0,174,239,0.0) }
`;

/* ================== FAQ Data (grouped) ================== */
const FAQ_CATEGORIES = [
  {
    title: 'Eligibility & Teams',
    key: 'eligibility',
    items: [
      {
        q: 'Who can participate in GreenHack 2025?',
        a: 'The GreenHack Innovation Challenge is open to all university students in Kenya. Teams of 2–5 members are encouraged, and cross-disciplinary collaboration is highly recommended.',
      },
      {
        q: 'Can non-Kenyan students apply?',
        a: 'GreenHack targets students studying in Kenya. International students enrolled at Kenyan universities are eligible.',
      },
      {
        q: 'What is the team size?',
        a: 'Teams must have 2–5 members. Solo registrations are welcome; we help match solo applicants before kickoff.',
      },
      {
        q: 'How are teams formed?',
        a: 'Register as a team or solo; solo participants can join team-forming sessions before the kickoff.',
      },
      {
        q: 'Do I need a technical background?',
        a: 'No. We welcome students from all backgrounds—business, engineering, design, environmental science, etc. Passion and creativity matter most!',
      },
    ],
  },
  {
    title: 'Process & Timeline',
    key: 'process',
    items: [
      {
        q: 'When does registration close?',
        a: 'Online registration closes on October 31, 2025 at 23:59 EAT. Late sign-ups depend on available slots.',
      },
      {
        q: 'Can we participate remotely?',
        a: 'Some phases may be hybrid. Final pitching is expected in person unless stated otherwise.',
      },
      {
        q: 'What happens after the hackathon?',
        a: 'Winning teams receive incubation support, mentorship, and potential pilot funding from Green Wells and partners to bring their solutions to market.',
      },
      {
        q: 'What tools/tech are allowed?',
        a: 'Any legal/open tools are welcome—AI/ML, low/no-code, data platforms, cloud, and hardware prototypes.',
      },
    ],
  },
  {
    title: 'Judging & Prizes',
    key: 'judging',
    items: [
      {
        q: 'What are the judging criteria?',
        a: 'Impact & Relevance, Innovation, Feasibility, Technical Execution, User Experience, and Presentation.',
      },
      {
        q: 'Are there prizes?',
        a: 'Yes—cash awards, mentorship, incubation, and potential pilots with GreenWells and partners.',
      },
      {
        q: 'Who owns the IP?',
        a: 'Teams retain ownership of their IP. Any licensing or pilot agreements are discussed after the event.',
      },
    ],
  },
  {
    title: 'Support & Tools',
    key: 'support',
    items: [
      {
        q: 'Will mentors be available?',
        a: 'Yes—industry and academic mentors, office hours, and workshops on product, tech, and pitching.',
      },
      {
        q: 'Is it free to participate?',
        a: 'Yes! Participation is completely free. Green Wells Energy and partners cover costs to ensure accessibility.',
      },
      {
        q: 'What kind of projects are expected?',
        a: 'Sustainability-focused innovations in the LPG sector—clean energy distribution, emission tracking, smart cooking, energy efficiency, and safety innovations.',
      },
    ],
  },
];

/* ================== Helper: highlight search term ================== */
function Highlight({ text, query }) {
  if (!query) return <>{text}</>;
  const q = query.trim();
  if (!q) return <>{text}</>;
  const parts = text.split(new RegExp(`(${q.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')})`, 'i'));
  return (
    <>
      {parts.map((p, i) =>
        p.toLowerCase() === q.toLowerCase() ? (
          <Box
            key={i}
            component="mark"
            sx={{
              px: 0.5,
              borderRadius: 0.5,
              background: 'linear-gradient(90deg, rgba(0,174,239,0.25), rgba(124,211,56,0.25))',
            }}
          >
            {p}
          </Box>
        ) : (
          <React.Fragment key={i}>{p}</React.Fragment>
        )
      )}
    </>
  );
}

export default function FAQ() {
  const [search, setSearch] = useState('');
  const [expandedAll, setExpandedAll] = useState(false);

  // Filter questions inside categories
  const filtered = useMemo(() => {
    if (!search.trim()) return FAQ_CATEGORIES;
    const s = search.toLowerCase();
    return FAQ_CATEGORIES.map((cat) => ({
      ...cat,
      items: cat.items.filter(
        ({ q, a }) => q.toLowerCase().includes(s) || a.toLowerCase().includes(s)
      ),
    })).filter((cat) => cat.items.length > 0);
  }, [search]);

  const visibleCount =
    filtered.reduce((sum, c) => sum + c.items.length, 0) || 0;

  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 10, md: 12 },
        position: 'relative',
        background: 'linear-gradient(180deg, #F0F9FF 0%, #ECFDF5 60%, #F0F9FF 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid backdrop */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.12,
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 800,
            mb: 1,
            background: 'linear-gradient(90deg, #004B87, #00AEEF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          ❓ Frequently Asked Questions
        </Typography>
        <Typography align="center" sx={{ color: '#0f172a', opacity: 0.8, mb: 4 }}>
          Browse by category or search for a specific topic.
        </Typography>

        {/* Search + Controls */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          alignItems={{ xs: 'stretch', sm: 'center' }}
          justifyContent="center"
          sx={{ mb: 4 }}
        >
          <Box sx={{ maxWidth: 720, flex: 1, position: 'relative' }}>
            <TextField
              fullWidth
              placeholder="Search: eligibility, fees, team size, deadlines, judging, IP…"
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
                background: 'linear-gradient(180deg, #FFFFFF, #F8FBFF)',
                borderRadius: 3,
                boxShadow: '0 14px 28px rgba(0,0,0,0.06)',
                '& fieldset': { border: '1px solid rgba(0,0,0,0.06)' },
                '& .MuiInputBase-input': { py: 1.6 },
                transition: 'box-shadow .2s ease',
                '&:focus-within': { boxShadow: '0 18px 36px rgba(0,174,239,0.18)' },
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: -2,
                borderRadius: 3.5,
                border: '1px solid rgba(0,174,239,0.25)',
                pointerEvents: 'none',
              }}
            />
          </Box>

          {/* <Stack direction="row" spacing={1} justifyContent="center">
            <Button
              variant="outlined"
              onClick={() => setExpandedAll(true)}
              sx={{
                borderRadius: '999px',
                borderColor: 'rgba(0,174,239,0.35)',
                color: '#004B87',
                '&:hover': { borderColor: '#00AEEF' },
              }}
            >
              Expand All
            </Button>
            <Button
              variant="outlined"
              onClick={() => setExpandedAll(false)}
              sx={{
                borderRadius: '999px',
                borderColor: 'rgba(0,174,239,0.35)',
                color: '#004B87',
                '&:hover': { borderColor: '#00AEEF' },
              }}
            >
              Collapse All
            </Button>
          </Stack> */}
        </Stack>

        {/* Content */}
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
          {/* Left illustration with glow */}
          <Box
            sx={{
              flex: 1.2,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                width: 360,
                height: 360,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0,174,239,0.22), rgba(0,174,239,0))',
                filter: 'blur(18px)',
                animation: `${pulse} 7s ease-in-out infinite`,
              }}
            />
            <img
              src={faqImage}
              alt="FAQ illustration"
              style={{
                maxWidth: '460px',
                height: 'auto',
                objectFit: 'contain',
                transition: 'transform 0.3s ease',
                transform: 'scale(1)',
                zIndex: 1,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </Box>

          {/* Right: Category Accordions */}
          <Box sx={{ flex: 2 }}>
            {/* If searching, show a quick result count */}
            {search && (
              <Typography sx={{ mb: 1, color: '#004B87' }}>
                Showing <strong>{visibleCount}</strong> result{visibleCount !== 1 ? 's' : ''} across{' '}
                {filtered.length} categor{filtered.length === 1 ? 'y' : 'ies'}.
              </Typography>
            )}

            {filtered.map((cat, i) => {
              const questionCount = cat.items.length;
              return (
                <Accordion
                  key={cat.key}
                  defaultExpanded={search ? true : i === 0} // open first by default; open matches when searching
                  expanded={expandedAll ? true : undefined}
                  sx={{
                    mb: 2.5,
                    borderRadius: 3,
                    overflow: 'hidden',
                    background:
                      'linear-gradient(180deg, rgba(255,255,255,0.94), rgba(255,255,255,0.84))',
                    border: '1px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 12px 28px rgba(0,0,0,0.06)',
                    '&:before': { display: 'none' },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#0284C8' }} />}
                    sx={{
                      '& .MuiAccordionSummary-content': {
                        my: 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 800,
                        color: '#004B87',
                        background: 'linear-gradient(90deg, #004B87, #00AEEF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mr: 1,
                      }}
                    >
                      {cat.title}
                    </Typography>
                    <Badge
                      color="primary"
                      badgeContent={questionCount}
                      sx={{
                        '& .MuiBadge-badge': {
                          background: 'linear-gradient(90deg, #00AEEF, #7CD338)',
                          color: '#031B2D',
                          fontWeight: 700,
                        },
                      }}
                    />
                  </AccordionSummary>

                  <AccordionDetails
                    sx={{ pt: 0, pb: 1, background: 'rgba(240,249,255,0.5)' }}
                  >
                    {cat.items.map(({ q, a }, idx) => (
                      <Box key={idx} sx={{ py: 1.25 }}>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            color: '#0f172a',
                            mb: 0.5,
                          }}
                        >
                          <Highlight text={q} query={search} />
                        </Typography>
                        <Typography sx={{ color: '#334155', lineHeight: 1.7 }}>
                          <Highlight text={a} query={search} />
                        </Typography>
                        {idx < cat.items.length - 1 && (
                          <Divider sx={{ mt: 1.25, opacity: 0.25 }} />
                        )}
                      </Box>
                    ))}
                  </AccordionDetails>
                </Accordion>
              );
            })}

            {/* Empty state */}
            {filtered.length === 0 && (
              <Box
                sx={{
                  mt: 2,
                  p: 3,
                  borderRadius: 3,
                  textAlign: 'center',
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.75))',
                  border: '1px dashed rgba(0,0,0,0.12)',
                }}
              >
                <Typography sx={{ color: '#004B87', fontWeight: 800, mb: 1 }}>
                  No results
                </Typography>
                <Typography sx={{ color: '#0f172a' }}>
                  Try different keywords like <em>eligibility</em>, <em>deadline</em>, <em>team</em>, <em>judging</em>, or <em>IP</em>.
                </Typography>
              </Box>
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
