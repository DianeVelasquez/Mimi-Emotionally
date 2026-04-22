import { Box, Card, CardContent, Chip, Container, Grid, Stack, Typography } from '@mui/material';

const methodology = [
  'Audio sample upload from the frontend demo.',
  'Feature extraction on the Python backend.',
  'Emotion prediction from a trained classifier.',
  'Product layer that explains the result with clearer UX and honest framing.',
];

const principles = [
  {
    title: 'Signal first',
    description: 'The project extracts acoustic features from an audio sample before sending them to a trained classifier.',
  },
  {
    title: 'Explainability matters',
    description: 'For portfolio quality, the interface must explain what the model predicts and where the limitations begin.',
  },
  {
    title: 'Product framing matters too',
    description: 'The value is not only in the model, but also in presenting inference through a clean and intentional user experience.',
  },
];

const portfolioAngles = [
  {
    title: 'Why this belongs in a portfolio',
    description: 'It combines interface design, API integration, ML storytelling and product judgment in one compact project.',
  },
  {
    title: 'What this rebuild improves',
    description: 'It removes template noise, clarifies the user journey and makes room for stronger backend credibility.',
  },
  {
    title: 'What still needs backend work',
    description: 'Confidence scores, scaler-aware inference, cleaner API contracts and more trustworthy model metadata.',
  },
];

export default function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 7, md: 9 } }}>
      <Stack spacing={4.5}>
        <Box sx={{ maxWidth: 760 }}>
          <Chip label="Methodology" color="primary" sx={{ mb: 2, fontWeight: 700 }} />
          <Typography variant="h2" gutterBottom>
            What Mimi does and what it does not do
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Mimi is a machine learning demo that estimates emotional labels from audio-derived
            features. It is not a clinical system, and the right portfolio framing is to present it
            honestly as an experimental emotional-audio classifier with a polished, emotionally aware product layer.
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
                    portfolio angle
                  </Typography>
                  <Typography variant="h3">
                    This project is strongest when it treats emotion as both a model output and a design responsibility.
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={1.25}>
                  {methodology.map((item, index) => (
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
          {principles.map((item) => (
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
          {portfolioAngles.map((item) => (
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
              <Typography variant="h4">Current technical roadmap</Typography>
              <Typography color="text.secondary">
                The next backend iteration should load preprocessing artifacts correctly, remove
                shared global state, return richer metadata and document the model pipeline with more
                credibility.
              </Typography>
              <Typography color="text.secondary">
                After that, the README and project narrative can align with the rebuilt experience so
                the repository tells the same story the UI now starts to tell.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
}
