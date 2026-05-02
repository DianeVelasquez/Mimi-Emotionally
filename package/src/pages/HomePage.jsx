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
import { useLanguage } from '../i18n/LanguageContext';

export default function HomePage() {
  const { copy } = useLanguage();

  const steps = [
    { ...copy.home.stepsSection.items[0], icon: <QueueMusicRoundedIcon color="primary" /> },
    { ...copy.home.stepsSection.items[1], icon: <InsightsRoundedIcon color="primary" /> },
    { ...copy.home.stepsSection.items[2], icon: <PsychologyRoundedIcon color="primary" /> },
  ];

  const useCases = [
    { ...copy.home.useCases[0], icon: <VerifiedRoundedIcon color="primary" /> },
    { ...copy.home.useCases[1], icon: <TimelineRoundedIcon color="primary" /> },
    { ...copy.home.useCases[2], icon: <BlurOnRoundedIcon color="primary" /> },
  ];

  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={5} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              <Chip label={copy.home.chip} color="primary" sx={{ alignSelf: 'flex-start', fontWeight: 700 }} />
              <Typography variant="h1" sx={{ maxWidth: 560 }}>
                {copy.home.title}
              </Typography>
              <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 560 }}>
                {copy.home.description}
              </Typography>

              <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap">
                {copy.home.trustSignals.map((signal) => (
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
                <Button component={RouterLink} to="/analyze" variant="contained" size="large" endIcon={<PlayArrowRoundedIcon />}>
                  {copy.home.primaryCta}
                </Button>
                <Button component={RouterLink} to="/about" variant="outlined" size="large">
                  {copy.home.secondaryCta}
                </Button>
              </Stack>

              <Stack spacing={1.5}>
                {copy.home.highlights.map((item) => (
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
                    {copy.home.hero.overline}
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
                      {copy.home.hero.title}
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.82, mb: 3 }}>
                      {copy.home.hero.description}
                    </Typography>

                    <Stack spacing={1.5} sx={{ mb: 3 }}>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body2" sx={{ opacity: 0.72 }}>
                          {copy.home.hero.metricLabel}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          {copy.home.hero.metricValue}
                        </Typography>
                      </Stack>
                      <LinearProgress
                        variant="determinate"
                        value={Number.parseInt(copy.home.hero.metricValue, 10)}
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
                          label={copy.common.emotions[emotion]}
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
                    {copy.home.hero.footer}
                  </Typography>

                  <Divider sx={{ borderColor: 'rgba(255,255,255,0.14)' }} />

                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    {copy.home.hero.goals.map((item) => (
                      <Box key={item.label} sx={{ flex: 1 }}>
                        <Typography variant="overline" sx={{ opacity: 0.68 }}>
                          {item.label}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.88 }}>
                          {item.text}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" sx={{ pb: { xs: 8, md: 10 } }}>
        <Stack spacing={2} sx={{ mb: 4 }}>
          <Typography variant="h2">{copy.home.stepsSection.title}</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720 }}>
            {copy.home.stepsSection.description}
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
                      <Chip label={`${copy.home.stepsSection.stepLabel} ${index + 1}`} size="small" />
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
