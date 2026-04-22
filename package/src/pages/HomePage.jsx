import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import QueueMusicRoundedIcon from '@mui/icons-material/QueueMusicRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import BlurOnRoundedIcon from '@mui/icons-material/BlurOnRounded';
import { Link as RouterLink } from 'react-router';

const steps = [
  {
    title: 'Upload a short audio sample',
    description: 'Start with a music snippet or audio clip and send it to Mimi for analysis.',
    icon: <QueueMusicRoundedIcon color="primary" />,
  },
  {
    title: 'Extract acoustic features',
    description: 'The backend transforms the waveform into a numerical representation the model can interpret.',
    icon: <InsightsRoundedIcon color="primary" />,
  },
  {
    title: 'Receive an emotional insight',
    description: 'Mimi predicts the most likely emotional label and presents the result in a clearer, portfolio-ready UI.',
    icon: <PsychologyRoundedIcon color="primary" />,
  },
];

const highlights = [
  'Modern React + Vite frontend rebuilt around a real product journey.',
  'Audio upload flow designed to showcase ML inference clearly.',
  'Transparent product narrative that explains both value and limitations.',
];

const trustSignals = [
  { label: 'Emotional identity', value: 'Reframed' },
  { label: 'Core ML classes', value: '4 emotions' },
  { label: 'Product focus', value: 'Sound → feeling' },
];

const useCases = [
  {
    title: 'Portfolio storytelling',
    description: 'Show how an ML inference flow becomes a designed product experience instead of a classroom demo.',
    icon: <VerifiedRoundedIcon color="primary" />,
  },
  {
    title: 'Audio intelligence demo',
    description: 'Use Mimi to explain how features, prediction and interpretation can live together in a single UX.',
    icon: <TimelineRoundedIcon color="primary" />,
  },
  {
    title: 'Product thinking + ML',
    description: 'Demonstrate that model output alone is not enough; framing, trust and clarity matter too.',
    icon: <BlurOnRoundedIcon color="primary" />,
  },
];

export default function HomePage() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={5} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              <Chip
                label="Portfolio rebuild in progress"
                color="primary"
                sx={{ alignSelf: 'flex-start', fontWeight: 700 }}
              />
              <Typography variant="h1" sx={{ maxWidth: 560 }}>
                Let sound feel personal before it feels technical.
              </Typography>
              <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 560 }}>
                Mimi turns audio into an emotional reading with a softer interface, calmer pacing and
                a more human product voice.
              </Typography>

              <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap">
                {trustSignals.map((signal) => (
                  <Card key={signal.label} sx={{ minWidth: 140, borderRadius: 4, boxShadow: 'none', border: '1px solid rgba(42, 53, 71, 0.08)' }}>
                    <CardContent sx={{ p: 2.25 }}>
                      <Typography variant="overline" color="text.secondary">
                        {signal.label}
                      </Typography>
                      <Typography variant="h4">{signal.value}</Typography>
                    </CardContent>
                  </Card>
                ))}
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  component={RouterLink}
                  to="/analyze"
                  variant="contained"
                  size="large"
                  endIcon={<PlayArrowRoundedIcon />}
                >
                  Analyze audio
                </Button>
                <Button component={RouterLink} to="/about" variant="outlined" size="large">
                  Explore methodology
                </Button>
              </Stack>

              <Stack spacing={1.5}>
                {highlights.map((item) => (
                  <Typography key={item} variant="body1" color="text.secondary">
                    • {item}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                borderRadius: 6,
                overflow: 'hidden',
                background: 'linear-gradient(160deg, #40214a 0%, #7c3aed 50%, #ec4899 100%)',
                color: 'white',
                boxShadow: '0 35px 80px rgba(124, 58, 237, 0.24)',
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Stack spacing={3}>
                  <Typography variant="overline" sx={{ opacity: 0.72, letterSpacing: '0.12em' }}>
                    audio → features → model → insight
                  </Typography>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.12)',
                    }}
                  >
                    <Typography variant="h3" gutterBottom>
                      A more emotive demo surface
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.82, mb: 3 }}>
                      Instead of reading like a cold dashboard, the experience now tries to feel a
                      little closer to the emotional subject it is analyzing.
                    </Typography>

                    <Stack spacing={1.5} sx={{ mb: 3 }}>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body2" sx={{ opacity: 0.72 }}>
                          Emotional resonance
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          91%
                        </Typography>
                      </Stack>
                      <LinearProgress
                        variant="determinate"
                        value={91}
                        sx={{
                          height: 10,
                          borderRadius: 99,
                          bgcolor: 'rgba(255,255,255,0.12)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 99,
                            background: 'linear-gradient(90deg, #93c5fd 0%, #c4b5fd 100%)',
                          },
                        }}
                      />
                    </Stack>

                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {['Relax', 'Happy', 'Sad', 'Angry'].map((emotion) => (
                        <Chip
                          key={emotion}
                          label={emotion}
                          sx={{
                            bgcolor: 'rgba(255,255,255,0.12)',
                            color: 'white',
                            fontWeight: 700,
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>

                  <Typography variant="body2" sx={{ opacity: 0.75 }}>
                    The visual system now leans warmer, more expressive and more aligned with the
                    emotional promise of the product.
                  </Typography>

                  <Divider sx={{ borderColor: 'rgba(255,255,255,0.14)' }} />

                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="overline" sx={{ opacity: 0.68 }}>
                        experience goal
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.88 }}>
                        Replace dashboard clutter with atmosphere, softness and a more memorable first impression.
                      </Typography>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="overline" sx={{ opacity: 0.68 }}>
                        current focus
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.88 }}>
                        Make the ML demo feel emotionally legible, not just technically functional.
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ pb: { xs: 8, md: 10 } }}>
        <Stack spacing={2} sx={{ mb: 4 }}>
          <Typography variant="h2">How the experience works</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
            The goal is to showcase the complete journey: a user uploads audio, the backend
            extracts features, the model predicts an emotional class and the interface explains the
            result in a way that is easy to understand.
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {steps.map((step, index) => (
            <Grid key={step.title} size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3.5 }}>
                  <Stack spacing={2}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: 3,
                          display: 'grid',
                          placeItems: 'center',
                          bgcolor: 'primary.light',
                        }}
                      >
                        {step.icon}
                      </Box>
                      <Chip label={`Step ${index + 1}`} size="small" />
                    </Stack>
                    <Typography variant="h4">{step.title}</Typography>
                    <Typography color="text.secondary">{step.description}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ pb: { xs: 8, md: 10 } }}>
        <Grid container spacing={3}>
          {useCases.map((item) => (
            <Grid key={item.title} size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3.5 }}>
                  <Stack spacing={2}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 3,
                        display: 'grid',
                        placeItems: 'center',
                        bgcolor: 'primary.light',
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography variant="h4">{item.title}</Typography>
                    <Typography color="text.secondary">{item.description}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
