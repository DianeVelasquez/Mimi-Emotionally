import { Box, Stack, Typography } from '@mui/material';

export default function EmotionalIntro() {
  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'grid',
        placeItems: 'center',
        overflow: 'hidden',
        background:
          'radial-gradient(circle at top, rgba(255, 166, 201, 0.3), transparent 30%), radial-gradient(circle at 80% 20%, rgba(168, 139, 250, 0.2), transparent 22%), linear-gradient(180deg, #fff9fb 0%, #f6f0ff 52%, #eef6ff 100%)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: 520,
          height: 520,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 70%)',
          filter: 'blur(16px)',
          animation: 'introGlow 2.8s ease-in-out infinite',
        }}
      />

      <Stack spacing={3} alignItems="center" sx={{ position: 'relative', textAlign: 'center', px: 3 }}>
        <Box sx={{ position: 'relative', width: { xs: 220, md: 280 }, height: { xs: 220, md: 280 } }}>
          <Box
            className="mimi-cat-float"
            sx={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}
          >
            <svg viewBox="0 0 260 260" width="100%" height="100%" aria-hidden="true">
              <defs>
                <linearGradient id="catGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#f3f4ff" />
                </linearGradient>
                <linearGradient id="headphones" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>

              <ellipse cx="130" cy="222" rx="58" ry="16" fill="rgba(79, 70, 229, 0.12)" />

              <path d="M86 62 L108 36 L120 78 Z" fill="url(#catGlow)" stroke="#d5d8ea" strokeWidth="3" />
              <path d="M174 62 L152 36 L140 78 Z" fill="url(#catGlow)" stroke="#d5d8ea" strokeWidth="3" />

              <path
                d="M74 120 C74 78, 98 58, 130 58 C162 58, 186 78, 186 120 L186 148 C186 187, 162 210, 130 210 C98 210, 74 187, 74 148 Z"
                fill="url(#catGlow)"
                stroke="#d5d8ea"
                strokeWidth="3"
              />

              <path d="M82 84 C92 48, 168 48, 178 84" fill="none" stroke="url(#headphones)" strokeWidth="12" strokeLinecap="round" />
              <rect x="64" y="94" width="18" height="52" rx="9" fill="url(#headphones)" />
              <rect x="178" y="94" width="18" height="52" rx="9" fill="url(#headphones)" />

              <ellipse cx="108" cy="122" rx="9" ry="12" fill="#2f365f" className="mimi-cat-eye mimi-cat-eye-left" />
              <g className="mimi-cat-eye-right-group">
                <ellipse cx="152" cy="122" rx="9" ry="12" fill="#2f365f" className="mimi-cat-eye mimi-cat-eye-right" />
                <path d="M143 122 Q152 129 161 122" fill="none" stroke="#2f365f" strokeWidth="4" strokeLinecap="round" className="mimi-cat-wink" />
              </g>

              <path d="M126 136 L130 142 L134 136 Z" fill="#f59ab1" />
              <path d="M120 152 Q130 160 140 152" fill="none" stroke="#f59ab1" strokeWidth="3.5" strokeLinecap="round" />

              <path d="M96 142 L66 136" stroke="#d7b7c7" strokeWidth="3" strokeLinecap="round" />
              <path d="M96 149 L62 149" stroke="#d7b7c7" strokeWidth="3" strokeLinecap="round" />
              <path d="M164 142 L194 136" stroke="#d7b7c7" strokeWidth="3" strokeLinecap="round" />
              <path d="M164 149 L198 149" stroke="#d7b7c7" strokeWidth="3" strokeLinecap="round" />

              <ellipse cx="98" cy="150" rx="11" ry="7" fill="rgba(245,154,177,0.34)" />
              <ellipse cx="162" cy="150" rx="11" ry="7" fill="rgba(245,154,177,0.34)" />
            </svg>
          </Box>
        </Box>

        <Stack spacing={1} alignItems="center">
          <Typography variant="h2" sx={{ maxWidth: 540 }}>
            Mimi wakes up with music first.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 520 }}>
            A softer, more emotional introduction before the experience opens and the audio story begins.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
