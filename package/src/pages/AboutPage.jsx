import { Box, Card, CardContent, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { useLanguage } from '../i18n/LanguageContext';

export default function AboutPage() {
  const { copy } = useLanguage();

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 7, md: 9 } }}>
      <Stack spacing={4.5}>
        <Box sx={{ maxWidth: 760 }}>
          <Chip label={copy.about.chip} color="primary" sx={{ mb: 2, fontWeight: 700 }} />
          <Typography variant="h2" gutterBottom>
            {copy.about.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {copy.about.description}
          </Typography>
        </Box>

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

        <Card>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Stack spacing={2}>
              <Typography variant="h4">{copy.about.roadmap.title}</Typography>
              <Typography color="text.secondary">{copy.about.roadmap.first}</Typography>
              <Typography color="text.secondary">{copy.about.roadmap.second}</Typography>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
}
