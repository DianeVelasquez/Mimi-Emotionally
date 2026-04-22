import { useMemo, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import AudioFileRoundedIcon from '@mui/icons-material/AudioFileRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import TrackChangesRoundedIcon from '@mui/icons-material/TrackChangesRounded';
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import { uploadAudio } from '../shared/api/audio';

const emotionMeta = {
  Relax: {
    tone: 'Calm, smooth and low-tension signal.',
    recommendation: 'Present this as a soothing profile that may fit focus or unwind playlists.',
    interpretation: 'The sample likely carries a softer and more stable energy, which the model interprets as low-arousal emotion.',
  },
  Happy: {
    tone: 'Energetic, bright and positively charged signal.',
    recommendation: 'Highlight that this pattern could support uplifting or feel-good listening.',
    interpretation: 'The acoustic profile suggests a more lively and positive mood signature with stronger perceived brightness or motion.',
  },
  Sad: {
    tone: 'Lower-energy and more introspective emotional profile.',
    recommendation: 'Explain that emotional tone in audio can also lean reflective rather than purely negative.',
    interpretation: 'The model associates this sample with a more restrained, inward and emotionally reflective sound pattern.',
  },
  Angry: {
    tone: 'High-intensity and high-arousal emotional profile.',
    recommendation: 'Frame this as forceful or tension-heavy energy detected in the sample.',
    interpretation: 'The extracted features point to higher arousal and stronger tension, leading the classifier toward an intense emotional label.',
  },
};

const processSteps = [
  'Upload a WAV sample',
  'Extract handcrafted audio features',
  'Run model inference',
  'Translate prediction into a readable insight',
];

const resultPanels = [
  {
    key: 'interpretation',
    title: 'Interpretation',
    icon: <InsightsRoundedIcon color="primary" />,
  },
  {
    key: 'nextSteps',
    title: 'Next step in the product',
    icon: <TrackChangesRoundedIcon color="primary" />,
  },
  {
    key: 'limitations',
    title: 'Context and limitations',
    icon: <TipsAndUpdatesRoundedIcon color="primary" />,
  },
];

export default function AnalyzePage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState('idle');
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const selectedFileLabel = useMemo(() => {
    if (!selectedFile) return 'No audio selected yet';

    const sizeInMb = `${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB`;
    return `${selectedFile.name} • ${sizeInMb}`;
  }, [selectedFile]);

  const handleFileSelection = (event) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    setStatus('idle');
    setResult(null);
    setErrorMessage('');
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      setStatus('error');
      setErrorMessage('Please choose a WAV audio file before starting the analysis.');
      return;
    }

    try {
      setStatus('loading');
      setErrorMessage('');
      const data = await uploadAudio(selectedFile);
      setResult(data);
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message || 'Unexpected error while analyzing the audio sample.');
    }
  };

  const emotionDetails = result?.emotion ? emotionMeta[result.emotion] : null;
  const resultContent = emotionDetails
    ? {
        interpretation: emotionDetails.interpretation,
        nextSteps:
          'In the backend iteration we can enrich this card with confidence scores, timing, probabilities and model metadata.',
        limitations:
          'This is still a demo classifier, not a clinical or psychological assessment. The UI intentionally communicates that boundary.',
      }
    : null;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 7, md: 9 } }}>
      <Stack spacing={5}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={2} sx={{ maxWidth: 760 }}>
              <Chip label="Live demo" color="primary" sx={{ alignSelf: 'flex-start', fontWeight: 700 }} />
              <Typography variant="h2">Analyze a music or audio sample</Typography>
              <Typography variant="body1" color="text.secondary">
                This screen turns a raw inference endpoint into a more intimate product moment: a guided
                upload flow, an emotional visual tone and a more human interpretation layer.
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Card sx={{ bgcolor: 'rgba(255,255,255,0.74)', backdropFilter: 'blur(18px)', border: '1px solid rgba(236,72,153,0.12)' }}>
              <CardContent sx={{ p: 3 }}>
                <Stack spacing={2}>
                  <Typography variant="overline" color="text.secondary">
                    what happens behind the scenes
                  </Typography>
                  {processSteps.map((step, index) => (
                    <Stack key={step} direction="row" spacing={1.5} alignItems="center">
                      <Box
                        sx={{
                          width: 30,
                          height: 30,
                          borderRadius: '50%',
                          display: 'grid',
                          placeItems: 'center',
                          bgcolor: 'primary.light',
                          color: 'primary.main',
                          fontWeight: 700,
                          fontSize: 14,
                        }}
                      >
                        {index + 1}
                      </Box>
                      <Typography color="text.secondary">{step}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Card>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Stack spacing={3}>
              <Stack
                spacing={2}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  border: '1px dashed rgba(236, 72, 153, 0.28)',
                  bgcolor: 'rgba(236, 72, 153, 0.04)',
                  boxShadow: '0 18px 60px rgba(236, 72, 153, 0.06) inset',
                }}
              >
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ md: 'center' }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 4,
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: 'secondary.light',
                    }}
                  >
                    <CloudUploadRoundedIcon color="secondary" />
                  </Box>
                  <Box>
                    <Typography variant="h4">Upload an audio sample</Typography>
                    <Typography color="text.secondary">
                      Bring a short WAV clip. Mimi will listen first, then translate the signal into an emotional readout.
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <Button component="label" variant="outlined" startIcon={<AudioFileRoundedIcon />}>
                    Choose file
                    <input hidden accept=".wav,audio/wav" type="file" onChange={handleFileSelection} />
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleAnalyze}
                    disabled={status === 'loading'}
                    startIcon={status === 'loading' ? <CircularProgress size={18} color="inherit" /> : <AutoAwesomeRoundedIcon />}
                  >
                    {status === 'loading' ? 'Analyzing audio...' : 'Run emotional analysis'}
                  </Button>
                </Stack>

                <Typography variant="body2" color="text.secondary">
                  {selectedFileLabel}
                </Typography>

                {status === 'loading' && (
                  <Card
                    variant="outlined"
                    sx={{
                      borderRadius: 4,
                      borderColor: 'rgba(30, 77, 183, 0.18)',
                      background: 'linear-gradient(135deg, rgba(236,72,153,0.08) 0%, rgba(124,58,237,0.08) 100%)',
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ sm: 'center' }}>
                        <CircularProgress />
                        <Box>
                          <Typography variant="h4">Processing your audio sample</Typography>
                          <Typography color="text.secondary">
                            Mimi is listening, extracting audio features and preparing an emotional interpretation.
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                )}
              </Stack>

              {status === 'error' && <Alert severity="error">{errorMessage}</Alert>}

              {status === 'success' && result && emotionDetails && resultContent && (
                <Stack spacing={3}>
                  <Card
                    variant="outlined"
                    sx={{
                      borderRadius: 5,
                      overflow: 'hidden',
                      borderColor: 'rgba(30, 77, 183, 0.18)',
                      background: 'linear-gradient(135deg, #fff1f7 0%, #ffffff 46%, #f3e8ff 100%)',
                      boxShadow: '0 25px 70px rgba(236,72,153,0.08)',
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Stack spacing={3}>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent="space-between">
                          <Box>
                            <Typography variant="overline" color="primary.main">
                              Prediction result
                            </Typography>
                            <Typography variant="h2">{result.emotion}</Typography>
                            <Typography color="text.secondary" sx={{ maxWidth: 600 }}>
                              {emotionDetails.tone}
                            </Typography>
                          </Box>
                          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                            <Chip label="Model inference complete" color="success" sx={{ fontWeight: 700 }} />
                            <Chip label="Emotion-first presentation" color="secondary" variant="outlined" sx={{ fontWeight: 700 }} />
                          </Stack>
                        </Stack>

                        <Divider />

                        <Grid container spacing={2}>
                          <Grid size={{ xs: 12, md: 4 }}>
                            <Card sx={{ height: '100%', bgcolor: 'rgba(255,255,255,0.72)', boxShadow: 'none', border: '1px solid rgba(236,72,153,0.08)' }}>
                              <CardContent sx={{ p: 2.5 }}>
                                <Typography variant="overline" color="text.secondary">
                                  dominant mood
                                </Typography>
                                <Typography variant="h3">{result.emotion}</Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                          <Grid size={{ xs: 12, md: 4 }}>
                            <Card sx={{ height: '100%', bgcolor: 'rgba(255,255,255,0.72)', boxShadow: 'none', border: '1px solid rgba(124,58,237,0.08)' }}>
                              <CardContent sx={{ p: 2.5 }}>
                                <Typography variant="overline" color="text.secondary">
                                  product readout
                                </Typography>
                                <Typography variant="h5">Readable emotional insight</Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                          <Grid size={{ xs: 12, md: 4 }}>
                            <Card sx={{ height: '100%', bgcolor: 'rgba(255,255,255,0.72)', boxShadow: 'none', border: '1px solid rgba(236,72,153,0.08)' }}>
                              <CardContent sx={{ p: 2.5 }}>
                                <Typography variant="overline" color="text.secondary">
                                  next backend goal
                                </Typography>
                                <Typography variant="h5">Confidence + metadata</Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        </Grid>
                      </Stack>
                    </CardContent>
                  </Card>

                  <Grid container spacing={2.5}>
                    {resultPanels.map((panel) => (
                      <Grid key={panel.key} size={{ xs: 12, md: 4 }}>
                        <Card sx={{ height: '100%', background: 'linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,248,252,0.96) 100%)' }}>
                          <CardContent sx={{ p: 3 }}>
                            <Stack spacing={2}>
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
                                {panel.icon}
                              </Box>
                              <Typography variant="h4">{panel.title}</Typography>
                              <Typography color="text.secondary">
                                {resultContent[panel.key] || emotionDetails.recommendation}
                              </Typography>
                            </Stack>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>

                  <Alert severity="info">
                    Current API returns only the predicted emotion label. In the backend iteration we
                    should return confidence, probabilities and model metadata so this screen becomes
                    even stronger.
                  </Alert>
                </Stack>
              )}

              {status === 'idle' && (
                <Card variant="outlined" sx={{ borderRadius: 4, borderStyle: 'dashed' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Stack spacing={1.5}>
                      <Typography variant="h4">Ready for a cleaner inference demo</Typography>
                      <Typography color="text.secondary">
                        Choose a WAV file and run the analysis to preview the new emotional layer.
                        This UI is ready to become even more expressive once the backend starts
                        returning confidence and richer metadata.
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              )}
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
}
