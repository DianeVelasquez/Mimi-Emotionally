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
import { useLanguage } from '../i18n/LanguageContext';
import { uploadAudio } from '../shared/api/audio';

export default function AnalyzePage() {
  const { copy } = useLanguage();
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState('idle');
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const resultPanels = [
    {
      key: 'interpretation',
      title: copy.analyze.result.panels.interpretation,
      icon: <InsightsRoundedIcon color="primary" />,
    },
    {
      key: 'nextSteps',
      title: copy.analyze.result.panels.nextSteps,
      icon: <TrackChangesRoundedIcon color="primary" />,
    },
    {
      key: 'limitations',
      title: copy.analyze.result.panels.limitations,
      icon: <TipsAndUpdatesRoundedIcon color="primary" />,
    },
  ];

  const selectedFileLabel = useMemo(() => {
    if (!selectedFile) return copy.analyze.uploader.noFile;

    const sizeInMb = `${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB`;
    return `${selectedFile.name} • ${sizeInMb}`;
  }, [copy.analyze.uploader.noFile, selectedFile]);

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
      setErrorMessage(copy.analyze.uploader.missingFile);
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
      setErrorMessage(error.message || copy.analyze.uploader.unexpectedError);
    }
  };

  const emotionDetails = result?.emotion ? copy.analyze.emotions[result.emotion] : null;
  const resultContent = emotionDetails
    ? {
        interpretation: emotionDetails.interpretation,
        nextSteps: copy.analyze.result.nextSteps,
        limitations: copy.analyze.result.limitations,
      }
    : null;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 7, md: 9 } }}>
      <Stack spacing={5}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={2} sx={{ maxWidth: 760 }}>
              <Chip label={copy.analyze.chip} color="primary" sx={{ alignSelf: 'flex-start', fontWeight: 700 }} />
              <Typography variant="h2">{copy.analyze.title}</Typography>
              <Typography variant="body1" color="text.secondary">
                {copy.analyze.description}
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Card sx={{ bgcolor: 'rgba(255,255,255,0.74)', backdropFilter: 'blur(18px)', border: '1px solid rgba(236,72,153,0.12)' }}>
              <CardContent sx={{ p: 3 }}>
                <Stack spacing={2}>
                  <Typography variant="overline" color="text.secondary">
                    {copy.analyze.processTitle}
                  </Typography>
                  {copy.analyze.processSteps.map((step, index) => (
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
                    <Typography variant="h4">{copy.analyze.uploader.title}</Typography>
                    <Typography color="text.secondary">{copy.analyze.uploader.description}</Typography>
                  </Box>
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <Button component="label" variant="outlined" startIcon={<AudioFileRoundedIcon />}>
                    {copy.analyze.uploader.chooseFile}
                    <input hidden accept=".wav,audio/wav" type="file" onChange={handleFileSelection} />
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleAnalyze}
                    disabled={status === 'loading'}
                    startIcon={status === 'loading' ? <CircularProgress size={18} color="inherit" /> : <AutoAwesomeRoundedIcon />}
                  >
                    {status === 'loading' ? copy.analyze.uploader.loadingAction : copy.analyze.uploader.runAnalysis}
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
                          <Typography variant="h4">{copy.analyze.uploader.processingTitle}</Typography>
                          <Typography color="text.secondary">{copy.analyze.uploader.processingDescription}</Typography>
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
                              {copy.analyze.result.overline}
                            </Typography>
                            <Typography variant="h2">{emotionDetails.label}</Typography>
                            <Typography color="text.secondary" sx={{ maxWidth: 600 }}>
                              {emotionDetails.tone}
                            </Typography>
                          </Box>
                          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                            <Chip label={copy.analyze.result.successChip} color="success" sx={{ fontWeight: 700 }} />
                            <Chip label={copy.analyze.result.productChip} color="secondary" variant="outlined" sx={{ fontWeight: 700 }} />
                          </Stack>
                        </Stack>

                        <Divider />

                        <Grid container spacing={2}>
                          <Grid size={{ xs: 12, md: 4 }}>
                            <Card sx={{ height: '100%', bgcolor: 'rgba(255,255,255,0.72)', boxShadow: 'none', border: '1px solid rgba(236,72,153,0.08)' }}>
                              <CardContent sx={{ p: 2.5 }}>
                                <Typography variant="overline" color="text.secondary">
                                  {copy.analyze.result.dominantMood}
                                </Typography>
                                <Typography variant="h3">{emotionDetails.label}</Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                          <Grid size={{ xs: 12, md: 4 }}>
                            <Card sx={{ height: '100%', bgcolor: 'rgba(255,255,255,0.72)', boxShadow: 'none', border: '1px solid rgba(124,58,237,0.08)' }}>
                              <CardContent sx={{ p: 2.5 }}>
                                <Typography variant="overline" color="text.secondary">
                                  {copy.analyze.result.productReadout}
                                </Typography>
                                <Typography variant="h5">{copy.analyze.result.productReadoutValue}</Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                          <Grid size={{ xs: 12, md: 4 }}>
                            <Card sx={{ height: '100%', bgcolor: 'rgba(255,255,255,0.72)', boxShadow: 'none', border: '1px solid rgba(236,72,153,0.08)' }}>
                              <CardContent sx={{ p: 2.5 }}>
                                <Typography variant="overline" color="text.secondary">
                                  {copy.analyze.result.backendGoal}
                                </Typography>
                                <Typography variant="h5">{copy.analyze.result.backendGoalValue}</Typography>
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

                  <Alert severity="info">{copy.analyze.result.infoAlert}</Alert>
                </Stack>
              )}

              {status === 'idle' && (
                <Card variant="outlined" sx={{ borderRadius: 4, borderStyle: 'dashed' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Stack spacing={1.5}>
                      <Typography variant="h4">{copy.analyze.idle.title}</Typography>
                      <Typography color="text.secondary">{copy.analyze.idle.description}</Typography>
                      <Typography color="text.secondary">{copy.analyze.idle.support}</Typography>
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
