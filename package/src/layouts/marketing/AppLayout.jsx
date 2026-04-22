import {
  AppBar,
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded';
import { NavLink, Outlet } from 'react-router';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Analyze', to: '/analyze' },
  { label: 'About', to: '/about' },
];

const navButtonStyles = {
  color: 'text.primary',
  fontWeight: 600,
  '&.active': {
    color: 'primary.main',
    bgcolor: 'primary.light',
  },
};

export default function AppLayout() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#fff8fb',
        backgroundImage:
          'radial-gradient(circle at top, rgba(244, 114, 182, 0.12), transparent 28%), radial-gradient(circle at 85% 10%, rgba(168, 85, 247, 0.12), transparent 18%), linear-gradient(180deg, rgba(255,249,251,1) 0%, rgba(248,241,255,1) 48%, rgba(239,246,255,1) 100%)',
      }}
    >
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(42, 53, 71, 0.08)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1.5, justifyContent: 'space-between', gap: 2 }}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 3,
                  display: 'grid',
                  placeItems: 'center',
                  background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                  color: 'white',
                  boxShadow: '0 18px 30px rgba(168, 85, 247, 0.24)',
                }}
              >
                <GraphicEqRoundedIcon />
              </Box>
              <Box>
                <Typography variant="h5" fontWeight={700} lineHeight={1}>
                  Mimi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Emotional Audio Intelligence
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navItems.map((item) => (
                <Button
                  key={item.to}
                  component={NavLink}
                  to={item.to}
                  sx={navButtonStyles}
                >
                  {item.label}
                </Button>
              ))}

              <Button component={NavLink} to="/analyze" variant="contained" sx={{ ml: 1 }}>
                Try the demo
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main">
        <Outlet />
      </Box>

      <Container maxWidth="lg" sx={{ pb: 5, pt: 2 }}>
        <Divider sx={{ mb: 3, opacity: 0.6 }} />
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
        >
          <Stack spacing={0.5}>
            <Typography variant="body2" color="text.secondary">
              Built to turn an academic ML demo into a warmer, more emotionally expressive product story.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Frontend rebuilt with React, Vite and MUI around a softer audio journey with feeling, trust and clarity.
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1.5} alignItems="center">
            <Chip label="Portfolio iteration" color="primary" variant="outlined" />
            <Avatar sx={{ width: 34, height: 34, bgcolor: 'primary.main', fontSize: 14 }}>M</Avatar>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
