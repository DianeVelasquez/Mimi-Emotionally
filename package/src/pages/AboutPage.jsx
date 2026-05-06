import { Box, Card, CardContent, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import QueueMusicRoundedIcon from '@mui/icons-material/QueueMusicRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import { useLanguage } from '../i18n/LanguageContext';

export default function AboutPage() {
  const { copy } = useLanguage();
  const experienceSteps = [
    { ...copy.home.stepsSection.items[0], icon: <QueueMusicRoundedIcon color="primary" /> },
    { ...copy.home.stepsSection.items[1], icon: <InsightsRoundedIcon color="primary" /> },
    { ...copy.home.stepsSection.items[2], icon: <PsychologyRoundedIcon color="primary" /> },
  ];
  const heroIcons = [
    <GraphicEqRoundedIcon key="listen" sx={{ fontSize: 18 }} />,
    <AutoAwesomeRoundedIcon key="predict" sx={{ fontSize: 18 }} />,
    <FavoriteRoundedIcon key="care" sx={{ fontSize: 18 }} />,
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 7, md: 9 } }}>
      <Stack spacing={4.5}>
        <Grid container spacing={3} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 7 }}>
            <Card sx={{ borderRadius: 5 }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Stack spacing={2.5} sx={{ maxWidth: 760 }}>
                  <Chip label={copy.about.chip} color="primary" sx={{ alignSelf: 'flex-start', fontWeight: 700 }} />
                  <Typography variant="h2">{copy.about.title}</Typography>
                  <Typography variant="body1" color="text.secondary">
                    {copy.about.description}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              sx={{
                minHeight: { xs: 320, md: 100 },
                borderRadius: 5,
                overflow: 'hidden',
                position: 'relative',
                background: 'linear-gradient(145deg, rgba(64,33,74,1) 0%, rgba(124,58,237,1) 54%, rgba(236,72,153,1) 100%)',
                color: 'white',
                boxShadow: '0 28px 70px rgba(124,58,237,0.22)',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  overflow: 'hidden',
                  '&::before, &::after': {
                    content: '""',
                    position: 'absolute',
                    borderRadius: '50%',
                    filter: 'blur(4px)',
                    opacity: 0.28,
                    animation: 'floatBlob 8s ease-in-out infinite',
                  },
                  '&::before': {
                    width: 180,
                    height: 180,
                    top: -30,
                    right: -40,
                    background: 'rgba(255,255,255,0.22)',
                  },
                  '&::after': {
                    width: 140,
                    height: 140,
                    bottom: -24,
                    left: -16,
                    background: 'rgba(147,197,253,0.24)',
                    animationDuration: '10s',
                  },
                  '@keyframes floatBlob': {
                    '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
                    '50%': { transform: 'translateY(12px) translateX(-8px)' },
                  },
                }}
              />
              <CardContent sx={{ p: { xs: 3, md: 4 }, position: 'relative', zIndex: 1, height: '100%' }}>
                <Stack spacing={3} justifyContent="space-between" sx={{ height: '100%' }}>
                  <Stack spacing={2}>
                    <Chip
                      label={copy.about.heroPanel.badge}
                      sx={{
                        alignSelf: 'flex-start',
                        bgcolor: 'rgba(255,255,255,0.14)',
                        color: 'white',
                        fontWeight: 700,
                      }}
                    />
                    <Typography variant="h3">{copy.about.heroPanel.title}</Typography>
                    <Typography sx={{ opacity: 0.84 }}>{copy.about.heroPanel.description}</Typography>
                  </Stack>

                  <Stack spacing={1.25}>
                    {copy.about.heroPanel.pillars.map((item, index) => (
                      <Stack
                        key={item}
                        direction="row"
                        spacing={1.25}
                        alignItems="center"
                        sx={{
                          px: 1.5,
                          py: 1.2,
                          borderRadius: 3,
                          bgcolor: 'rgba(255,255,255,0.1)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          backdropFilter: 'blur(8px)',
                        }}
                      >
                        <Box
                          sx={{
                            width: 34,
                            height: 34,
                            borderRadius: 2.5,
                            display: 'grid',
                            placeItems: 'center',
                            bgcolor: 'rgba(255,255,255,0.14)',
                          }}
                        >
                          {heroIcons[index]}
                        </Box>
                        <Typography fontWeight={700}>{item}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Stack spacing={1.5}>
          <Typography variant="overline" color="primary.main" sx={{ letterSpacing: '0.12em' }}>
            {copy.about.experienceSection.overline}
          </Typography>
          <Typography variant="h3">{copy.about.experienceSection.title}</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 760 }}>
            {copy.home.stepsSection.description}
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {experienceSteps.map((step, index) => (
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

        <Stack spacing={1.5}>
          <Typography variant="overline" color="primary.main" sx={{ letterSpacing: '0.12em' }}>
            {copy.about.foundationSection.overline}
          </Typography>
          <Typography variant="h3">{copy.about.foundationSection.title}</Typography>
        </Stack>

        <Grid container spacing={3}>
          {copy.about.principles.map((item) => (
            <Grid key={item.title} size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3.5 }}>
                  <Stack spacing={1.5}>
                    <Typography variant="h4">{item.title}</Typography>
                    <Typography color="text.secondary">{item.description}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3}>
          {copy.about.portfolioAngles.map((item) => (
            <Grid key={item.title} size={{ xs: 12, md: 4 }}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3.5 }}>
                  <Stack spacing={1.5}>
                    <Typography variant="h4">{item.title}</Typography>
                    <Typography color="text.secondary">{item.description}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Card
          sx={{
            borderRadius: 5,
            background: 'linear-gradient(135deg, #40214a 0%, #7c3aed 58%, #ec4899 100%)',
            color: 'white',
            boxShadow: '0 28px 70px rgba(124,58,237,0.2)',
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={2}>
                  <Typography variant="overline" sx={{ opacity: 0.7 }}>
                    {copy.about.gradient.overline}
                  </Typography>
                  <Typography variant="h3">{copy.about.gradient.title}</Typography>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={1.25}>
                  {copy.about.methodology.map((item, index) => (
                    <Typography key={item} sx={{ opacity: 0.9 }}>
                      {index + 1}. {item}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        
      </Stack>
    </Container>
  );
}
