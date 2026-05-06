import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Stack, Typography } from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import { useLanguage } from '../../i18n/LanguageContext';

const INTRO_DURATION = 6200;

export default function EmotionalIntro({ onComplete }) {
  const { copy } = useLanguage();
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const startExit = window.setTimeout(() => setIsLeaving(true), INTRO_DURATION - 900);
    const finishIntro = window.setTimeout(() => onComplete(), INTRO_DURATION);

    return () => {
      window.clearTimeout(startExit);
      window.clearTimeout(finishIntro);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsLeaving(true);
    window.setTimeout(() => onComplete(), 260);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'grid',
        placeItems: 'center',
        overflow: 'hidden',
        background: '#050816',
        color: 'white',
        transition: 'opacity 900ms ease, transform 900ms ease',
        opacity: isLeaving ? 0 : 1,
        transform: isLeaving ? 'scale(1.03)' : 'scale(1)',
      }}
    >
      <Box
        component="video"
        autoPlay
        muted
        playsInline
        preload="auto"
        className="mimi-intro-video"
        src="/media/intro/MimiEmotionally.mp4"
      />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(4,6,15,0.18) 0%, rgba(4,6,15,0.56) 44%, rgba(4,6,15,0.88) 100%)',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 20% 20%, rgba(255, 116, 181, 0.2), transparent 28%), radial-gradient(circle at 80% 24%, rgba(131, 105, 255, 0.22), transparent 24%), radial-gradient(circle at 50% 82%, rgba(117, 214, 255, 0.14), transparent 28%)',
        }}
      />

      <Stack spacing={3} alignItems="center" sx={{ position: 'relative', textAlign: 'center', px: 3, width: '100%' }}>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{
            px: 1.5,
            py: 0.75,
            borderRadius: 999,
            bgcolor: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.16)',
            backdropFilter: 'blur(18px)',
            animation: 'mimiIntroPulse 2.6s ease-in-out infinite',
          }}
        >
          <FavoriteRoundedIcon sx={{ fontSize: 18, color: '#ff8fc8' }} />
          <Typography variant="overline" sx={{ letterSpacing: '0.22em', color: 'rgba(255,255,255,0.84)' }}>
            {copy.intro.eyebrow}
          </Typography>
          <VolumeUpRoundedIcon sx={{ fontSize: 18, color: '#8bdcff' }} />
        </Stack>

        <Box
          sx={{
            width: { xs: 'min(100%, 340px)', md: 420 },
            p: { xs: 2.5, md: 3 },
            borderRadius: 6,
            background: 'linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.05) 100%)',
            border: '1px solid rgba(255,255,255,0.16)',
            boxShadow: '0 35px 120px rgba(8, 12, 32, 0.42)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: 0.75,
              alignItems: 'end',
              height: { xs: 120, md: 140 },
            }}
          >
            {Array.from({ length: 12 }, (_, index) => (
              <Box
                key={index}
                className="mimi-intro-bar"
                sx={{
                  height: `${48 + ((index % 4) + 1) * 14}%`,
                  borderRadius: 999,
                  background:
                    index % 3 === 0
                      ? 'linear-gradient(180deg, rgba(255,143,200,0.95) 0%, rgba(255,143,200,0.18) 100%)'
                      : index % 3 === 1
                        ? 'linear-gradient(180deg, rgba(139,220,255,0.95) 0%, rgba(139,220,255,0.18) 100%)'
                        : 'linear-gradient(180deg, rgba(177,153,255,0.95) 0%, rgba(177,153,255,0.18) 100%)',
                  animationDelay: `${index * 120}ms`,
                }}
              />
            ))}
          </Box>
        </Box>

        <Stack spacing={1.5} alignItems="center" sx={{ maxWidth: 720 }}>
          <Typography variant="h2" sx={{ maxWidth: 640 }}>
            {copy.intro.title}
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 620, color: 'rgba(255,255,255,0.78)' }}>
            {copy.intro.description}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            <AutoAwesomeRoundedIcon sx={{ fontSize: 18 }} />
            <Typography variant="body2">{copy.intro.caption}</Typography>
          </Stack>
        </Stack>

        <Button variant="text" onClick={handleSkip} sx={{ color: 'rgba(255,255,255,0.88)' }}>
          {copy.intro.skip}
        </Button>
      </Stack>
    </Box>
  );
}

EmotionalIntro.propTypes = {
  onComplete: PropTypes.func.isRequired,
};
